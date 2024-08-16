'use client';

import { useQuery } from '@tanstack/react-query';

// Types
import { EncodeWordPressPageResponseType } from '@/types';

export const useFetchEncodedHtml = () => {
  return useQuery({
    queryKey: ['encodedHtml'],
    queryFn: async () => {
      // TODO: Use Zod for env variables validation

      // Ensure the environment variable is defined
      if (!process.env.NEXT_PUBLIC_WORDPRESS_URL) {
        throw new Error('NEXT_PUBLIC_WORDPRESS_URL is not defined');
      }

      const response = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_URL);

      // Check if the response is ok (status code 2xx)
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();

      // Return the data in the correct type
      return data as EncodeWordPressPageResponseType[];
    },
  });
};


