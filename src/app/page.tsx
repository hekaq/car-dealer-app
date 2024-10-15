import { DropDown } from "@/components/DropDown/DropDown";

async function getData() {
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

export default async function Home() {
  const carData = await getData();

  const cars = carData.Results;

  return (
    <div className="flex justify-center gap-4">
        <DropDown cars={cars} />
    </div>
  );
}
