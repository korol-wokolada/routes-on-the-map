export async function getFirstRoute() {
  const response = await fetch(
    "http://router.project-osrm.org/route/v1/driving/59.84660399,30.29496392;59.82934196,30.42423701;59.83567701,30.38064206?overview=false"
  );
  const data = await response.json();

  return data;
}

export async function getSecondRoute() {
  const response = await fetch(
    "http://router.project-osrm.org/route/v1/driving/59.82934196,30.42423701;59.82761295,30.41705607;59.84660399,30.29496392"
  );
  const data = await response.json();

  return data;
}

export async function getThirdRoute() {
  const response = await fetch(
    "http://router.project-osrm.org/route/v1/driving/59.83567701,30.38064206;59.84660399,30.29496392;59.82761295,30.41705607?overview=false"
  );
  const data = await response.json();

  return data;
}

// {message: 'URL string malformed close to position 21: "399,30"', code: 'InvalidUrl'}
