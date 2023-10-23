import { renderHook, act } from '@testing-library/react';
import axios from 'axios';
import { useFetchCountries } from '@/services/useFetchCountries';

jest.mock('axios'); // Mock the axios library

describe('useFetchCountries', () => {
  it('handles errors', async () => {
    (axios.get as jest.Mock).mockRejectedValue(new Error('Network error'));

    const { result } = renderHook(() => useFetchCountries());

    expect(result.current.countries).toEqual([]);

    act(() => {
      result.current.getCountries();
    });


    expect(result.current.countries).toEqual([]);
  });
});
