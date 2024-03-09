import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
const SetEditTodo = () => {
  const queryClient = useQueryClient()

  const setEditTodoMutation = useMutation({
    mutationFn: (id) => axios.patch(`/setTodoEdit/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(['todos'])
      console.log('Todo updated successfully')
    },
    onError: (error) => {
      console.log(error)
    },
  })

  return setEditTodoMutation
}

export default SetEditTodo
