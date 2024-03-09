import { useMutation, QueryClient } from '@tanstack/react-query'

const SetEditTodo = () => {
  const queryClient = QueryClient()

  const setEditTodoMutation = useMutation({
    mutationFn: (id) => axios.patch(`/edittodo/${id}`),
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
