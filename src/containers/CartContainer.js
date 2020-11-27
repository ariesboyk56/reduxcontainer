import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import * as Message from '../constants/Message';
import Cartitem from '../components/Cartitem';
import Cartresult from '../components/Cartresult';
import {actChangeMSG, actDeleteProductInCart, actUpdateProductInCart} from '../actions/index';
const showCartItem = (props) => {
    var {onDeleteProductInCart,onChangeMSG, cart, onUpdateProductInCart} = props;
    var result = <tr>
        <td>{Message.MSG_CART_EMPTY}</td>
    </tr>;
    if(cart.length > 0 ){
        result = cart.map((item, index) =>{
            return(
                <Cartitem 
                key={index}
                item={item}
                index={index}
                onDeleteProductInCart = {onDeleteProductInCart}
                onChangeMSG={onChangeMSG}
                onUpdateProductInCart={onUpdateProductInCart}
                />
            )
        });
    }
    return result;
}
const showTotalAmount = (props) => {
    var {cart} = props;
    if(cart.length > 0){
        return <Cartresult cart={cart}/>
    }
}
function CartContainer(props) {
    return (
        <Cart>
            {showCartItem(props)}
            {showTotalAmount(props)}
        </Cart>
    );
    
}
CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    name: PropTypes.string.isRequired,
                    image: PropTypes.string.isRequired,
                    description: PropTypes.string.isRequired,
                    price: PropTypes.number.isRequired,
                    inventory: PropTypes.number.isRequired,
                    rating: PropTypes.number.isRequired 
                }),
            quantity: PropTypes.number.isRequired
        })
    ).isRequired,
    onDeleteProductInCart: PropTypes.func.isRequired,
    onChangeMSG: PropTypes.func.isRequired,
    onUpdateProductInCart: PropTypes.func.isRequired
}
const mapStateToProps = state => {
    return{
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return{
        onDeleteProductInCart: (product) => {
            dispatch(actDeleteProductInCart(product));
        },
        onChangeMSG: (message) => {
            dispatch(actChangeMSG(message));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actUpdateProductInCart(product,quantity));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);
