"use client"

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface VehicleType {
  MakeId: number;
  MakeName: string;
}

const FilterPage: React.FC = () => {
  const [vehicleTypes, setVehicleTypes] = useState<VehicleType[]>([]);
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    fetchVehicleTypes();
  }, []);

  const fetchVehicleTypes = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_VEHICLE_TYPES_ENDPOINT}`);
      const data = await response.json();
      setVehicleTypes(data.Results);
    } catch (error) {
      console.error('Error fetching vehicle types:', error);
    }
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2014 }, (_, i) => (currentYear - i).toString());

  const handleNextClick = () => {
    if (selectedType && selectedYear) {
      router.push(`/result/${selectedType}/${selectedYear}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-black flex items-center justify-center">
  <div className="bg-white p-8 rounded-lg shadow-lg w-96">
    <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
      Vehicle Filter
    </h1>

    <div className="mb-6">
      <label htmlFor="vehicleType" className="block text-sm font-semibold text-gray-700 mb-2">
        Vehicle Type
      </label>
      <select
        id="vehicleType"
        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value="" className="text-gray-400">Select a vehicle type</option>
        {vehicleTypes.map((type) => (
          <option key={type.MakeId} value={type.MakeId} className="text-gray-800">
            {type.MakeName}
          </option>
        ))}
      </select>
    </div>

    <div className="mb-8">
      <label htmlFor="modelYear" className="block text-sm font-semibold text-gray-700 mb-2">
        Model Year
      </label>
      <select
        id="modelYear"
        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
      >
        <option value="" className="text-gray-400">Select a model year</option>
        {years.map((year) => (
          <option key={year} value={year} className="text-gray-800">
            {year}
          </option>
        ))}
      </select>
    </div>

    <button
      className={`w-full py-3 px-4 rounded-md text-white font-semibold transition-colors duration-300 ${
        selectedType && selectedYear
          ? 'bg-blue-600 hover:bg-blue-700'
          : 'bg-gray-400 cursor-not-allowed'
      }`}
      onClick={handleNextClick}
      disabled={!selectedType || !selectedYear}
    >
      Next
    </button>
  </div>
  </div>
  );
};

export default FilterPage;