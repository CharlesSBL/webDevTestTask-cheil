import { createContext, useContext, useMemo } from "react";
import { FilterHook, type IFetchStateData } from "../../hooks/FilterHook";
import MenuFilter from "./menuFilter/MenuFilter";
import Searcher from "./searcher/Searcher";
import { ProductContext } from "../../ProductListing";

export const fetchContext = createContext<IFetchStateData | null>(null);

export default function Filter() {
    const productState = useContext(ProductContext);
    // const [searchInputVal, searchInputHandler] = SearchInputHook(productState!);
    const {
        searchRestRequestVal,
        setSearchRestRequestVal,
        timeSearchUpdateMs
    } = FilterHook(productState!);

    const filterHookData = useMemo<IFetchStateData>(() => ({
        searchRestRequestVal,
        setSearchRestRequestVal,
        timeSearchUpdateMs
    }), [
        searchRestRequestVal,
        setSearchRestRequestVal,
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