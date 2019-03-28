import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import _ from 'lodash';

import { AddActivity, mapStateToProps, mapDispatchToProps } from '../AddActivity';

configure({ adapter: new Adapter() });

describe('Add activity tests', () => {
    let state, props, wrapper, instance;
    const setInstanceAndWrapper = (_props = {}, _state = {}) => {
        state = _.assign(
            {},
            {
                auth: {
                    isAuthenticated: true,
                    loading: false,
                    admin: {
                        superAdmin: false,
                        seniorCenter: 123,
                        firstName: 'Frog',
                        lastName: 'Anderson'
                    },
                    errors: {}
                },
                activities: {
                    errors: {}
                }
            },
            _state
        );
        wrapper = shallow(
            <AddActivity
                {..._.assign(
                    {},
                    props,
                    mapStateToProps(state, props),
                    mapDispatchToProps(jasmine.createSpy('dispatch'))
                )}
            />
        );
        instance = wrapper.instance();
        wrapper.setState({
            name: 'Test',
            description: 'test description',
            startDate: '1111-11-11T11:11:11',
            endDate: '1111-11-11T11:11:11',
            errors: { description: 'Description is required' }
        });
    };

    beforeEach(() => {
        setInstanceAndWrapper();
    });

    describe('render', () => {
        xit('should render correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});