import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const InfoContext = createContext();
export const InfoProvider = (props) => {
  const [travelInfo, setTravelInfo] = useState([]);
  return (
    <InfoContext.Provider value={[travelInfo, setTravelInfo]}>
      {props.children}
    </InfoContext.Provider>
  );
};
