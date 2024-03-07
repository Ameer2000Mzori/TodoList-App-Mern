import React from 'react'
import { useQuery } from '@tanstack/react-query'

export const FetchData = () => {
  const result = useQuery({
    queryKey: ['todo', todo],
    queryFn: () => {},
  })
}
