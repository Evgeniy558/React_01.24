import getCategories from './getCategories'

const mockResponse = (jsonBody: any): Response => {
  return new Response(JSON.stringify(jsonBody), {
    status: 200,
    headers: { 'Content-type': 'application/json' }
  })
}

beforeAll(() => {
  global.fetch = jest.fn(
    (input: string | URL | Request, init?: RequestInit): Promise<Response> =>
      Promise.resolve(mockResponse({ categories: [{ id: 1, name: 'Test Category' }] }))
  ) as jest.Mock
})

afterAll(() => {
  jest.restoreAllMocks()
})

beforeEach(() => {
  ;(fetch as jest.Mock).mockClear()
})

describe('getCategories', () => {
  test('fetches categories successfully from an API', async () => {
    const categories = await getCategories()

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith('https://opentdb.com/api_category.php')
    expect(categories).toEqual([{ id: 1, name: 'Test Category' }])
  })

  test('handles exception with null', async () => {
    ;(fetch as jest.MockedFunction<typeof fetch>).mockImplementationOnce(() =>
      Promise.reject(new Error('Test Error API failure'))
    )

    const categories = await getCategories()

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(categories).toBeUndefined()
  })
})
