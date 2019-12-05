import React, { createContext, useReducer} from 'react';

export const initialState = {
  searchValue: ""
}

export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children}) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
);

