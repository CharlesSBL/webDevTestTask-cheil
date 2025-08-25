import { createContext, useMemo, useState } from 'react';
import Counter from './components/Counter';
import Filter from './components/filter/Filter';
import Footer from './components/Footer';
import Header from './components/Header';
import Listing from './components/listing/Listing';
import type ProductDataTypes from './types/ProductDataTypes';
import type { ICardMax, IProductQuantity, IProductStateType } from './interfaces/interfaces';
import { MaxContext, ProductContext, QuantityContext } from './context/context';


export default function ProductListing() {
    const [products, setProducts] = useState<ProductDataTypes[]>([]);
    const [productQuantity, setProductQuantity] = useState<number>(0);
    const [cardsAmountMax, setCardsAmountMax] = useState<number>(6);

    // The 'productState' object passed as the value prop to the Context provider changes every render. To fix this consider wrapping it in a useMemo hook.sonarqube(typescript:S6481)
    const productState = useMemo<IProductStateType>(() => ({ products, setProducts }), [products]);
    const quantityState = useMemo<IProductQuantity>(() => ({ productQuantity, setProductQuantity }), [productQuantity]);
    const maxState = useMemo<ICardMax>(() => ({ cardsAmountMax, setCardsAmountMax }), [cardsAmountMax]);

    return (
        <ProductContext value={productState}>
            <QuantityContext value={quantityState}>
                <MaxContext value={maxState}>
                    <Header />
                    <Filter />
                    <Counter />
                    <Listing />
                    <Footer />
                </MaxContext>
            </QuantityContext>
        </ProductContext>
    )
}