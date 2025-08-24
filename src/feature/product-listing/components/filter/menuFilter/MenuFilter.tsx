import { FilterItem, type IFilterItem } from "./FilterItem";

export default function MenuFilter() {
    const filterItems: IFilterItem[] = [
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
            optionList: ["Drzwi AddWash", "Panel AI Control", "Silnik inwerterowy", "Wyświetlacz elektroniczny"],
            mainOption: "wszystkie"
        }, {
            id: 3,
            name: "by",
            header: "Sortuj po",
            optionList: ["A", "B", "C", "D"],
            mainOption: "wszystkie"
        }, {
            id: 4,
            name: "by",
            header: "Sortuj po",
            optionList: ["9kg", "8kg", "10.5kg"],
            mainOption: "wszystkie"
        }
    ];


    return (
        <ul className='filter-menu'>
            {filterItems.map((item) => (
                <FilterItem key={item.id} filtItem={item} />
            ))}
        </ul>
    )
}