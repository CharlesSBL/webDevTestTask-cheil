
import SearchInputHook from "../../../hooks/SearchInputHook";
import type { IProductStateTypeRo } from "../../../types/ProductDataTypes";



// TODO: search handler to make requests and 
// it's view, need controller
export default function Searcher(
    { productState }: Readonly<IProductStateTypeRo>
) {
    const [searchInputVal, searchInputHandler] = SearchInputHook(productState);

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