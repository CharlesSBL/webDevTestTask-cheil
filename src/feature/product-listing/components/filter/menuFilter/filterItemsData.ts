import type { IFilterItem } from "../../../interfaces/interfaces";

export const filterItemsData: IFilterItem[] = [
    {
        id: 1,
        name: "by",
        header: "Sortuj po",
        optionList: ["wszystkie", "cena", "pojemność"],
        mainOption: "popularność"
    }, {
        id: 2,
        name: "function",
        header: "Funkcje",
        optionList: ["Drzwi AddWash™", "Panel AI Control", "Silnik inwerterowy", "Wyświetlacz elektroniczny"],
        mainOption: "wszystkie"
    }, {
        id: 3,
        name: "energy",
        header: "Klasa energetyczna",
        optionList: ["A", "B", "C", "D"],
        mainOption: "wszystkie"
    }, {
        id: 4,
        name: "capacity",
        header: "Pojemność",
        optionList: ["9kg", "8kg", "10.5kg"],
        mainOption: "wszystkie"
    }
];