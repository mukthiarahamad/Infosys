import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';


Enzyme.configure({ adapter: new Adapter() })

it('should render <CartItem/> component', () => {

    const props = {
        productName: "",
        price: 10,  
        onClick: jest.fn()
    }

    const wrapper = shallow(<CartItem {...props} />);


})