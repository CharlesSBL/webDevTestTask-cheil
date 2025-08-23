
import Card from './card/Card';
import type { IProduct, IProductCard, IProductListInfo } from '../../types/cardTypes';

// import washerImage1 from '/assets/images/washer/washer-1.png';
// import washerImage2 from '/assets/images/washer/washer-2.png';
// import washerImage3 from '/assets/images/washer/washer-3.png';




// TODO: dynamic product card grid
/**
 * read array of card data
 * implement for each the new card
 * 
 */
export default function Listing() {


    // MOCK Product Card
    const product_: IProduct = {
        id: 1,
        washerImageUrl: '/assets/images/washer/washer-3.png',
        machineType: 'washer',
        productFullName: 'WW90T754ABT, Pralka QuickDrive™, 9 kg, biała',
        installmentsMonthlyFee: 10,
        currencyKind: 'zl',
        installmentsRate: 60
    };

    const listInfo_: IProductListInfo = {
        id: 1,
        productWeightMeasure: "kg",
        productWeightAmount: 10,
        productDimensionG: 8,
        productDimensionS: 5,
        productDimensionW: 25,
        productDimensionMeasure: "cm",
        productFunctionality: ["Drzwi AddWash™", "Panel AI Control", "Silnik inwerterowy", "Wyświetlacz elektroniczny"]
    };

    const productCard: IProductCard = {
        product: product_,
        productListInfo: listInfo_
    }



    return (

        <section className='container-out container-listing-out'>
            <div className='container-in container-listing-in'>
                <div className='product-listing'>
                    <ul className='card-grid'>

                        {
                            // TODO: here has to be mapping the productCard[] to cards
                            // + maybe here has to be mapping json to productCard[]
                            Array.from({ length: 8 }).map((_, idx) => (
                                <Card key={idx} productCard={productCard} />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>

    )
}