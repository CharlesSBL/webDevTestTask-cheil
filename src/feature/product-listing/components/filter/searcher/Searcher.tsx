


import { useState } from "react"

// TODO: search handler to make requests and 
// it's view, need controller
export default function Searcher() {
    const [searchVal, setSearchVal] = useState<string>();


    function searchHandler(event: React.ChangeEvent<HTMLInputElement>) {
        // console.log(`user input: ${event.target.value}`)

        setSearchVal(event.target.value);
    }


    return (
        <input
            className='search-input'
            placeholder='Search...'
            type="search"

            value={searchVal}
            onChange={searchHandler}
        />
    )
}