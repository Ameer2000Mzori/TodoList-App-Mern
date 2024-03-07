import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const FetchData = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['todo'],
    queryFn: () => axios.get('/listtodo').then((res) => res.data),
  })

  return { data, isLoading, isError }
}

export default FetchData
