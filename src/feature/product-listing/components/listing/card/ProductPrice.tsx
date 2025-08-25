import type { IProductPriceRo } from "../../../types/cardTypes";


export default function ProductPrice(
    { prodPriceProps }: Readonly<IProductPriceRo>
) {
    const {
        productPrice,
        productPriceRight,
        currency
    } = prodPriceProps;

    return (
        <div className='product-price'>
            <h1 id='price-1' className='price-value'>{productPrice}</h1>
            <div className='price-value-right'>
                <p className='value-right-val'><strong>{productPriceRight}</strong></p>
                <p className='value-right-currency'><strong>{currency}</strong></p>
            </div>
        </div>
    )
}