import React, { useState, useEffect } from 'react'
import FetchData from './hooks/FetchData.jsx'
import useDeleteTodo from './hooks/DeleteTodo.jsx'
import EditTodo from './hooks/EditTodo.jsx'
import CheckTodo from './hooks/CheckTodo.jsx'
import {
  faPlus,
  faCheck,
  faPen,
  faTrashCan,
  faSquareCheck,
  faSquareXmark,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  BtnWrap,
  SubmitBtnStyled,
  AddNewTodoStyled,
} from './hooks/StyledComponents.jsx'
const Home = () => {
  const [openForm, setOpenForm] = useState(false)
  const { mutate: deleteTodo } = useDeleteTodo()
  const { mutate: newEditTodo } = EditTodo()
  const { mutate: newCheckTodo } = CheckTodo()
  const { data, isLoading, isError } = FetchData()

  const addNewTodo = () => {
    setOpenForm((prev) => !prev)
  }

  useEffect(() => {
    console.log(openForm)
  }, [openForm])

  console.log(isLoading, isError)

  if (isLoading) return <div>loading...</div>

  if (isError) return <div>there is Error</div>

  console.log('data', data)

  return (
    <>
      <div className="h-[100vh] w-[100vw] text-center items-center justify-center flex flex-col ">
        <div className="md:h-[600px] md:w-[460px] h-[560px] w-[360px] bg-slate-400 rounded-md flex flex-col text-center items-center justify-start overflow-hidden relative">
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
                      <FontAwesomeIcon
                        icon={faSquareCheck}
                        onClick={() => {
                          newCheckTodo(todo.id)
                        }}
                        className=" ml-2 w-[25px] h-[25px] flex flex-col "
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faSquareXmark}
                        onClick={() => {
                          newCheckTodo(todo.id)
                        }}
                        className=" ml-2 w-[25px] h-[25px] flex flex-col text-gray-700"
                      />
                    )}

                    <div className="flex flex-row gap-2 w-[60%] h-[100%] pl-1 overflow-auto">
                      <h1 className="flex flex-col text-center items-center justify-center">
                        {todo.text}
                      </h1>
                    </div>

                    <div className="flex text-end items-end justify-center flex-row gap-4  w-[20%] pr-1">
                      <button
                        onClick={() => {
                          deleteTodo(todo.id)
                        }}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                      <button
                        onClick={() => {
                          const newText = 'this is edited todo' // Define the new text for the todo
                          newEditTodo({ id: todo.id, text: newText }) // Call the mutation function with an object containing id and text
                        }}
                      >
                        <FontAwesomeIcon icon={faPen} />
                      </button>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <AddNewTodoStyled onClick={addNewTodo}>
            {openForm ? (
              <FontAwesomeIcon icon={faCheck} className=" text-red-400" />
            ) : (
              <FontAwesomeIcon icon={faPlus} className=" text-black" />
            )}
          </AddNewTodoStyled>
        </div>
      </div>
    </>
  )
}

export default Home
