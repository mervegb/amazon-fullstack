import React, { createContext, useContext, useReducer } from "react";

//Prepares the data layer
export const StateContext = createContext();

//initial state is how the data layer will look like at the beginning
//reducer is how we will play with the data layer
//wrap our app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pull information from the data layer
export const useStateValue = () => useContext(StateContext);
