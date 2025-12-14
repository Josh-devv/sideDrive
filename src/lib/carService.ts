import { Car, CarApiData } from '@/types/Car';

const API_KEY = "9c45a715d6a1f510b213cebd5ded9f4e";
const BASE_URL = 'https://carapi.app/api/models/v2';
const DEFAULT_LIMIT = 5;

const mapApiCarToLocalCar = (apiCar: CarApiData): Car => ({
  id: String(apiCar.id),
  make_id: apiCar.make_id,
  make: apiCar.make,
  name: apiCar.name,
});

export const fetchCars = async (): Promise<Car[]> => {
  if (!API_KEY) {
    console.error('Missing CAR_API_KEY');
    return [];
  }

  const params = new URLSearchParams({
    api_key: API_KEY,
    limit: DEFAULT_LIMIT.toString(),
  });

  try {
    const response = await fetch(`${BASE_URL}?${params.toString()}`, {
      cache: 'no-store', 
    });

    if (!response.ok) {
      console.error('API Error:', response.status);
      return [];
    }

    const json = await response.json();
    const apiCars: CarApiData[] = json.data ?? [];

    return apiCars.map(mapApiCarToLocalCar);
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
};
