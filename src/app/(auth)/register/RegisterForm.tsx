'use client';

import { Input } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { registerSchema, RegisterSchema } from '@/lib/schemas/RegisterSchema';
import { zodResolver } from '@hookform/resolvers/zod';

export default function RegisterForm() {
  interface IRegisterFormInput {
    name: string;
    email: string;
    password: string;
  }
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<IRegisterFormInput>({
    resolver: zodResolver(registerSchema),
    mode: 'onTouched',
  });
  const onSubmit = (data: RegisterSchema) => console.log(data);

  console.log(isValid);

  return (
    <div className='flex flex-col gap-3 w-1/2'>
      <h1 className='text-3xl font-semibold'>Register</h1>
      <p>Welcome to Pawfect Match</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='space-y-4'>
          <Input
            {...register('name')}
            label='Name'
            variant='bordered'
            isInvalid={!!errors.name}
            errorMessage={errors.name?.message as string}
          />
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
            Register
          </Button>
        </div>
      </form>
    </div>
  );
}
