import { useContext, createContext, FC, useReducer, Component } from "react";
import routerReducer from "./reducer";
import { IStateRouter } from "models";

const initialState: IStateRouter = {
  router: [],
};
const RouterContext = createContext(initialState);

export const RouterWrapper: FC = ({ children }) => {
  const [state] = useReducer(routerReducer, initialState);

  return (
    <RouterContext.Provider value={state}>{children}</RouterContext.Provider>
  );
};
export const useRouterContext = () => useContext(RouterContext);
