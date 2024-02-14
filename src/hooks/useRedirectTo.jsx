import { useNavigate } from 'react-router-dom'

export const useRedirectTo = (url) => {
  const navigate = useNavigate()
  return () => {
    navigate(url)
  }
}
