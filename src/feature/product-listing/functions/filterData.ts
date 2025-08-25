import type ProductDataTypes from "../types/ProductDataTypes";

export const filterData = (newData: ProductDataTypes[], menuFilterStateOptions: string[]) => {
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