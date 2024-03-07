import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const deleteTodo = (todoId) => axios.delete(`/deletetodo/${todoId}`)

const DeleteTodo = () => {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(deleteTodo, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(['todos'])
    },
  })

  const handleDelete = (todoId) => {
    mutate(todoId)
  }

  return { handleDelete }
}

export default DeleteTodo
