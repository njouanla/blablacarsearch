import React from 'react';
import PropTypes from 'prop-types';
import Trip from "./Trip";
import { List } from '../common/styles';

const propTypes = {
  trips: PropTypes.arrayOf(PropTypes.shape(PropTypes.shape({
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
  })))
};

const TripsList = ({trips}) => {
    return <List>{trips.length > 0 ?
        trips.map((trip, index) => <Trip key={index} tripData={trip} />) :
        <span>Pas de trajet disponible</span>}
    </List>;
};

TripsList.propTypes = propTypes;
export default TripsList;