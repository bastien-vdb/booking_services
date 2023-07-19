import '@/styles/globals.css';
import '@/styles/Calendar.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from "next-auth/react"
import { Provider as AdminStore } from 'react-redux';
import store from '@/states/store';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <AdminStore store={store}>
        <Component {...pageProps} />
      </AdminStore>
    </SessionProvider>

  );
}
