import { SignedIn } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs/app-beta';
import Image from 'next/image';
import Link from 'next/link';
import Theme from './theme';
import MobileNav from './mobileNavBar';
import GlobalSearch from '../Search/globalSearch';

const NavBar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          width={23}
          height={23}
          alt="DevFlow"
        />

        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev <span className="text-primary-500">Overflow</span>
        </p>
      </Link>

      <GlobalSearch />

      <div className="flex">
        <Theme />
        <div className="hidden sm:block">
          <SignedIn>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: 'h-10 w-10',
                },
                variables: {
                  colorPrimary: '#ff7000',
                },
              }}
            />
          </SignedIn>
        </div>

        <div className="">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
