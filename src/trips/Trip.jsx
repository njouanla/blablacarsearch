import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { Attribute, ColoredAttribute,StyledTrip, TripProperties, WayPoint} from "../common/styles";

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

const CURRENCY = {
    'EUR': '€'
};

const Trip = ({tripData}) => {
    return (
        <StyledTrip>
            <TripProperties>
                <div>
                    {tripData.waypoints.map((waypoint, index) => (
                        <WayPoint key={index}>
                            <Attribute>{`${new Date(waypoint.date_time).getHours()}:${new Date(waypoint.date_time).getMinutes()}`}</Attribute>
                            <ColoredAttribute isPrice={false}>{waypoint.place.city}</ColoredAttribute>
                        </WayPoint>
                    ))}
                </div>
                <ColoredAttribute isPrice={true}>
                    {tripData.price.amount}
                    {CURRENCY[tripData.price.currency]}
                </ColoredAttribute>
            </TripProperties>
            <a href={tripData.link}>Voir le détail</a>
        </StyledTrip>
    )
};

Trip.propTypes = propTypes;
export default Trip;