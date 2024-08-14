import LoadingSpinner from "@/app/components/LoadingSpinner";
import { Suspense } from "react";

interface VehicleModel {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

interface VehicleModelsProps {
  data: {
    Results: VehicleModel[];
  };
}

export default function VehicleModels({ data }: VehicleModelsProps) {
  if (!data || !data.Results || data.Results.length === 0) {
    return <div className="text-center text-red-600">No vehicle models found.</div>;
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 m-4 p-4">
        {data.Results.map((model) => (
          <div
            key={model.Model_ID}
            className="bg-white rounded-lg shadow-md flex flex-col items-center p-8"
          >
            <h2 className="text-xl font-semibold mb-2 text-black text-center">
              {model.Model_Name}
            </h2>
            <p className="text-gray-600">Make: {model.Make_Name}</p>
            <p className="text-gray-600">Model ID: {model.Model_ID}</p>
          </div>
        ))}
      </div>
    </Suspense>
  );
}