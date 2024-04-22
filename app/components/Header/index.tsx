import { Suspense } from 'react';
import { PiCoffeeFill } from "react-icons/pi";
import Logo from "@/components/Logo";
import { ToggleLang } from '@/components/ToggleLang';
import ToggleTheme from '@/components/ToggleTheme';

const Header = ({ lang }: {lang?:string}) => {
    return (
      <header className="mx-4 h-16 flex justify-between items-center">
        <Logo />
        <div className='flex justify-between items-center'>
          {/* THEME TOGGLE */}
          <ToggleTheme />
          {/* ko-fi */}
          <a href='https://ko-fi.com/twinkling'><PiCoffeeFill className='w-6 h-6 mr-4 dark:text-slate-400 hover:text-blue-600 hover:dark:text-blue-400' /></a>
          {/* Toggle Language */}
          <Suspense>
            <ToggleLang lang={lang} />
          </Suspense>
        </div>
      </header>
    );
};
export default Header;