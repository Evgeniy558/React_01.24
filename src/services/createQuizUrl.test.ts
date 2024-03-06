import { createQuizUrl } from './createQuizUrl'

describe('Test createQuizURL', () => {
  test('test url without difficulty', () => {
    const url = createQuizUrl(10, 'test_category', 'difficulty not chosen', 'type_test')
    expect(url).toEqual(
      'https://opentdb.com/api.php?amount=10&category=test_category&type=type_test'
    )
  })
  test('test url with difficulty', () => {
    const url = createQuizUrl(15, 'test_category', 'test_difficulty', 'type_test')
    expect(url).toEqual(
      'https://opentdb.com/api.php?amount=15&category=test_category&difficulty=test_difficulty&type=type_test'
    )
  })
  test('test url with null', () => {
    const url = createQuizUrl(10, null, 'difficulty not chosen', 'type not chosen')
    expect(url).toEqual('https://opentdb.com/api.php?amount=10')
  })
  test('test url with type not chosen', () => {
    const url = createQuizUrl(20, 'test_category', 'test_difficulty', 'type not chosen')
    expect(url).toEqual(
      'https://opentdb.com/api.php?amount=20&category=test_category&difficulty=test_difficulty'
    )
  })
})
