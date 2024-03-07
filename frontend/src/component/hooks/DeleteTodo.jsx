import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const DeleteTodo = () => {
  const queryClient = useQueryClient()

  const { mutate: deleteTask } = useMutation(
    (id) => axios.delete(`/deletetodo/:${id}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['todos'])
      },
      onError: () => {
        console.log('there was an error')
      },
    }
  )

  return deleteTask
}

export default DeleteTodo
