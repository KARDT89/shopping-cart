'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Fingerprint, Github } from 'lucide-react';
import { signUpNewUser } from '@/supabase/api';
import { useNavigate } from 'react-router-dom';
import { Loader } from 'lucide-react';
import { toast } from 'sonner';

const Register = () => {
  const [isPending, setIsPending] = useState(false);
 const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const email = formdata.get('email');
    const password = formdata.get('password');
    console.log(email, password);

    const { data, error } = await signUpNewUser(email, password);
    if(data){
      toast("Successfully created new user")
      navigate("/products")
    }
  }

  return (
    <div className={'flex pt-20 w-full items-center justify-center'}>
      <div className={'w-full max-w-sm rounded-lg border-4 p-8'}>
        <h2 className="mb-6 text-center font-sans text-3xl font-bold">Signup</h2>
        <form className={'space-x-4'} onSubmit={handleSubmit}>
          <span className={'flex flex-col items-center justify-center gap-4'}>
            <Input type="text" placeholder="Name" name={'name'} />
            <Input type="email" placeholder="Email" name={'email'} />
            <Input type="password" placeholder="Password" name={'password'} />
            <Button variant={'outline'} className={'w-full'} disabled={isPending} type={'submit'}>
              {isPending ? (
                <>
                  Creating your Account <Loader className="animate-spin" />
                </>
              ) : (
                'Sign up'
              )}
            </Button>
            <span className={'flex items-center justify-center gap-2'}>
              Already have an account?
              <Link to={'/login'} className={'hover:underline'}>
                Login
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
          <Button variant={'outline'} className={'w-full border-2'}>
            <img src={'images/google.svg'} width={'20'} height={'20'} alt={'google'} />
            Continue with Google
          </Button>
          <Button variant={'outline'} className={'w-full border-2 [&_svg]:size-5'}>
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

export default Register;
