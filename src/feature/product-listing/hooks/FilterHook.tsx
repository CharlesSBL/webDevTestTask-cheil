import { useState, useEffect } from "react";
import type ProductDataTypes from "../types/ProductDataTypes";
import type { IProductStateType } from "../types/ProductDataTypes";

const filterData = (newData: ProductDataTypes[], menuFilterStateOptions: string[]) => {
    const allProducts = "wszystkie";

    return newData
        .filter(item => {
            const productFunctions = menuFilterStateOptions[1];
            if (productFunctions !== allProducts) {
                return item.functionality.includes(productFunctions)
            } else {
                return true
            }
        })
        .filter(item => {
            const productEnergyClass = menuFilterStateOptions[2];
            if (productEnergyClass !== allProducts) {
                return item.energy_class === productEnergyClass
            } else {
                return true
            }
        })
        .filter(item => {
            const productWeight = menuFilterStateOptions[3]
            if (productWeight !== allProducts) {
                return item.capacity.amount === parseFloat(productWeight.split("kg")[0]);
            } else {
                return true
            }
        });
}

export interface IFetchStateData {
    searchRestRequestVal: string,
    setSearchRestRequestVal: React.Dispatch<React.SetStateAction<string>>,
    menuFilterStateOptions: string[],
    setMenuFilterStateOptions: React.Dispatch<React.SetStateAction<string[]>>
    timeSearchUpdateMs: number,
}

export interface IFetchStateDataRo {
    readonly fetchStateData: IFetchStateData;
}
// TODO:
// add sum of products that appears,
// has take a state of sum that appears
// show more click add to state of gap a + 6 each time,
// 
//  fix the price mapping to card 

export function FilterHook(productState: IProductStateType): IFetchStateData {
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

                if (menuFilterStateOptions.length == 4 && menuFilterStateOptions.every(item => item.trim() !== "")) {
                    const productSortingBy = menuFilterStateOptions[0];

                    switch (productSortingBy) {
                        case "popularność":
                            const copyData1 = data.slice();

                            copyData1.sort((a, b) => b.popularity - a.popularity);

                            productState.setProducts(
                                filterData(copyData1, menuFilterStateOptions)
                            );
                            break;
                        case "cena":
                            const copyData2 = data.slice();

                            copyData2.sort((a, b) => b.price - a.price);

                            productState.setProducts(
                                filterData(copyData2, menuFilterStateOptions)
                            );
                            break;
                        case "pojemność":
                            const copyData3 = data.slice();

                            copyData3.sort((a, b) => b.capacity.amount - a.capacity.amount);

                            productState.setProducts(
                                filterData(copyData3, menuFilterStateOptions)
                            );
                            break;

                        default:
                            productState.setProducts(data);
                            break;
                    }
                } else {
                    productState.setProducts(data);
                }
            })
            .catch(error => console.error("Failed to fetch or process products:", error));

    }, [menuFilterStateOptions, searchRestRequestVal]);

    return {
        searchRestRequestVal,
        setSearchRestRequestVal,
        menuFilterStateOptions,
        setMenuFilterStateOptions,
        timeSearchUpdateMs
    };
}
