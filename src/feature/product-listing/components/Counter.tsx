import { useContext } from "react";
import { QuantityContext } from "../context/context";

export default function Counter(
) {
    const productQuantity = useContext(QuantityContext);

    return (
        <section className='container-out container-counter-out'>
            <div className='container-in container-counter-in'>
                <div className='product-counter'>
                    <p>Liczba wyników: {!productQuantity}</p>
                </div>
            </div>
        </section>
    );
}