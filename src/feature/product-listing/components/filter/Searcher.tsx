
import { useContext } from "react";
import SearchInputHook from "./../../hooks/SearchInputHook";
import { fetchContext } from "../../context/context";


export default function Searcher() {
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