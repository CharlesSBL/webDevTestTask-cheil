
import Card from './card/Card';
import type { IProductCard } from '../../types/cardTypes';
import type { IProductStateTypeRo } from '../../types/ProductDataTypes';
import { useEffect, useState } from 'react';
import ProductsToCards from '../../functions/ProductsToCards';


export default function Listing(
    { productState }: Readonly<IProductStateTypeRo>
) {
    const [productCards, setProductCards] = useState<IProductCard[]>([])
    const [cardsAmountMax, setCardsAmountMax] = useState<number>(6);

    useEffect(() => setProductCards(ProductsToCards(productState)), [productState.products])


    // TODO: add more button fix in footer
    const amountCards = productCards.length > cardsAmountMax ? cardsAmountMax : productCards.length;

    return (
        <section className='container-out container-listing-out'>
            <div className='container-in container-listing-in'>
                <div className='product-listing'>
                    <ul className='card-grid'>
                        {
                            productCards.slice(0, amountCards).map((card) => (
                                <Card key={card.product.id} productCard={card} />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}