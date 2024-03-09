import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
const CheckTodo = () => {
  const queryClient = useQueryClient()

  const checkMutation = useMutation({
    mutationFn: (id) => axios.patch(`/checktodo/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(['todos'])
      console.log('Todo updated successfully')
    },
    onError: (error) => {
      console.error('There was an error', error)
    },
  })

  return checkMutation
}

export default CheckTodo
