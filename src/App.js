import Header from './components/Header';
import MessageContainer from './containers/MessageContainer';
import Footer from './components/Footer';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';
function App() {
    return (
        <div>
            {/* Header */}
            <Header />
            <main id="mainContainer">
                <div className="container">
                    {/* Products */}
                    <ProductsContainer />
                    {/* Message */}
                    <MessageContainer />
                    {/* Cart */}
                    <CartContainer />
                </div>
            </main>
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default App;
