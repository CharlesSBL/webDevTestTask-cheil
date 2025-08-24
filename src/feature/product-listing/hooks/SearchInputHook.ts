import { useEffect, useState } from "react";
import type { IFetchStateData } from "./FilterHook";

export default function SearchInputHook(
    fetchStateData: IFetchStateData
): [string, (event: React.ChangeEvent<HTMLInputElement>) => void] {
    // getting the fetch hook state
    const {
        // searchRestRequestVal,
        setSearchRestRequestVal,
        timeSearchUpdateMs
    } = fetchStateData;
    // value of search input tag
    const [searchVal, setSearchVal] = useState<string>("");


    // change value of input
    const searchHandler =
        (event: React.ChangeEvent<HTMLInputElement>) =>
            setSearchVal(event.target.value);


    // preparing the request name of products to filter 
    useEffect(() => {
        const t = setTimeout(() => {
            if (searchVal && searchVal.trim() !== "") setSearchRestRequestVal(searchVal)
            else setSearchRestRequestVal("");
        }, timeSearchUpdateMs);
        return () => clearTimeout(t);
    });

    return [searchVal, searchHandler];
}