import { useState } from 'react';
import * as Message from '../constants/Message';


function Cartitem(props) {
    // const [Quantity, setQuantity] = useState(1);
    var { item } = props;
    // var {quantity} = item.quantity > 0 ? item : Quantity;
    var {quantity} = item;

    const showSubTotal = (price, quantity) => {
        return price * quantity;
    }
    const onDelete = (product) => {
        var { onDeleteProductInCart,onChangeMSG } = props;
        onDeleteProductInCart(product);
        onChangeMSG(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }
    const onUpdateQuantity = (product, quantity) => {
        var { onUpdateProductInCart,onChangeMSG } = props;

        // if(quantity > 0){
        //     setQuantity(Quantity);
        // }else{
        //     quantity= 1;
        // }
        onUpdateProductInCart(product, quantity);
        onChangeMSG(Message.MSG_UPDATE_CART_SUCCESS);
    }
    return (
        <tr>
            <th scope="row">
                <img src={item.product.image}
                    alt={item.product.name} className="img-fluid z-depth-0" />
            </th>
            <td>
                <h5>
                    <strong>{item.product.name}</strong>
                </h5>
            </td>
            <td>{item.product.price}$</td>
            <td className="center-on-small-only">
                <span className="qty">{quantity} </span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light"
                        onClick={() => onUpdateQuantity(item.product, item.quantity > 1 ? item.quantity - 1: 1)}
                    >
                        <a>—</a>
                    </label>
                    <label className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light"
                        onClick={() => onUpdateQuantity(item.product, item.quantity + 1)}
                    >
                        <a>+</a>
                    </label>
                </div>
            </td>
            <td>{showSubTotal(item.product.price, quantity)}$</td>
            <td>
                <button type="button"
                    className="btn btn-sm btn-primary waves-effect waves-light"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="" data-original-title="Remove item"
                    onClick={() => onDelete(item.product)}
                >
                    X
                                        </button>
            </td>
        </tr>

    );
}

export default Cartitem;
