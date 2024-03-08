import React from 'react'
import FetchData from './hooks/FetchData.jsx'
import useDeleteTodo from './hooks/DeleteTodo.jsx'

const Home = () => {
  const { mutate: deleteTodo } = useDeleteTodo()
  const { data, isLoading, isError } = FetchData()

  console.log(isLoading, isError)

  if (isLoading) return <div>loading...</div>

  if (isError) return <div>there is Error</div>

  console.log('data', data)

  return (
    <>
      <div className="h-[100vh] w-[100vw] text-center items-center justify-center flex flex-col">
        <div className="md:h-[600px] md:w-[460px] h-[560px] w-[360px] bg-slate-400 rounded-md flex flex-col text-center items-center justify-start overflow-hidden">
          <div className="h-[10vh] w-[100%] bg-[#265073] text-white flex flex-col text-center items-center justify-center">
            <h1 className="text-[2.2rem] font-bold">TODOS </h1>
          </div>
          <div className="h-[90vh] w-[100%] bg-[#76abac] text-white flex flex-col text-center items-center justify-center overflow-auto">
            <ul className="w-[100%] h-[100%] flex flex-col gap-[1px] overflow-auto">
              {data.map((todo) => {
                return (
                  <li
                    key={todo.id}
                    className="w-[100%] h-[50px] text-start flex flex-row items-center justify-between bg-blue-600 overflow-hidden"
                  >
                    {todo.checked ? (
                      <input type="checkbox" className="w-[10%]" checked />
                    ) : (
                      <input type="checkbox" className="w-[10%]" />
                    )}

                    <div className="flex flex-row gap-2 w-[60%] h-[100%] pl-1 overflow-auto">
                      <h1>{todo.text}</h1>
                    </div>

                    <div className="flex text-end items-end justify-center flex-row gap-2  w-[20%] pr-1">
                      <button
                        onClick={() => {
                          deleteTodo(todo.id)
                        }}
                      >
                        delete
                      </button>
                      <button>edit</button>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
