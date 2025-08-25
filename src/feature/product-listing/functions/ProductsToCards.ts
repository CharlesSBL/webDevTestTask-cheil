import type { IProductStateType } from "../interfaces/interfaces";
import type { IProduct, IProductCard, IProductListInfo, IProductPrice } from "../types/cardTypes";
import type ProductDataTypes from "../types/ProductDataTypes";


export default function ProductsToCards(productState: IProductStateType) {
    return productState.products.map((data: ProductDataTypes) => {
        const product_: IProduct = {
            id: data.id,
            washerImageUrl: data.image,
            machineType: data.type,
            productFullName: data.full_name,
            installmentsMonthlyFee: data.installments.monthly_fee,
            currencyKind: data.currency,
            installmentsRate: data.installments.monthly_fee
        };

        const listInfo_: IProductListInfo = {
            id: data.id,
            productCapacityMeasure: data.capacity.measure,
            productCapacityAmount: data.capacity.amount,
            productDimensionG: data.dimensions.G,
            productDimensionS: data.dimensions.S,
            productDimensionW: data.dimensions.W,
            productDimensionMeasure: data.dimensions.measure,
            productFunctionality: data.functionality,
            energyClass: data.energy_class,
            dateStart: data.price_expiration_date.from,
            dateEnd: data.price_expiration_date.to
        };



        const productPrice_: IProductPrice = {
            productPrice: data.price.toString().split(".")[0],
            productPriceRight: data.price.toString().split(".")[1] == null ? "00" : data.price.toString().split(".")[1],
            currency: data.currency
        }

        const productCard: IProductCard = {
            product: product_,
            productListInfo: listInfo_,
            productPrice: productPrice_
        }

        return productCard;
    })
}