import { createContext } from "react";
import type { ICardMax, IFetchStateData, IProductQuantity, IProductStateType } from "../interfaces/interfaces";

export const fetchContext = createContext<IFetchStateData | null>(null);

export const ProductContext = createContext<IProductStateType | null>(null);
export const QuantityContext = createContext<IProductQuantity | null>(null);

export const MaxContext = createContext<ICardMax | null>(null);
