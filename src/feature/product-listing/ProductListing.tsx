import Counter from './components/counter/Counter';
import Filter from './components/filter/Filter';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Listing from './components/listing/Listing';


export default function ProductListing() {
    return (
        <>
            <Header />
            {/* TODO: filter to make get request to server or test mock */}
            <Filter />
            <Counter />
            <Listing />
            <Footer />
        </>
    )
}