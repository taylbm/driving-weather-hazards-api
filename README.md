# driving-weather-hazards-api

* Retrieves Route Weather Guidance for a particular road route using the NAM-3km CONUS model from NOMADS: https://nomads.ncep.noaa.gov/cgi-bin/filter_nam_conusnest.pl
* Serves as the backend for the RouteWx iOS App: https://apps.apple.com/us/app/routewx/id1551376145
* A free, PWA (Progressive Web App) version of RouteWx can be found here: https://www.routewx.com/demo.html

## Register for an API Key

https://api.swiftweather.co/getting-started

Register to get an API Key for free!

## TypeScript API Request Example

See [fetchRoute](fetchRoute.ts) example TypeScript function

## curl API Request Example with City, State and default Departure Time:
`curl -X GET "https://directions.routewx.com/directions?start=Ft.Collins,CO&end=Denver,CO" -H "accept: application/json" -H "x-api-key: API_KEY_HERE"`
If a departure time is not provided, the current time is assumed.
## curl API Request Example with Lat, Lon and Departure Time:
`curl -X GET "https://directions.routewx.com/directions?start=38.1,-101.2&end=37.4,-103.5&departure_time=1649289600" -H "accept: application/json" -H "x-api-key: API_KEY_HERE"`

## Example JSON Response:
```json

{
  "message": "Success", 
  "polylines": [
    {
      "coords": [
        {"lat": 40.58526, "lng": -105.08429}, # start of segment
        {"lat": 40.58086, "lng": -105.04458} # end of segment
      ],
      "hazard_level": "orange", # moderate risk of weather hazards
      "temp": 45, # units of Fahrenheit
      "precip": 0.0, # units of inches
      "frozen_precip": 0.0, # units of probability
      "prog_date_epoch": 1649289600.0, # epoch timestamp
      "gust": 36 # units of miles per hour
    },
    {
      "coords": [
        {"lat": 40.58086, "lng": -105.04458},
        {"lat": 40.581, "lng": -105.00495}],
      "hazard_level": "orange",
      "temp": 45,
      "precip": 0.0,
      "frozen_precip": 0.0,
      "prog_date_epoch": 1649289600.0,
      "gust": 36
     },
   {...more route segments here...},
   {
     "coords": [
       {"lat": 39.78012, "lng": -104.98959},
       {"lat": 39.75279, "lng": -104.98756}],
     "hazard_level": "green", # No risk of weather hazards
     "temp": 44,
     "precip": 0.0,
     "frozen_precip": 0.0,
     "prog_date_epoch": 1649289600.0,
     "gust": 28
   }
 ], 
 "bounds": { # bounding box encompassing route
   "northeast": {"lat": 40.5852594, "lng": -104.9791374},
   "southwest": {"lat": 39.7411913, "lng": -105.0861139}
 }
}
```

## API Specifications

See [Swagger YAML API Spec](routewx-ios-rest-api-v1-swagger-apigateway.yaml)
