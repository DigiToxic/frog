import { createContext, useContext, useState } from 'react';

const WelcomeContext = createContext(undefined);

export const useWelcome = () => {
  const context = useContext(WelcomeContext);
  if (!context) {
    throw new Error('useWelcome must be used within a WelcomeProvider');
  }
  return context;
};

const WelcomeProvider = ({ children }) => {
  const [welcomeShown, setWelcomeShown] = useState(false);

  const value = {
    welcomeShown,
    setWelcomeShown,
  };

  return <WelcomeContext.Provider value={value}>{children}</WelcomeContext.Provider>;
};

export default WelcomeProvider;
