import * as actions from './cart';

import cart from './cart';

const CART_ADD = 'cart/ADD';
const CART_REMOVE = 'cart/REMOVE';

describe('actions', () => {
    it('should test the addToCart function', () => {
        const productId = 1
        const expectedAction = {
            type: CART_ADD,
            payload: {
                productId
            }
        }
        expect(actions.addToCart(1)).toEqual(expectedAction)
    });


    it('should test the removeFromCart function', () => {
        const productId = 1
        const expectedAction = {
            type: CART_REMOVE,
            payload: {
                productId
            }
        }
        expect(actions.removeFromCart(1)).toEqual(expectedAction)
    });

    it('should test the getItems function', () => {

        const state = { cart: { items: [] } };
        const test = actions.getItems(state);
    });

    it('should test the getTotal function', () => {

        const state = { cart: { items: [] } };
        const test = actions.getTotal(state);
    });


    it('should test the getTotal function', () => {

        const state = { cart: { items: [] } };
        const test = actions.isInCart(state, { id: 1 });
    });

});

describe('reducer testing', () => {
    it('passes through non-function action', () => {
        expect(cart(undefined, {})).toEqual({
            items: []
        });
    });


    it('reducer test the CART_REMOVE action', () => {

        expect(cart({ items : [] }, { type: CART_REMOVE })).toEqual({ "items": [] });
    });


    it('reducer test the CART_ADD action', () => {

        expect(cart({ items: [] }, { type: CART_ADD, payload: { productId: 1 } })).toEqual({ "items": [1] });
    });
});