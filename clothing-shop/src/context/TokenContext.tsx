import { createContext, useContext, useState, ReactNode } from "react";

type token = {
  accessToken: string;
  refreshToken: string;
};

interface TokenContextType {
  token: token;
  setToken: (token: token) => void;
}

// context
const TokenContext = createContext<TokenContextType | undefined>(undefined);

// provider
export const TokenProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<token>({
    accessToken: " ",
    refreshToken: " ",
  });

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

// custom hook for easy access
// eslint-disable-next-line react-refresh/only-export-components
export const useToken = () => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error("useToken must be used within a TokenProvider");
  }
  return context;
};
