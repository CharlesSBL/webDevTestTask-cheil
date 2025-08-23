// import washerImage1 from '/assets/images/washer/washer-1.png';
// import washerImage2 from '/assets/images/washer/washer-2.png';
// import washerImage3 from '/assets/images/washer/washer-3.png';

import type { IProductListInfoRo } from "../../cardTypes";



const productFunctionalityMap = (array: string[]) => {
    if (array.length == 0) {
        return null;
    }

    return array.map((item, index) => index == -1 || index == array.length - 1 ? item : item + ',').join(' ');
}



// TODO: implement the list info and product card 
export default function ProductListInfo(
    { listInfo }: Readonly<IProductListInfoRo>
) {
    const { id,
        productWeightMeasure,
        productWeightAmount,
        productDimensionG,
        productDimensionS,
        productDimensionW,
        productDimensionMeasure,
        productFunctionality } = listInfo;


    return (
        <ul id={`info-${id}`} className='product-info-list'>
            <li className='product-info-item capacity-info'>
                <p className='info-name capacity-name'>Pojemność ({productWeightMeasure}): <strong className='product-info-value capacity-value'>{productWeightAmount}</strong></p>
            </li>
            <li className='product-info-item dimensions-info'>
                <p className='info-name dimensions-name'>Wymiary (GxSxW): <strong className='product-info-value dimensions-value'>{productDimensionG} x {productDimensionS} x {productDimensionW} {productDimensionMeasure}</strong></p>
            </li>
            <li className='product-info-item functions-info'>
                <p className='info-name functions-name'>Funkcje: <strong className='product-info-value functions-value'>
                    {
                        productFunctionalityMap(productFunctionality)
                    }
                </strong></p>
            </li>
            <li className='product-info-item energy-info'>
                <p className='info-name energy-name'>Klasa energetyczna</p>
                <span className='energy-value'>A</span>
            </li>
            <li className='product-info-item expiration-info'>
                <p className='info-name expiration-name'>Cena obowiązuje: <span className='expiration-value'>15.09.2022 - 21.09.2022</span></p>
            </li>
        </ul>
    )
}