'use client'

import { useSession, signIn, signOut } from "next-auth/react"

const UserInfo = ({ user }: { user: { name?: string | null;email?: string | null; image?: string | null } }) => {
    return (
        <div className="group relative">
            <img src={user.image!} alt="user avatar" className="rounded-full w-10 h-10" />
            <ul className="hidden group-hover:block absolute right-0 pt-1 dark:text-slate-400 hover:text-blue-600 hover:dark:text-blue-400">
                <li>
                    <button className="border-solid rounded-sm px-1 border border-current inline-block whitespace-nowrap" onClick={() => signOut()}>Sign Out</button>
                </li>
            </ul>
        </div>
    )
};

const Auth = () => {
    const { data: session } = useSession();
    return (
        <div className="mr-4">
            {session?.user ? <UserInfo user={session.user!} /> : <button className="border-solid rounded-sm px-1 border border-current dark:text-slate-400 hover:text-blue-600 hover:dark:text-blue-400" onClick={() => signIn('google')}>Sign In</button>}
        </div>
    )
}
export default Auth;