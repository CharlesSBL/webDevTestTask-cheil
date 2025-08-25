import type { IProductCardRo } from "../../../types/cardTypes";
import Installments from "./Installments";
import ProductListInfo from "./ProductListInfo";
import ProductPrice from "./ProductPrice"


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
            <img id={`img-${id}`} className='product-image' src={`/images/washer/${washerImageUrl}`} alt={machineType} />
            <div className='card-body'>
                <h3 id={`prod-name-${id}`} className='product-name'>{productFullName}</h3>

                <ProductListInfo listInfo={productListInfo} />

                <ProductPrice prodPriceProps={productPrice} />

                <Installments installProps={{
                    installmentsMonthlyFee,
                    currencyKind,
                    installmentsRate,
                }} />
            </div>
            <button id={`btn-${id}`} className='product-btn'>wybierz</button>
        </li>
    )
}