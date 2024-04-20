import Link from "next/link"

export default function Home() {
  const links = [{ href: '/font', label: 'Font' }, { href: '/layout', label: 'Layout' }, { href: '/position', label: 'Position' }, {href: '/grid', label: 'Grid'}, {href: '/image', label: 'Image'}, {href: '/colors', label: 'Colors'}];
  return (<>
    <h1 className="sm:text-5xl text-3xl flex justify-center items-center">
      <svg className="w-10 h-10 sm:w-16 sm:h-16" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <linearGradient id="gradient">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <path fill="url(#gradient)"
            d="M6.7 85s25.8-11.5 90.5 49.8c18.9 17.8 46.7 37.6 72.9 26.3-19 18.3-46.5 16.9-66.6 1.3-12.4-9.6-22.3-22.4-33.6-33.1C51.2 111.5 32.7 90.1 6.7 85z" />
        <path fill="url(#gradient)"
            d="M6.7 79.2c0-.1 43.4-27.2 103.1 21.6 59.6 48.6 85.2 35.8 85.4 35.7-2.5 1.2-5.3 6.2-7.5 8.2-7.2 6.2-16.1 10.2-25.5 11.6-22.1 3.1-40.5-12.3-56-25.9-16.9-14.7-33.6-29.8-54.5-38.8-9.3-4-28.5-15.4-45-12.4z" />
        <path
            d="M189.3 76.9c-1.2-2.6-4.4-3.3-6.6-5.6-1-1-1.2-6.8-2.1-8.8-5-11.8-17.8-20.2-30.2-22.3-17.6-3.1-23.6-5.5-41.4-3.7 0 0-6.8.8-11.2 1.9 2.8-1.9 5.7-3.2 8.5-4.2-.5-.6-1-1.1-1.1-1.2-3.1-3.4-7.2-5-11.7-5.9-6.4-1.3-13-1.4-19.6-.9-1.7.1-3.7-.3-5.4.3-2.6.7-3.2 2.6-.2 3.2 4.7 1 9.3 3.5 12.6 7 .9.9 2 2.3 2 3.7-.1 2-1.8 2.4-3.4 3.1-8.3 3.3-17 7.8-23.9 13.5-9.3 7.8-16.9 17.6-21.9 28.7-6 13.3-8.3 28.3-6.6 42.8.1.5 1.7 8.6 3.6 12.3-2-2.4-3.5-4.7-4.7-6.8-3.7 1.2-11.3 6.7-12 7.4-3.8 3.8-7.1 8.5-9 13.6-.6 1.5-.5 7.6 1.7 8 1.5.4 6.5-5.1 8.1-6 6.4-3.7 14.7-5.4 21.7-2.7 3 1.1 5.4 4.4 8.2 2.5 7.2-4.8-3.3-18.3-7-21.5-1.7-1.5 4.8-10.9 5.7-12.5 3-4.8 6.6-9.4 10.7-13.5C68 95.3 87.4 85.9 107 83.8c.7-2.5 1.8-5.2 3.4-7.9-.8 3.2-.9 7.6-.9 7.6l-.2.6c-.5 2.5-.3 11.8.5 12.7 5.6 5.6 17.6-10.3 17.7-15.4 0-1.8 12.7-2.8 14.4-2.9 14.8-.9 29.4.7 44.1 3 .9.2 1.8.3 2.6-.1 1.7-.7 1.2-3.2.7-4.5z"
            fill="url(#gradient)" />
      </svg>
      <span className="bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 text-transparent">Tailwind Dolphin</span>
    </h1>
    <div>A tailwind multi-tool to convert and visualize your classes properties</div>
    <nav className="text-2xl flex flex-wrap justify-center">
      {links.map(link => <Link className="mr-2 hover:text-blue-500" href={link.href} key={link.href}>{link.label}</Link>)}
    </nav>
  </>)
}
