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


    useEffect(() => {
        const t = setTimeout(() => {
            if (searchVal && searchVal.trim() !== "") setSearchRestRequestVal(searchVal)
            else setSearchRestRequestVal("");
        }, timeSearchUpdateMs);
        return () => clearTimeout(t);
    });

    // first time fill the listing
    useEffect(() => {

        fetch("/data/products/products.json")
            .then(response => {
                if (!response.ok) throw new Error(response.statusText);
                return response.json();
            })
            .then((data: ProductDataTypes[]) => {
                productState.setProducts(data);
            })

    }, []);


    useEffect(() => {
        console.log("Products state has been updated:", productState.products);


    }, [productState.products]);

    // fetch data based on request
    // newHook at root, send the [state, setState] to listing and here
    // here is set a new array with cards info
    // there is useEffect that put new info when the value is changes of it products
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

                    productState.setProducts(filteredData);
                })
        } else {
            fetch("/data/products/products.json")
                .then(response => {
                    if (!response.ok) throw new Error(response.statusText);
                    return response.json();
                })
                .then((data: ProductDataTypes[]) => {
                    productState.setProducts(data);
                })
        }
    }, [searchRestRequestVal]);


    return [searchVal, searchHandler];
}