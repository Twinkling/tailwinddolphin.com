import { PiGithubLogoFill } from 'react-icons/pi';

const Footer = () => {
    return (
        <footer className="mt-4 px-4 pb-8 justify-center items-center flex">
            <span>&copy; 2024</span>
            {/* GITHUB */}
            <a className='ml-2' href="https://github.com/Twinkling/tailwinddolphin.com">
                <PiGithubLogoFill className='w-6 h-6 mr-4 dark:text-slate-400 hover:text-blue-600 hover:dark:text-blue-400' />
            </a>
        </footer>
    )
};

export default Footer;
