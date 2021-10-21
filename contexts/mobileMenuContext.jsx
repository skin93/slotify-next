import { createContext, useState } from 'react';

export const MobileMenuContext = createContext();

export const MobileMenuProvider = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <MobileMenuContext.Provider value={{ toggleMenu, setToggleMenu }}>
      {children}
    </MobileMenuContext.Provider>
  );
};
