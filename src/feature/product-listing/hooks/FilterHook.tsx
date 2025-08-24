import { useState, useEffect } from "react";
import type ProductDataTypes from "../types/ProductDataTypes";
import type { IProductStateType } from "../types/ProductDataTypes";

export interface IFetchStateData {
    searchRestRequestVal: string,
    setSearchRestRequestVal: React.Dispatch<React.SetStateAction<string>>,
    timeSearchUpdateMs: number
}

export interface IFetchStateDataRo {
    readonly fetchStateData: IFetchStateData;
}

// send state of the request here from filter padre
// after change in it, the filterHook would send a new data request
// make interface with filter options
// refine the fetch based on changes
// the fetch has to be after each change 
export function FilterHook(productState: IProductStateType): IFetchStateData {
    const [searchRestRequestVal, setSearchRestRequestVal] = useState<string>("");
    const timeSearchUpdateMs = 250;

    // fetch data func
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

    // after mounting the components fetch data
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

    return { searchRestRequestVal, setSearchRestRequestVal, timeSearchUpdateMs };
}