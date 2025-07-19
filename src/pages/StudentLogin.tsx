
import React, { useState } from 'react';
import { LoginForm } from '@/components/auth/LoginForm';
import { SignupForm } from '@/components/auth/SignupForm';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const StudentLogin = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="relative">
      <div className="absolute top-4 right-4">
        <Link to="/teacher-login">
          <Button variant="outline">Teacher Login</Button>
        </Link>
      </div>
      {isSignup ? (
        <SignupForm 
          userType="student" 
          onSwitchToLogin={() => setIsSignup(false)} 
        />
      ) : (
        <LoginForm 
          userType="student" 
          onSwitchToSignup={() => setIsSignup(true)} 
        />
      )}
    </div>
  );
};

export default StudentLogin;
