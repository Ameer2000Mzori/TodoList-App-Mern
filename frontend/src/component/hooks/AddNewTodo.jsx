import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const AddNewTodo = () => {
  const queryClient = useQueryClient()

  const addMutation = useMutation({
    mutationFn: ({ text }) => axios.post('/addtodo', { text }),
    onSuccess: () => {
      queryClient.invalidateQueries(['todos'])
      console.log('Todo added successfully')
    },
    onError: (error) => {
      console.log(error)
    },
  })

  return addMutation
}

export default AddNewTodo
