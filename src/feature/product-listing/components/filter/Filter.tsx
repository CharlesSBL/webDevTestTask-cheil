import MenuFilter from "./menuFilter/MenuFilter";
import Searcher from "./searcher/Searcher";


export default function Filter(
) {
    return (
        <section className='container-out container-filter-out'>
            <div className='container-in container-filter-in'>
                <div className='filter-bar'>
                    <Searcher />
                    {/* TODO: implement dropdown menu filter */}
                    <MenuFilter />
                </div>
            </div>
        </section>

    )
}