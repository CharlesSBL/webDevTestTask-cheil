import type { IProductCard } from '../../types/cardTypes';
import { useContext, useEffect, useState } from 'react';
import ProductsToCards from '../../functions/ProductsToCards';
import productsToCardComponents from '../../functions/productsToCardComponents';
import { MaxContext, ProductContext } from '../../context/context';



export default function Listing(
) {
    const maxCards = useContext(MaxContext);
    const productState = useContext(ProductContext);

    const [productCards, setProductCards] = useState<IProductCard[]>([])
    useEffect(() => setProductCards(ProductsToCards(productState!)), [productState!.products])

    return (
        <section className='container-out container-listing-out'>
            <div className='container-in container-listing-in'>
                <div className='product-listing'>
                    <ul className='card-grid'>
                        {productsToCardComponents(productCards, maxCards?.cardsAmountMax!)}
                    </ul>
                </div>
            </div>
        </section>
    )
}