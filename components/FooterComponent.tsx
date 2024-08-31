import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin, MailOpen, Twitter } from 'lucide-react';

type Props = {};

const FooterComponent = (props: Props) => {
  return (
    <div className="mt-40 bg-slate-900 dark:bg-slate-900 p-20 text-white flex justify-between items-center">
      <div>
        <Link href={'/'} className="flex items-center gap-5 pb-5">
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
        <p className="pb-5">
          Built with 💖 and 💡 by{' '}
          <Link
            href={'https://pm-portfolio-drab.vercel.app/'}
            className="underline font-semibold hover:font-bold"
          >
            Perpetual Meninwa
          </Link>
          . The source code is available on{' '}
          <Link
            href={'https://github.com/Perpy-del/revisplash'}
            className="underline font-semibold hover:font-bold"
          >
            GitHub
          </Link>
        </p>
        <p>&copy; Copyright 2024</p>
      </div>
      <div className="flex items-center justify-center gap-5">
        <Link href={'https://github.com/Perpy-del'} target="_blank">
          <Github className='hover:text-red-500 hover:scale-110 transition-transform ease-in-out duration-300' />
        </Link>
        <Link href={'https://www.linkedin.com/in/perpydev/'} target="_blank">
          <Linkedin className='hover:text-red-500 hover:scale-110 transition-transform ease-in-out duration-300' />
        </Link>
        <Link href={'https://x.com/pominpirational'} target="_blank">
          <Twitter className='hover:text-red-500 hover:scale-110 transition-transform ease-in-out duration-300' />
        </Link>
        <Link href={'mailto:perpetualmeninwa@gmail.com'} target="_blank">
          <MailOpen className='hover:text-red-500 hover:scale-110 transition-transform ease-in-out duration-300' />
        </Link>
      </div>
    </div>
  );
};

export default FooterComponent;
