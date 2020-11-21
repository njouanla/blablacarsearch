export const mockedResponse = {
    "link": "https://www.blablacar.fr/search?fc=48.8566,2.3522&tc=45.764043,4.835659&db=2020-11-21&de=2020-11-21",
    "search_info": {
        "count": 3,
        "full_trip_count": 1
    },
    "trips": [
        {
            "link": "https://www.blablacar.fr/trip?source=CARPOOLING&id=2090443026-paris-lyon",
            "waypoints": [
                {
                    "date_time": "2020-11-21T14:30:00",
                    "place": {
                        "city": "Paris",
                        "address": "Gare de Lyon - Diderot, Paris",
                        "latitude": 48.845711,
                        "longitude": 2.373389,
                        "country_code": "FR"
                    }
                },
                {
                    "date_time": "2020-11-21T19:20:00",
                    "place": {
                        "city": "Lyon",
                        "address": "Gare de Lyon-Perrache, Lyon",
                        "latitude": 45.74867,
                        "longitude": 4.825995,
                        "country_code": "FR"
                    }
                }
            ],
            "price": {
                "amount": "37.00",
                "currency": "EUR"
            },
            "distance_in_meters": 462846,
            "duration_in_seconds": 17400
        },
        {
            "link": "https://www.blablacar.fr/trip?source=CARPOOLING&id=2093738291-antony-lyon",
            "waypoints": [
                {
                    "date_time": "2020-11-21T18:40:00",
                    "place": {
                        "city": "Antony",
                        "address": "9 avenue le Brun, 92160 Antony, France",
                        "latitude": 48.765694524,
                        "longitude": 2.306660464,
                        "country_code": "FR"
                    }
                },
                {
                    "date_time": "2020-11-21T23:20:00",
                    "place": {
                        "city": "Lyon",
                        "address": "86 Quai Perrache",
                        "latitude": 45.732650997,
                        "longitude": 4.818212986,
                        "country_code": "FR"
                    }
                }
            ],
            "price": {
                "amount": "37.00",
                "currency": "EUR"
            },
            "vehicle": {
                "make": "AUDI",
                "model": "A3"
            },
            "distance_in_meters": 454293,
            "duration_in_seconds": 16800
        }
    ]
};