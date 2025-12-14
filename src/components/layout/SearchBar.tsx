'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

function useDebounce<T>(value: T, delay = 500): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get('search') ?? '');
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    const params = new URLSearchParams();

    if (debouncedSearch.trim()) {
      params.set('search', debouncedSearch.trim());
    }

    router.replace(`/cars?${params.toString()}`);
  }, [debouncedSearch, router]);

  return (
    <div className="w-full max-w-lg mb-8">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by make or model (e.g. Toyota, Camry)"
        className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
