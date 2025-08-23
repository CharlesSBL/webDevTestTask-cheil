import type { IProductCardRo } from "../../../types/cardTypes";

import ProductListInfo from "./productListInfo/ProductListInfo";
import ProductPrice from "./productPrice/ProductPrice"


export default function Card(
    { productCard }: Readonly<IProductCardRo>
) {

    const { product, productListInfo, productPrice } = productCard;
    const {
        id,
        washerImageUrl,
        machineType,
        productFullName,
        installmentsMonthlyFee,
        currencyKind,
        installmentsRate,
    } = product;



    return (

        <li id={`card-${id}`} className='card-item'>
            <img id={`img-${id}`} className='product-image' src={`/assets/images/washer/${washerImageUrl}`} alt={machineType} />
            <div className='card-body'>
                <h3 id={`prod-name-${id}`} className='product-name'>{productFullName}</h3>

                <ProductListInfo listInfo={productListInfo} />

                <ProductPrice prodPriceProps={productPrice} />

                <p className='installments'>{installmentsMonthlyFee} {currencyKind} x {installmentsRate} rat</p>

            </div>
            <button id={`btn-${id}`} className='product-btn'>wybierz</button>
        </li>

    )
}