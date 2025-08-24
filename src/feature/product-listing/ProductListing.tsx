import { createContext, useMemo, useState } from 'react';
import Counter from './components/counter/Counter';
import Filter from './components/filter/Filter';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Listing from './components/listing/Listing';
import type ProductDataTypes from './types/ProductDataTypes';
import type { IProductStateType } from './types/ProductDataTypes';

export const ProductContext = createContext<IProductStateType | null>(null);

export default function ProductListing() {
    const [products, setProducts] = useState<ProductDataTypes[]>([]);

    // The 'productState' object passed as the value prop to the Context provider changes every render. To fix this consider wrapping it in a useMemo hook.sonarqube(typescript:S6481)
    const productState = useMemo<IProductStateType>(() => ({ products, setProducts }), [products]);

    return (
        <ProductContext value={productState}>
            <Header />
            <Filter />
            <Counter />
            <Listing />
            <Footer />
        </ProductContext>
    )
}