// setup data layer

import React, { createContext, useContext, useReducer } from "react";
import { StateProviderTypes } from "../types";

export const StateContext = createContext({});

// build a provider
export const StateProvider = ({ reducer, initialState, children }:StateProviderTypes) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);


export const useStateValue = () => useContext(StateContext);