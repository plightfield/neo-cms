import { createContext } from "react";

export function getContext<T>(useFunction: (...args: any[]) => T) {
  return createContext<T>(null as any);
}
