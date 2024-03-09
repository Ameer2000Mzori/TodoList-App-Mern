import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const useDeleteTodo = () => {
  const queryClient = useQueryClient()

  const deleteMutation = useMutation({
    mutationFn: (id) => axios.delete(`/deletetodo/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(['todos'])
      console.log('Todo deleted successfully')
    },
    onError: (error) => {
      console.error('There was an error', error)
    },
  })

  return deleteMutation
}

export default useDeleteTodo
