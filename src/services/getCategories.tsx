const getCategories = async () => {
  try {
    const response = await fetch('https://opentdb.com/api_category.php')
    const { trivia_categories } = await response.json()
    return trivia_categories
  } catch (error) {
    console.log(error)
  }
}
export default getCategories
