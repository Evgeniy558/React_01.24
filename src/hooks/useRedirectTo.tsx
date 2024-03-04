import { useNavigate } from 'react-router-dom'

export const useRedirectTo = (url: string) => {
  const navigate = useNavigate()
  return () => {
    navigate(url)
  }
}
