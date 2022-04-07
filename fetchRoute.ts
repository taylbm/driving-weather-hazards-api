export async function fetchRoute(
  origin: [number, number],
  destination: [number, number]
) {
  const url = `https://directions.routewx.com/directions?start=${origin[1]},${origin[0]}&end=${destination[1]},${destination[0]}`

  // const url =
  //   'https://directions.routewx.com/directions?start=35.1,-101.2&end=34.4,-98.5'
  const x = await fetch(url, {
    method: 'GET',
    headers: {
      'x-api-key': 'INSERT_API_KEY_HERE',
    },
  }).then((resp) => resp.json())

  return x
}
