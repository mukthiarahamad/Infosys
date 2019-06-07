import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Product from './Product';

Enzyme.configure({ adapter: new Adapter() })

it('should render <Product/> component', () => {

    const props = {
        productName: 'test',
        price: 1,
        productImage: '',
        isInCart: true,
        id: 1,
        addToCart: jest.fn(),
        removeFromCart: jest.fn(),
    }

    const wrapper = shallow(<Product {...props} />);

    expect(wrapper.find('.product')).toBeDefined();

})