import { createContext } from "react";

export const CardContext = createContext();

export function CardContextProvider(props) {
  return <div>CardSmallContext</div>;
}
