'use client';

import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react';
import NavLink from './NavLink';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

export default function TopNav() {
  return (
    <Navbar maxWidth='full'>
      <NavbarBrand as={Link} href='/'>
        Pawfect Match
      </NavbarBrand>
      <NavbarContent justify='center'>
        <NavLink label='Matches' href='/members' />
        <NavLink label='Lists' href='/lists' />
        <NavLink label='Messages' href='/messages' />
      </NavbarContent>
      <NavbarContent justify='end'>
        <Button as={Link} href='/login' variant='bordered'>
          Login
        </Button>
        <Button as={Link} href='/register' variant='bordered'>
          Register
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
