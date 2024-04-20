import Link from "next/link"

export default function Home() {
  const links = [{ href: '/font', label: 'Font' }, { href: '/layout', label: 'Layout' }, { href: '/position', label: 'Position' }, {href: '/grid', label: 'Grid'}, {href: '/image', label: 'Image'}, {href: '/colors', label: 'Colors'}];
  return <nav>
    {links.map(link => <Link className="mr-2 hover:text-blue-500" href={link.href} key={link.href}>{link.label}</Link>)}
  </nav>
}
