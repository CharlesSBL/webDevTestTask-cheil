export interface IProductListInfo {
    id: number,
    productWeightMeasure: string,
    productWeightAmount: number,
    productDimensionG: number,
    productDimensionS: number,
    productDimensionW: number,
    productDimensionMeasure: string,
    productFunctionality: string[],

    energyClass: string,
    dateStart: Date,
    dateEnd: Date
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
    installmentsRate: number,

}

export interface IProductRo {
    readonly product: IProduct
}


export interface IProductCard {
    product: IProduct,
    productListInfo: IProductListInfo,
    productPrice: IProductPrice
}

export interface IProductCardRo {
    readonly productCard: IProductCard
}

export interface IProductPrice {
    productPrice: string,
    productPriceRight: string,
    currency: string
}

export interface IProductPriceRo {
    readonly prodPriceProps: IProductPrice;
}

export interface InstallmentsInterface {
    installmentsMonthlyFee: number,
    currencyKind: string,
    installmentsRate: number
}

export interface InstallmentsInterfaceRo {
    readonly installProps: InstallmentsInterface;
}
