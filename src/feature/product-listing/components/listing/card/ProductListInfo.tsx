import type { IProductListInfoRo } from "../../../types/cardTypes";
import dateToStr from "../../../functions/dateToStr";
import prodFuncMap from "../../../functions/prodFuncMap";


export default function ProductListInfo(
    { listInfo }: Readonly<IProductListInfoRo>
) {
    const {
        id,
        productCapacityMeasure,
        productCapacityAmount,
        productDimensionG,
        productDimensionS,
        productDimensionW,
        productDimensionMeasure,
        productFunctionality,
        energyClass,
        dateStart,
        dateEnd
    } = listInfo;

    return (
        <ul id={`info-${id}`} className='product-info-list'>
            <li className='product-info-item capacity-info'>
                <p className='info-name capacity-name'>Pojemność ({productCapacityMeasure}): <strong className='product-info-value capacity-value'>{productCapacityAmount}</strong></p>
            </li>
            <li className='product-info-item dimensions-info'>
                <p className='info-name dimensions-name'>Wymiary (GxSxW): <strong className='product-info-value dimensions-value'>{productDimensionG} x {productDimensionS} x {productDimensionW} {productDimensionMeasure}</strong></p>
            </li>
            <li className='product-info-item functions-info'>
                <p className='info-name functions-name'>Funkcje: <strong className='product-info-value functions-value'>
                    {prodFuncMap(productFunctionality)}
                </strong></p>
            </li>
            <li className='product-info-item energy-info'>
                <p className='info-name energy-name'>Klasa energetyczna</p>
                <span className='energy-value'>{energyClass}</span>
            </li>
            <li className='product-info-item expiration-info'>
                <p className='info-name expiration-name'>Cena obowiązuje: <span className='expiration-value'>{dateToStr(dateStart)} - {dateToStr(dateEnd)}</span></p>
            </li>
        </ul>
    )
}

