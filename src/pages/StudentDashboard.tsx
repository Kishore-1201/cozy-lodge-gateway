
import React from 'react';
import { Calendar, Clock, BookOpen, Users, Bell, Settings, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from '@/components/auth/AuthProvider';
import { useClasses } from '@/hooks/useClasses';
import { useAssignments } from '@/hooks/useAssignments';
import { useEvents } from '@/hooks/useEvents';
import { format } from 'date-fns';

const StudentDashboard = () => {
  const { profile, signOut } = useAuth();
  const { data: classes, isLoading: classesLoading } = useClasses();
  const { data: assignments, isLoading: assignmentsLoading } = useAssignments();
  const { data: events, isLoading: eventsLoading } = useEvents();

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-destructive text-destructive-foreground';
      case 'medium': return 'bg-yellow-500 text-white';
      case 'low': return 'bg-green-500 text-white';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  const getDayName = (dayNumber: number) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayNumber] || 'Unknown';
  };

  const formatTime = (time: string) => {
    return new Date(`1970-01-01T${time}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <GraduationCap className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">Campus Copilot</h1>
                <p className="text-sm text-muted-foreground">Your Personal College Assistant</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Welcome, {profile?.full_name}</span>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <Button onClick={signOut} variant="outline">
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Good day, {profile?.full_name?.split(' ')[0]}! 👋</h2>
          <p className="text-muted-foreground">Here's what's happening in your academic life today.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold">{classes?.length || 0}</p>
                  <p className="text-sm text-muted-foreground">Total Classes</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-orange-500" />
                <div>
                  <p className="text-2xl font-bold">{assignments?.length || 0}</p>
                  <p className="text-sm text-muted-foreground">Assignments</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-green-500" />
                <div>
                  <p className="text-2xl font-bold">{events?.length || 0}</p>
                  <p className="text-sm text-muted-foreground">Upcoming Events</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-purple-500" />
                <div>
                  <p className="text-2xl font-bold">85%</p>
                  <p className="text-sm text-muted-foreground">Week Progress</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Today's Schedule */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Class Schedule</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {classesLoading ? (
                <p>Loading classes...</p>
              ) : classes && classes.length > 0 ? (
                <div className="space-y-4">
                  {classes.slice(0, 5).map((classItem: any) => (
                    <div key={classItem.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-2 h-12 bg-primary rounded-full"></div>
                        <div>
                          <h4 className="font-semibold">{classItem.class_name}</h4>
                          <p className="text-sm text-muted-foreground">{classItem.room}</p>
                          <p className="text-xs text-muted-foreground">{getDayName(classItem.day_of_week)}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{formatTime(classItem.start_time)} - {formatTime(classItem.end_time)}</p>
                        <Badge variant="secondary">{classItem.class_type}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No classes scheduled.</p>
              )}
            </CardContent>
          </Card>

          {/* Upcoming Deadlines */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Deadlines</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {assignmentsLoading ? (
                <p>Loading assignments...</p>
              ) : assignments && assignments.length > 0 ? (
                <div className="space-y-3">
                  {assignments.slice(0, 5).map((assignment: any) => (
                    <div key={assignment.id} className="p-3 border rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-sm">{assignment.title}</h4>
                        <Badge className={`text-xs ${getPriorityColor(assignment.priority)}`}>
                          {assignment.priority}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">{assignment.courses?.course_code}</p>
                      <p className="text-xs text-muted-foreground">Due: {format(new Date(assignment.due_date), 'MMM dd, yyyy')}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No assignments found.</p>
              )}
            </CardContent>
          </Card>

          {/* Campus Events */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Campus Events</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {eventsLoading ? (
                <p>Loading events...</p>
              ) : events && events.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {events.slice(0, 4).map((event: any) => (
                    <div key={event.id} className="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                      <h4 className="font-semibold mb-2">{event.title}</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>📅 {format(new Date(event.event_date), 'MMM dd, yyyy')}</p>
                        <p>🕒 {formatTime(event.event_time)}</p>
                        <p>📍 {event.location}</p>
                      </div>
                      <Button variant="outline" size="sm" className="mt-3 w-full">
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No events found.</p>
              )}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <BookOpen className="mr-2 h-4 w-4" />
                  View Full Schedule
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Clock className="mr-2 h-4 w-4" />
                  View All Assignments
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Users className="mr-2 h-4 w-4" />
                  Browse Events
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Calendar className="mr-2 h-4 w-4" />
                  My Calendar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
