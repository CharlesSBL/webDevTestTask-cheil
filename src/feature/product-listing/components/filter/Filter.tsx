import MenuFilter from "./menuFilter/MenuFilter";
import Searcher from "./searcher/Searcher";

// TODO: dynamic dropdown menu
export default function Filter() {
    return (

        <section className='container-out container-filter-out'>
            <div className='container-in container-filter-in'>
                <div className='filter-bar'>

                    <Searcher />

                    <MenuFilter />

                </div>
            </div>
        </section>

    )
}