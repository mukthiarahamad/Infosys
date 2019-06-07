import Enzyme,{ shallow } from 'enzyme';
import Cart from '../Cart';
import Adapter from 'enzyme-adapter-react-16'
import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';


Enzyme.configure({ adapter: new Adapter() })

it('should render <Cart/> component', () => {

    const props = {
        items: [],
        removeFromCart: jest.fn()
    }

    const wrapper = shallow(<Cart {...props} />);


    const props1 = {
        items: [{id : 1}],
        removeFromCart: jest.fn()
    }

    const wrapper1 = shallow(<Cart {...props} />);


})