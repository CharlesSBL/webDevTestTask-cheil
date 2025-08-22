import Counter from './components/counter/Counter';
import Filter from './components/filter/Filter';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Listing from './components/listing/Listing';


export default function ProductListing() {
    return (
        <>

            <Header />
            {/* impl order: 2 */}
            <Filter />
            {/* impl order: 4 */}
            <Counter />
            {/* impl order: 1 */}
            <Listing />
            {/* impl order: 3 */}
            <Footer />
        </>
    )
}