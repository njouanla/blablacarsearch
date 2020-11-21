import React from 'react';
import PropTypes from 'prop-types';

export const propTypes = {
    tripData: PropTypes.shape({
        distance_in_meters: PropTypes.number,
        duration_in_seconds: PropTypes.number,
        link: PropTypes.string,
        price: PropTypes.shape({
            amount: PropTypes.string,
            currency: PropTypes.string
        }),
        waypoints: PropTypes.arrayOf(PropTypes.shape({
            date_time: PropTypes.string,
            place: PropTypes.shape({
                address: PropTypes.string,
                city: PropTypes.string,
                country_code: PropTypes.string,
                latitude: PropTypes.number,
                longitude: PropTypes.number
            })
        }))
    })
};

const Trip = ({tripData}) => {
    return (<div>
        <div>horaires + destinations</div>
        <div>prix</div>
        <div>conducteur</div>
    </div>)
};

Trip.propTypes = propTypes;
export default Trip;