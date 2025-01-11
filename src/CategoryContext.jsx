import React, { createContext, useContext, useState } from "react";

//create the context
const CategoryContext = createContext();

export const useCategory = () => {
  return useContext(CategoryContext);
};

export const CategoryProvider = ({ children }) => {
  const [nullData, setNullData] = useState("world");

  return (
    <CategoryContext.Provider value={[nullData, setNullData]}>
      {children}
    </CategoryContext.Provider>
  );
};
