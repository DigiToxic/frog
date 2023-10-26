import '@/styles/globals.css'
import WelcomeProvider from './components/welcomeContext'

export default function App({ Component, pageProps }) {
  return (
    <WelcomeProvider>
      <Component {...pageProps} />
    </WelcomeProvider>
  );
}
