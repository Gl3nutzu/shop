import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import type { AppType } from 'next/app';
import { trpc } from '../utils/trpc';
import { SessionProvider } from "next-auth/react"

const MyApp: AppType = ({ Component, pageProps: {session, ...pageProps} }: AppProps) => {
  return <SessionProvider session={session}><Component {...pageProps} /></SessionProvider>
};

export default trpc.withTRPC(MyApp);