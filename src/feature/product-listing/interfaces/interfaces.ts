import type ProductDataTypes from "../types/ProductDataTypes";

export interface IFetchStateData {
    searchRestRequestVal: string,
    setSearchRestRequestVal: React.Dispatch<React.SetStateAction<string>>,
    menuFilterStateOptions: string[],
    setMenuFilterStateOptions: React.Dispatch<React.SetStateAction<string[]>>
    timeSearchUpdateMs: number,
}

export interface IFetchStateDataRo {
    readonly fetchStateData: IFetchStateData;
}

export interface IFilterItem {
    id: number,
    name: string,
    header: string,
    optionList: string[]
    mainOption: string
}

export interface IFilterItemRo {
    readonly filtItem: IFilterItem
}

export interface IProductStateType {
    products: ProductDataTypes[]
    setProducts: React.Dispatch<React.SetStateAction<ProductDataTypes[]>>
}

export interface IProductStateTypeRo {
    readonly productState: IProductStateType
}

export interface IProductQuantity {
    productQuantity: number,
    setProductQuantity: React.Dispatch<React.SetStateAction<number>>
}

export interface IProductQuantityRo {
    readonly counterProps: IProductQuantity
}

export interface ICardMax {
    cardsAmountMax: number,
    setCardsAmountMax: React.Dispatch<React.SetStateAction<number>>
}

export interface ICardMaxRo {
    readonly cardMax: ICardMax
}