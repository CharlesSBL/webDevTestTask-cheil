
import { useContext } from "react";
import SearchInputHook from "../../../hooks/SearchInputHook";
import { ProductContext } from "../../../ProductListing";


export default function Searcher(
) {
    const productState = useContext(ProductContext);
    const [searchInputVal, searchInputHandler] = SearchInputHook(productState!);

    return (
        <input
            className='search-input'
            placeholder='Search...'
            type="search"

            value={searchInputVal}
            onChange={searchInputHandler}
        />
    )
}