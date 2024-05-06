import NextAuth from 'next-auth';
import { authOptions } from '@/lib/authOptions';

const { handlers: { GET, POST } } = NextAuth(authOptions);

export { GET, POST }
