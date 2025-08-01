import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div className={'flex pt-40 md:pt-60 w-full items-center justify-center'}>
      <div className={'w-full max-w-sm rounded-lg border-4 p-8'}>
        <h2 className="mb-6 text-center font-sans text-3xl font-bold">Recover Password</h2>
        <form className={'space-x-4'}>
          <span className={'flex flex-col items-center justify-center gap-4'}>
            <Input type="email" placeholder="Email" />
            <Button variant={'outline'} className={'w-full'}>
              Send Email Verification
            </Button>
            <span className={'flex items-center justify-center gap-2'}>
              Remember your password?
              <Link to={'/login'} className={'hover:underline'}>
                Login
              </Link>
            </span>
          </span>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
