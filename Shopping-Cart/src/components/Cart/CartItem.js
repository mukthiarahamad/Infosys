import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ productName, price, onClick }) => {
    return (
        <div className="panel panel-default">
            <div className="panel-body">
                <div className="cart-item">
                    <div>
                        <span className="cart-item__name">{productName}</span>
                    </div>
                    <div className="cart-item__price">                        <button className="btn btn-danger btn-xs" onClick={onClick}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

CartItem.propTypes = {
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}

export default CartItem;
