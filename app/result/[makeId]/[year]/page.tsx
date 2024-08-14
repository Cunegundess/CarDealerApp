import LoadingSpinner from '@/app/components/LoadingSpinner';
import { Suspense } from 'react';
import VehicleModels from './VehicleModels';

export async function generateStaticParams() {
  const makesResponse = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json');
  const makesData = await makesResponse.json();
  const makes = makesData.Results;

  // Generate an array of years from 2015 to current year
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2014 }, (_, i) => (currentYear - i).toString());

  // Generate all possible combinations of makeId and year
  const params = makes.flatMap((make: { MakeId: number }) =>
    years.map((year) => ({
      makeId: make.MakeId.toString(),
      year: year,
    }))
  );

  return params;
}

// This function fetches the data for each pre-rendered page
async function getVehicleModels(makeId: string, year: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_VEHICLE_MODEL_ENDPOINT}/${makeId}/modelyear/${year}?format=json`
  );
  
  if (!res.ok) {
    throw new Error('Failed to fetch vehicle models');
  }
  
  return res.json();
}

export default async function ResultPage({ params }: { params: { makeId: string; year: string } }) {
  const { makeId, year } = params;
  const vehicleData = await getVehicleModels(makeId, year);

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-black flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Vehicle Models</h1>
      <p className="text-center mb-6">
        Showing results for Make ID: {makeId} and Year: {year}
      </p>
      <Suspense fallback={<LoadingSpinner />}>
        <VehicleModels data={vehicleData} />
      </Suspense>
    </div>
  );
}