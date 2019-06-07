import * as actions from './products';
import products from './products';

describe('actions', () => {

    it('should test the getProduct function', () => {

        expect(actions.getProduct({ products: [] }, {id: 1})).toEqual(undefined)
    });

    it('should test the getProducts function', () => {

        expect(actions.getProducts({ products: [] })).toEqual([])
    });
});

describe('reducer testing', () => {

    it('passes through non-function action', () => {
        expect(products(undefined, {})).toEqual([]);
        expect(products({ products: [{ id: 1 }] }, { id: 1 })).toEqual({ "products": [{ "id": 1 }] });


        
    });

});