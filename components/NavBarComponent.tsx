'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ModeToggle } from './ModeToggle';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

type Props = {};

const NavBarComponent = (props: Props) => {
  const router = useRouter();
  
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleNavBarScroll = () =>
      window.scrollY > 50 ? setScrolled(true) : setScrolled(false);

    window.addEventListener('scroll', handleNavBarScroll);

    return () => window.removeEventListener('scroll', handleNavBarScroll);
  }, []);

  return (
    <div
      className={`flex items-center justify-between w-full h-24 z-50 sticky bg-slate-200 dark:bg-slate-900 px-20 top-0 ${
        scrolled ? 'shadow-[2px_2px_2px_2px_rgba(198,198,198,0.07)]' : ''
      }`}
    >
      <Link href={'/'} className="flex items-center gap-5">
        <>
          <Image
            src={'/revsplash_logo.svg'}
            alt="Revsplash Logo"
            width={40}
            height={40}
            className="dark:hidden flex"
          />
          <Image
            src={'/revsplash_logo_dark.svg'}
            alt="Revsplash Dark Logo"
            width={40}
            height={40}
            className="dark:flex hidden w-[40px] h-[40px]"
          />
        </>
        <span className="font-bold text-[40px] font-sans">
          Revi<span className="text-red-300">Splash</span>
        </span>
      </Link>
      <div className="flex items-center gap-5">
        <Button className="text-lg font-medium" onClick={() => router.push('#choose')}>Select Image</Button>
        <ModeToggle />
      </div>
    </div>
  );
};

export default NavBarComponent;
