import { useEffect, useState } from "react";
import type ProductDataTypes from "../types/ProductDataTypes";
import type { IProductStateType } from "../types/ProductDataTypes";


export default function SearchInputHook(
    productState: IProductStateType
)
    : [string, (event: React.ChangeEvent<HTMLInputElement>) => void] {
    const [searchVal, setSearchVal] = useState<string>("");
    const [searchRestRequestVal, setSearchRestRequestVal] = useState<string>("");
    const timeSearchUpdateMs = 250;

    const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
        setSearchVal(event.target.value);

    const fetchHandler = () => {
        fetch("/data/products/products.json")
            .then(response => {
                if (!response.ok) throw new Error(response.statusText);
                return response.json();
            })
            .then((data: ProductDataTypes[]) => {
                console.log("about of all data: " + data.length)
                productState.setProducts(data);
            })
    }


    useEffect(() => {
        const t = setTimeout(() => {
            if (searchVal && searchVal.trim() !== "") setSearchRestRequestVal(searchVal)
            else setSearchRestRequestVal("");
        }, timeSearchUpdateMs);
        return () => clearTimeout(t);
    });

    // first time fill the listing
    useEffect(() => fetchHandler(), []);


    useEffect(() => {
        if (searchRestRequestVal.trim() !== "") {
            console.log(`=== request data by name: ${searchRestRequestVal} ===`);

            fetch("/data/products/products.json")
                .then(response => {
                    if (!response.ok) throw new Error(response.statusText);
                    return response.json();
                })
                .then((data: ProductDataTypes[]) => {
                    const filteredData = data.filter((item: ProductDataTypes) => {
                        return item.full_name.includes(searchRestRequestVal)
                    })

                    console.log("about of filtered data: " + filteredData.length)

                    productState.setProducts(filteredData);
                })
        } else {
            fetchHandler()
        }
    }, [searchRestRequestVal]);


    return [searchVal, searchHandler];
}