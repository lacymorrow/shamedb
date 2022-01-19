import { useSession, signIn, signOut } from 'next-auth/react';

export default function Component() {
  const { data: session, status } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} {status}
        <br />
        Access Token: {session.accessToken}
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in {status}
      <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
