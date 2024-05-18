import { UserButton } from '@clerk/nextjs';
import React from 'react';

const Page = () => {
  return (
    <div>
      <p>log in</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Page;
