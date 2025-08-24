
import { useContext } from "react";
import SearchInputHook from "../../../hooks/SearchInputHook";
import { fetchContext } from "../Filter";


export default function Searcher() {
    // const productState = useContext(ProductContext);
    const fetchContextData = useContext(fetchContext);
    const [searchInputVal, searchInputHandler] = SearchInputHook(fetchContextData!);

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