import { connect } from 'react-redux';
import Products from '../components/Products';
import Product from '../components/Product';
import PropTypes from 'prop-types';
import {actAddToCart, actChangeMSG} from '../actions/index';

const showProducts = (Props) => {
    var result = null;
    var {onAddToCart, products, onChangeMSG} = Props;
    if(products.length > 0){
        result = products.map((product, index) => {
            return <Product key={index} product = {product} onAddToCart={onAddToCart} onChangeMSG={onChangeMSG}/>
        });
    }
    return result;
}

function ProductsContainer(props) {
    return (
        <Products>
            {showProducts(props)}
        </Products>
    );
    
}
ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
    onChangeMSG: PropTypes.func.isRequired,
    onAddToCart: PropTypes.func.isRequired
}
const mapStateToProps = state => {
    return{
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart : (product) =>{
            dispatch(actAddToCart(product, 1));
        },
        onChangeMSG : (message) =>{
            dispatch(actChangeMSG(message));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer);
