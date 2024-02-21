export const createQuizUrl = (amount = 10, category, difficulty, type) => {
  let baseUrl = `https://opentdb.com/api.php?amount=${amount}`
  if (category !== null) {
    baseUrl += `&category=${category}`
  }
  if (difficulty !== 'difficulty not chosen') {
    baseUrl += `&difficulty=${difficulty}`
  }
  if (type !== 'type not chosen') {
    baseUrl += `&type=${type}`
  }
  return baseUrl
}
