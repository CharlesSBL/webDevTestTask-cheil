import Card from "../components/listing/card/Card";
import type { IProductCard } from "../types/cardTypes";

export default function productsToCardComponents(productCards: IProductCard[], amountCards: number) {
    return productCards.slice(0, amountCards).map((card) => (
        <Card key={card.product.id} productCard={card} />
    ))
}