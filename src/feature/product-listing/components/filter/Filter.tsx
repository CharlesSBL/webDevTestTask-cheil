import { useContext, useMemo } from "react";
import { FilterHook } from "../../hooks/FilterHook";
import MenuFilter from "./menuFilter/MenuFilter";
import Searcher from "./Searcher";
import type { IFetchStateData } from "../../interfaces/interfaces";
import { MaxContext, ProductContext, QuantityContext, fetchContext } from "../../context/context";


export default function Filter() {
    const productQuantity = useContext(QuantityContext);
    const productState = useContext(ProductContext);
    const maxCards = useContext(MaxContext);

    const {
        searchRestRequestVal,
        setSearchRestRequestVal,
        menuFilterStateOptions,
        setMenuFilterStateOptions,
        timeSearchUpdateMs
    } = FilterHook(productState!, productQuantity!, maxCards!);

    const filterHookData = useMemo<IFetchStateData>(() => ({
        searchRestRequestVal,
        setSearchRestRequestVal,
        menuFilterStateOptions,
        setMenuFilterStateOptions,
        timeSearchUpdateMs
    }), [
        searchRestRequestVal,
        setSearchRestRequestVal,
        menuFilterStateOptions,
        setMenuFilterStateOptions,
        timeSearchUpdateMs
    ]);


    return (
        <section className='container-out container-filter-out'>
            <div className='container-in container-filter-in'>
                <div className='filter-bar'>
                    <fetchContext.Provider value={filterHookData}>
                        <Searcher />
                        <MenuFilter />
                    </fetchContext.Provider>
                </div>
            </div>
        </section>

    )
}