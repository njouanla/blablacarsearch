import React, { useEffect, useState } from 'react';
import { fetchTrips } from './utils/fetch';
import TripsList from "./trips/TripsList";
import { AppScreen, Title} from "./common/styles";

const App = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetchTrips('v3/trips?key=YzbiA8L6DcqxTvSna1lOFQQU66FosDVs&from_coordinate=48.8566%2C2.3522&to_coordinate=45.764043%2C4.835659&from_country=FR&to_country=FR&locale=en-GB&start_date_local=2020-11-21T08:00:00&currency=EUR')
    .then(result => setTrips(result.trips))
    .catch(_ => setTrips([]))
  }, []);

  return (
    <AppScreen>
      <Title>Blablacar Search</Title>
      <TripsList trips={trips} />
    </AppScreen>
  );
}

export default App;