import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import App from './App';

Enzyme.configure({ adapter: new Adapter() })

it('should render <App/> component', () => {

    const props = {
        products: []
    }

    const wrapper = shallow(<App {...props} />);


})