import { FilterItem } from "./FilterItem";
import { filterItemsData } from "./filterItemsData";

export default function MenuFilter() {
    const filterItems = filterItemsData;

    return (
        <ul className='filter-menu'>
            {filterItems.map((item) => (
                <FilterItem key={item.id} filtItem={item} />
            ))}
        </ul>
    )
}