import { useState, useEffect } from "react";
import type ProductDataTypes from "../types/ProductDataTypes";
import type { IProductStateType, IFetchStateData, IProductQuantity } from "../interfaces/interfaces";
import { filterData } from "../functions/filterData";

// TODO:
// add sum of products that appears,
// has take a state of sum that appears
// show more click add to state of gap a + 6 each time,
// 
//  fix the price mapping to card 

export function FilterHook(
    productState: IProductStateType,
    productQuantity: IProductQuantity
): IFetchStateData {
    const [menuFilterStateOptions, setMenuFilterStateOptions] = useState<string[]>([]);
    const [searchRestRequestVal, setSearchRestRequestVal] = useState<string>("");
    const timeSearchUpdateMs = 250;

    useEffect(() => {
        fetch("/data/products/products.json")
            .then(response => {
                if (!response.ok) throw new Error(response.statusText);
                return response.json();
            })
            .then((data: ProductDataTypes[]) => {
                if (searchRestRequestVal.trim() !== "") {
                    data = data.filter((item: ProductDataTypes) => {
                        return item.full_name.includes(searchRestRequestVal)
                    })
                }

                const amountOfTypesOfOptions = 4;
                if (menuFilterStateOptions.length == amountOfTypesOfOptions && menuFilterStateOptions.every(item => item.trim() !== "")) {
                    const productSortingBy = menuFilterStateOptions[0];

                    switch (productSortingBy) {
                        case "popularność":
                            const copyData1 = data.slice();

                            copyData1.sort((a, b) => b.popularity - a.popularity);

                            const filteredData1 = filterData(copyData1, menuFilterStateOptions)
                            productQuantity.setProductQuantity(filteredData1.length)
                            productState.setProducts(filteredData1);
                            break;
                        case "cena":
                            const copyData2 = data.slice();

                            copyData2.sort((a, b) => b.price - a.price);

                            const filteredData2 = filterData(copyData2, menuFilterStateOptions)
                            productQuantity.setProductQuantity(filteredData2.length)
                            productState.setProducts(filteredData2);
                            break;
                        case "pojemność":
                            const copyData3 = data.slice();

                            copyData3.sort((a, b) => b.capacity.amount - a.capacity.amount);

                            const filteredData3 = filterData(copyData3, menuFilterStateOptions)
                            productQuantity.setProductQuantity(filteredData3.length)
                            productState.setProducts(filteredData3);
                            break;
                        default:
                            productQuantity.setProductQuantity(data.length)
                            productState.setProducts(data);
                            break;
                    }
                } else {
                    productQuantity.setProductQuantity(data.length)
                    productState.setProducts(data);
                }
            })
    }, [menuFilterStateOptions, searchRestRequestVal]);

    return {
        searchRestRequestVal,
        setSearchRestRequestVal,
        menuFilterStateOptions,
        setMenuFilterStateOptions,
        timeSearchUpdateMs
    };
}
