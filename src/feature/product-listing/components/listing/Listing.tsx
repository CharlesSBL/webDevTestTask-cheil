
import Card from './card/Card';
import type { IProduct, IProductCard, IProductListInfo } from '../../types/cardTypes';
import type { IProductStateTypeRo } from '../../types/ProductDataTypes';
import { useEffect, useState } from 'react';
import type ProductDataTypes from '../../types/ProductDataTypes';

// import washerImage1 from '/assets/images/washer/washer-1.png';
// import washerImage2 from '/assets/images/washer/washer-2.png';
// import washerImage3 from '/assets/images/washer/washer-3.png';




// TODO: dynamic product card grid
/**
 * read array of card data
 * implement for each the new card
 * 
 */
export default function Listing(
    { productState }: Readonly<IProductStateTypeRo>
) {
    // TODO: prepare here the product card info IProductCard based on productState, useEffect
    const [productCards, setProductCards] = useState<IProductCard[]>([])

    useEffect(() => {
        console.log(productState.products[0])

        const newProductCards: IProductCard[] = productState.products.map((data: ProductDataTypes) => {
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
                productWeightMeasure: data.weight.measure,
                productWeightAmount: data.weight.amount,
                productDimensionG: data.dimensions.G,
                productDimensionS: data.dimensions.S,
                productDimensionW: data.dimensions.W,
                productDimensionMeasure: data.dimensions.measure,
                productFunctionality: data.functionality
            };

            const productCard: IProductCard = {
                product: product_,
                productListInfo: listInfo_
            }

            return productCard;
        })

        setProductCards(newProductCards);

    }, [productState.products])

    // MOCK Product Card




    return (

        <section className='container-out container-listing-out'>
            <div className='container-in container-listing-in'>
                <div className='product-listing'>
                    <ul className='card-grid'>

                        {
                            // TODO: here has to be mapping the productCard[] to cards
                            // + maybe here has to be mapping json to productCard[]
                            Array.from({ length: productCards.length }).map((_, idx) => (
                                <Card key={idx} productCard={productCards[idx]} />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>

    )
}