import React from 'react';
import renderer from 'react-test-renderer';
import Trip from "../trips/Trip";
import {mockedResponse} from "./mocks";

describe('Trip', () => {
    it('should render Trip', () => {
        const wrapper = renderer
            .create(<Trip tripData={mockedResponse.trips[0]}/>)
            .toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});