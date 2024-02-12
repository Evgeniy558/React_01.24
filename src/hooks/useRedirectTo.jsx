import { useNavigate } from 'react-router-dom'

export const useRedirectTo = (url) => {
  const navigate = useNavigate()
  const redirectTo = () => {
    navigate(url)
  }
  return redirectTo
}
