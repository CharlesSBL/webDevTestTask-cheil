import { useEffect, useState } from "react";

export default function SearchInputHook(): [string, (event: React.ChangeEvent<HTMLInputElement>) => void] {
    const [searchVal, setSearchVal] = useState<string>("");
    const [searchRestRequestVal, setSearchRestRequestVal] = useState<string>("");
    const timeSearchUpdateMs = 250;


    const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
        setSearchVal(event.target.value);


    useEffect(() => {
        const t = window.setTimeout(() => {
            if (searchVal && searchVal !== "") setSearchRestRequestVal(searchVal);
        }, timeSearchUpdateMs);
        return () => clearTimeout(t);
    });

    useEffect(() => {
        if (searchRestRequestVal) {
            console.log(`=== request data by name: ${searchRestRequestVal} ===`);
        }
    }, [searchRestRequestVal]);


    return [searchVal, searchHandler];
}