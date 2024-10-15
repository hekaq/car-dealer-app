export async function getCarsData() {
    const url =
      "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response: ${response.status}`);
      }
  
      const json = await response.json();
      return json;
    } catch (e) {
      console.error((e as Error).message);
      return null;
    }
  }