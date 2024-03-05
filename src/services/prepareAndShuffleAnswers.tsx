interface QuestionType {
  type: string
  difficulty: string
  category: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}
interface shuffleArrayType {
  text: string
  isCorrect: boolean
}

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export const prepareAndShuffleAnswers = (question: QuestionType) => {
  if (!question) return []
  const allAnswers = [
    ...question.incorrect_answers.map((answer) => {
      return { text: answer, isCorrect: false }
    }),
    { text: question.correct_answer, isCorrect: true }
  ]
  console.log(allAnswers)
  return shuffleArray(allAnswers)
}
