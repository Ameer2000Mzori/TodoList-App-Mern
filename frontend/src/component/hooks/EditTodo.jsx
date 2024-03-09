import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
const EditTodo = () => {
  const queryClient = useQueryClient()

  const editMutation = useMutation({
    mutationFn: ({ id, text }) => axios.patch(`/edittodo/${id}`, { text }),
    onSuccess: () => {
      queryClient.invalidateQueries(['todos'])
      console.log('Todo updated successfully')
    },
    onError: (error) => {
      console.error('There was an error', error)
    },
  })

  return editMutation
}

export default EditTodo
