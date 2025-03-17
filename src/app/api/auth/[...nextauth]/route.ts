import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // For testing purposes, return a mock user
        const mockUser = {
          id: "1",
          name: "Test User",
          email: "test@example.com",
          role: "admin"
        };
        return mockUser;
      }
    })
  ],
  pages: {
    signIn: '/auth/login',
  },
  session: {
    strategy: "jwt",
  }
});

export { handler as GET, handler as POST };