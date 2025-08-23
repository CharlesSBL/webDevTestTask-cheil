export interface IProductListInfo {
    id: number,
    productWeightMeasure: string,
    productWeightAmount: number,
    productDimensionG: number,
    productDimensionS: number,
    productDimensionW: number,
    productDimensionMeasure: string,
    productFunctionality: string[]
}

export interface IProductListInfoRo {
    readonly listInfo: IProductListInfo
}

export interface IProduct {
    id: number,
    washerImageUrl: string,
    machineType: string,
    productFullName: string,
    installmentsMonthlyFee: number,
    currencyKind: string,
    installmentsRate: number
}

export interface IProductRo {
    readonly product: IProduct
}


export interface IProductCard {
    product: IProduct,
    productListInfo: IProductListInfo
}

export interface IProductCardRo {
    readonly productCard: IProductCard
}