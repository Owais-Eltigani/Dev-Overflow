import React, { ReactNode } from 'react';
import NavBar from '@/components/shared/navbar';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="bacground-light850_dark100 relative">
      <NavBar />
      <div className="flex">
        <section className="">left nav</section>

        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14 ">
          <div className="mx-auto w-full max-w-3xl">{children}</div>
        </section>

        <section>left side bar</section>
      </div>
    </main>
  );
};

export default Layout;
