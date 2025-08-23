
import SearchInputHook from "../../../hooks/SearchInputHook";


// TODO: search handler to make requests and 
// it's view, need controller
export default function Searcher() {
    const [searchInputVal, searchInputHandler] = SearchInputHook();

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