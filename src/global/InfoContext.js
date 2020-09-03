import React from "react";
import { createContext } from "react";
import { useState } from "react";
export const InfoContext = createContext();
export const InfoProvider = (props) => {
  const [info, setInfo] = useState([]);
  return (
    <InfoContext.Provider value={[info, setInfo]}>
      {props.children}
    </InfoContext.Provider>
  );
};
