// import washerImage1 from '/assets/images/washer/washer-1.png';
// import washerImage2 from '/assets/images/washer/washer-2.png';
// import washerImage3 from '/assets/images/washer/washer-3.png';



import type { IProductCardRo } from "../cardTypes";
import ProductListInfo from "./productListInfo/ProductListInfo";
import ProductPrice from "./productPrice/ProductPrice"


export default function Card(
    { productCard }: Readonly<IProductCardRo>
) {

    const { product, productListInfo } = productCard;
    const {
        id,
        washerImageUrl,
        machineType,
        productFullName,
        installmentsMonthlyFee,
        currencyKind,
        installmentsRate
    } = product;



    return (

        <li id={`card-${id}`} className='card-item'>
            <img id={`img-${id}`} className='product-image' src={washerImageUrl} alt={machineType} />
            <div className='card-body'>
                <h3 id={`prod-name-${id}`} className='product-name'>{productFullName}</h3>

                <ProductListInfo listInfo={productListInfo} />

                <ProductPrice />

                <p className='installments'>{installmentsMonthlyFee} {currencyKind} x {installmentsRate} rat</p>

            </div>
            <button id={`btn-${id}`} className='product-btn'>wybierz</button>
        </li>

    )
}