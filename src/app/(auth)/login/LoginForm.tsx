'use client';

import { Input } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { loginSchema, LoginSchema } from '@/lib/schemas/LoginSchemas';
import { zodResolver } from '@hookform/resolvers/zod';

export default function LoginForm() {
  interface ILoginFormInput {
    email: string;
    password: string;
  }
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<ILoginFormInput>({
    resolver: zodResolver(loginSchema),
    mode: 'onTouched',
  });
  const onSubmit = (data: LoginSchema) => console.log(data);

  return (
    <div className='flex flex-col gap-3 w-1/2'>
      <h1 className='text-3xl font-semibold'>Login</h1>
      <p>Welcome back to Pawfect Match</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='space-y-4'>
          <Input
            {...register('email')}
            label='Email'
            variant='bordered'
            isInvalid={!!errors.email}
            errorMessage={errors.email?.message as string}
          />
          <Input
            {...register('password')}
            label='Password'
            variant='bordered'
            isInvalid={!!errors.password}
            errorMessage={errors.password?.message as string}
          />
          <Button fullWidth color='primary' type='submit' isDisabled={!isValid}>
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
