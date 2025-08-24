import type { IProductCard } from '../../types/cardTypes';
import { useContext, useEffect, useState } from 'react';
import ProductsToCards from '../../functions/ProductsToCards';
import { ProductContext } from '../../ProductListing';
import productsToCardComponents from '../../functions/productsToCardComponents';


export default function Listing(
) {
    const productState = useContext(ProductContext);
    const [productCards, setProductCards] = useState<IProductCard[]>([])
    const [cardsAmountMax, setCardsAmountMax] = useState<number>(6);
    useEffect(() => setProductCards(ProductsToCards(productState!)), [productState!.products])

    // TODO: add more button fix in footer
    const amountCards = productCards.length > cardsAmountMax ? cardsAmountMax : productCards.length;

    return (
        <section className='container-out container-listing-out'>
            <div className='container-in container-listing-in'>
                <div className='product-listing'>
                    <ul className='card-grid'>
                        {productsToCardComponents(productCards, amountCards)}
                    </ul>
                </div>
            </div>
        </section>
    )
}