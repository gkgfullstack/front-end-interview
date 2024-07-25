import { renderHook, act } from '@testing-library/react-hooks';
import useFetchData from './useFetchData'; 

beforeAll(() => {
  global.fetch = jest.fn();
});

afterAll(() => {
  jest.restoreAllMocks();
});

describe('useFetchData hook', () => {
  it('should return data when fetch is successful', async () => {
    const mockData = { message: 'Success' };
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchData('https://api.apis.guru/v2/amazonaws.com.json')
    );

    expect(result.current.loading).toBe(true);
    await waitForNextUpdate();
    expect(result.current.loading).toBe(false);
    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBeNull();
  });

  it('should return error when fetch fails', async () => {
    const mockError = new Error('Network response was not ok');
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
    });

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchData('https://api.apis.guru/v2/amazonaws.com.json')
    );

    expect(result.current.loading).toBe(true);
    await waitForNextUpdate();
    expect(result.current.loading).toBe(false);
    expect(result.current.data).toBeNull();
    expect(result.current.error).toEqual(mockError);
  });

  it('should handle fetch rejection', async () => {
    const mockError = new Error('Fetch failed');
    (fetch as jest.Mock).mockRejectedValueOnce(mockError);

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchData('https://api.apis.guru/v2/amazonaws.com.json')
    );

    expect(result.current.loading).toBe(true);
    await waitForNextUpdate();
    expect(result.current.loading).toBe(false);
    expect(result.current.data).toBeNull();
    expect(result.current.error).toEqual(mockError);
  });
});
