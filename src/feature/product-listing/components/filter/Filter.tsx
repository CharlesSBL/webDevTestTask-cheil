import type { IProductStateTypeRo } from "../../types/ProductDataTypes";
import MenuFilter from "./menuFilter/MenuFilter";
import Searcher from "./searcher/Searcher";

// TODO: dynamic dropdown menu
export default function Filter(
    { productState }: Readonly<IProductStateTypeRo>
) {
    return (
        <section className='container-out container-filter-out'>
            <div className='container-in container-filter-in'>
                <div className='filter-bar'>

                    <Searcher productState={productState} />

                    <MenuFilter />

                </div>
            </div>
        </section>

    )
}