import { trpc } from '../utils/trpc';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  const hello = trpc.hello.useQuery({ text: 'client' });
  if(session) {
    if (!hello.data) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <p>{hello.data.greeting} {session.user?.name}</p>
        <button onClick={() => signOut()}>Log out</button>
      </div>
    );
  }
  else {
    return (<div>
      <button onClick={() => signIn()}>Login</button>
    </div>);
  }
}