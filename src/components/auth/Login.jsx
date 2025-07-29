'use client';

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Fingerprint, Github, Loader } from 'lucide-react';
import { toast } from 'sonner';
import { GithubLogin } from '@/supabase/api';



const Login = () => {
     const [success, setIsSuccess] = useState(false);
    const [isPending, setIsPending] = useState(false)
    async function githubLogin() {
    await GithubLogin(); 
    setIsSuccess(true);
  }

//   useEffect(() => {
//     if (success) {
//       toast("Successfully Logged In");
//     }
//   }, [success]);

  return (
    <div className={'flex pt-20 w-full items-center justify-center'}>
      <div className={'w-full max-w-sm rounded-lg border-4 p-8'}>
        <h2 className="mb-6 text-center font-sans text-3xl font-bold">Login</h2>
        <form className={'space-x-4'}>
          <span className={'flex flex-col items-center justify-center gap-4'}>
            <Input type="email" placeholder="Email" name={'email'} />
            <Input type="password" placeholder="Password" name={'password'} />
            <div className={'flex w-full items-center justify-between'}>
              <span className={'flex items-center justify-center gap-2'}>
                <Input type={'checkbox'} className={'w-3'} />
                <p>Remember me</p>
              </span>
              <span>
                <Link to={'/forgot-password'} className={'hover:underline'}>
                  Forgot Password?
                </Link>
              </span>
            </div>
            <Button variant={'outline'} className={'w-full'}>
              {isPending ? (
                <>
                  Logging in <Loader className="animate-spin" />
                </>
              ) : (
                'Log In'
              )}
            </Button>
            <span className={'flex items-center justify-center gap-2'}>
              Don't have an account?
              <Link to={'/signup'} className={'hover:underline'}>
                Register
              </Link>
            </span>
          </span>
        </form>
        <div className="mt-4 flex w-full items-center justify-center">
          <div className="flex w-full items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="px-2 text-input">OR</span>
          </div>
          <div className="flex w-full items-center">
            <span className="w-full border-t"></span>
          </div>
        </div>
        <div className={'flex w-full flex-col items-center justify-center gap-4 pt-4'}>
          <Button variant={'outline'} className={'w-full border-2'} >
            <img src={'google.svg'} width={'20'} height={'20'} alt={'google'} />
            Continue with Google
          </Button>
          <Button
            variant={'outline'}
            className={'w-full border-2 [&_svg]:size-5'}
            onClick={githubLogin}
          >
            <Github />
            Continue with GitHub
          </Button>

          <Button variant={'outline'} className={'w-full border-2 [&_svg]:size-5'}>
            <Fingerprint />
            Continue with Passkey
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
