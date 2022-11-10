import React, { useState, createContext, useContext } from "react";

/*
The idea of this context it is allow a mechanism to pass the information between the components of the page.
*/

const AppContext = createContext();

const AppContextProvider = (props) => {
  const { children } = props;

  const [dropdownItem1, setDropdownItem1] = useState(0);
  const [dropdownItem2, setDropdownItem2] = useState(0);
  const [dropdownItem3, setDropdownItem3] = useState(0);

  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  
  const contextValues = {
    dropdownItem1, setDropdownItem1,
    dropdownItem2, setDropdownItem2,
    dropdownItem3, setDropdownItem3,
    option1, setOption1,
    option2, setOption2,
    option3, setOption3

  };

  return (
    <AppContext.Provider value={contextValues}>
      {children}
    </AppContext.Provider>
  );
};

export const useItemContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("AppContext must be used within a AppProvider");
  }
  return context;
};

export { AppContext, AppContextProvider };
