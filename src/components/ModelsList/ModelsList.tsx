import { CarModel } from "@/types/CarModel";
import { FC } from "react";

interface Props {
  MakeId: number;
  year: number;
}

export const ModelsList: FC<Props> = async ({ MakeId, year }) => {
  const url = `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${MakeId}/modelyear/${year}?format=json`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response: ${response.status}`);
  }

  const rawData = await response.json();
  const data = rawData.Results;

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="text-white font-bold">{`${data[0].Make_Name} ${year} models:`}</div>
        {data.map((model: CarModel) => (
          <div key={model.Model_ID} className="text-white">
            {model.Model_Name}
          </div>
        ))}
      </div>
    </div>
  );
};
