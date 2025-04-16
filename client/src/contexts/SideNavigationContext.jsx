import React, { createContext, useState } from "react";

export const SideNavigationContext = createContext(null);

export const SideNavigationProvider = ({ children }) => {
  const [isSideNavigationOpen, setIsSideNavigationOpen] = useState(false);

  return (
    <SideNavigationContext.Provider
      value={{ isSideNavigationOpen, setIsSideNavigationOpen }}
    >
      {children}
    </SideNavigationContext.Provider>
  );
};
