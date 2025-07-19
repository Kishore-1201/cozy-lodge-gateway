
-- Create user roles enum
CREATE TYPE public.user_role AS ENUM ('student', 'teacher');

-- Create profiles table to store user information
CREATE TABLE public.profiles (
  id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT NOT NULL,
  role user_role NOT NULL DEFAULT 'student',
  department TEXT,
  student_id TEXT,
  employee_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id)
);

-- Create courses table
CREATE TABLE public.courses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  course_code TEXT NOT NULL,
  course_name TEXT NOT NULL,
  description TEXT,
  teacher_id UUID REFERENCES public.profiles(id),
  semester TEXT NOT NULL,
  credits INTEGER DEFAULT 3,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create classes/schedule table
CREATE TABLE public.classes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE,
  class_name TEXT NOT NULL,
  room TEXT NOT NULL,
  day_of_week INTEGER NOT NULL, -- 1=Monday, 7=Sunday
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  class_type TEXT DEFAULT 'Lecture', -- Lecture, Lab, Tutorial
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create assignments table
CREATE TABLE public.assignments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  due_date TIMESTAMP WITH TIME ZONE NOT NULL,
  priority TEXT DEFAULT 'medium', -- high, medium, low
  created_by UUID REFERENCES public.profiles(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create events table
CREATE TABLE public.events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  event_date DATE NOT NULL,
  event_time TIME NOT NULL,
  location TEXT NOT NULL,
  created_by UUID REFERENCES public.profiles(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create announcements table
CREATE TABLE public.announcements (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  course_id UUID REFERENCES public.courses(id),
  created_by UUID REFERENCES public.profiles(id),
  priority TEXT DEFAULT 'medium',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create student_courses junction table (for enrollment)
CREATE TABLE public.student_courses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE,
  enrolled_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  UNIQUE(student_id, course_id)
);

-- Enable Row Level Security on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.classes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_courses ENABLE ROW LEVEL SECURITY;

-- Create security definer function to get user role
CREATE OR REPLACE FUNCTION public.get_user_role()
RETURNS user_role AS $$
  SELECT role FROM public.profiles WHERE id = auth.uid();
$$ LANGUAGE SQL SECURITY DEFINER STABLE;

-- Profiles policies
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Teachers can view all profiles" ON public.profiles
  FOR SELECT USING (public.get_user_role() = 'teacher');

-- Courses policies
CREATE POLICY "Everyone can view courses" ON public.courses
  FOR SELECT USING (true);

CREATE POLICY "Teachers can manage courses" ON public.courses
  FOR ALL USING (public.get_user_role() = 'teacher');

-- Classes policies
CREATE POLICY "Everyone can view classes" ON public.classes
  FOR SELECT USING (true);

CREATE POLICY "Teachers can manage classes" ON public.classes
  FOR ALL USING (public.get_user_role() = 'teacher');

-- Assignments policies
CREATE POLICY "Students can view assignments for enrolled courses" ON public.assignments
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.student_courses sc 
      WHERE sc.student_id = auth.uid() AND sc.course_id = assignments.course_id
    ) OR public.get_user_role() = 'teacher'
  );

CREATE POLICY "Teachers can manage assignments" ON public.assignments
  FOR ALL USING (public.get_user_role() = 'teacher');

-- Events policies
CREATE POLICY "Everyone can view events" ON public.events
  FOR SELECT USING (true);

CREATE POLICY "Teachers can manage events" ON public.events
  FOR ALL USING (public.get_user_role() = 'teacher');

-- Announcements policies
CREATE POLICY "Students can view announcements for enrolled courses" ON public.announcements
  FOR SELECT USING (
    course_id IS NULL OR 
    EXISTS (
      SELECT 1 FROM public.student_courses sc 
      WHERE sc.student_id = auth.uid() AND sc.course_id = announcements.course_id
    ) OR public.get_user_role() = 'teacher'
  );

CREATE POLICY "Teachers can manage announcements" ON public.announcements
  FOR ALL USING (public.get_user_role() = 'teacher');

-- Student courses policies
CREATE POLICY "Students can view their enrollments" ON public.student_courses
  FOR SELECT USING (auth.uid() = student_id OR public.get_user_role() = 'teacher');

CREATE POLICY "Teachers can manage enrollments" ON public.student_courses
  FOR ALL USING (public.get_user_role() = 'teacher');

-- Create trigger function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email),
    COALESCE((NEW.raw_user_meta_data->>'role')::user_role, 'student')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to automatically create profile on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
