import React from "react";

type ColorsContextType = [string, React.Dispatch<React.SetStateAction<string>>];

const ColorsContext = React.createContext<ColorsContextType | undefined>(
  undefined
);
ColorsContext.displayName = "ColorContext";

const ColorsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [favoriteColor, setFavoriteColor] = React.useState("");
  return (
    <ColorsContext.Provider value={[favoriteColor, setFavoriteColor]}>
      {children}
    </ColorsContext.Provider>
  );
};

const useFavoriteColor = () => {
  const context = React.useContext(ColorsContext);
  if (!context) {
    throw new Error(
      "the useFavoriteColor hook must be used within an ColorsContextProvider."
    );
  }
  return context;
};

export { useFavoriteColor, ColorsContextProvider };
