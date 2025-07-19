
import React, { useState } from 'react';
import { LoginForm } from '@/components/auth/LoginForm';
import { SignupForm } from '@/components/auth/SignupForm';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const TeacherLogin = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="relative">
      <div className="absolute top-4 right-4">
        <Link to="/student-login">
          <Button variant="outline">Student Login</Button>
        </Link>
      </div>
      {isSignup ? (
        <SignupForm 
          userType="teacher" 
          onSwitchToLogin={() => setIsSignup(false)} 
        />
      ) : (
        <LoginForm 
          userType="teacher" 
          onSwitchToSignup={() => setIsSignup(true)} 
        />
      )}
    </div>
  );
};

export default TeacherLogin;
