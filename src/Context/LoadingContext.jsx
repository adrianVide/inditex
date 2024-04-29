import { createContext, useState, useContext } from "react";

const LoadingContext = createContext();

export const useLoadingContext = () => useContext(LoadingContext);

const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const setLoadingStatus = (status) => {
    setIsLoading(status);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, setLoadingStatus }}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
