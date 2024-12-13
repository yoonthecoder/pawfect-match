'use client';

import { Button } from '@nextui-org/react';
import { GoSmiley } from 'react-icons/go';
export default function Home() {
  return (
    <div>
      <Button color='danger' startContent={<GoSmiley />}>
        Click me
      </Button>
    </div>
  );
}
