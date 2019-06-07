import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import ProductList from './ProductList';

Enzyme.configure({ adapter: new Adapter() })

it('should render <ProductList/> component', () => {

    const props = {
        products: []
    }

    const wrapper = shallow(<ProductList {...props} />);


})