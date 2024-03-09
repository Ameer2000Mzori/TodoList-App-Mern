import React, { useState, useEffect } from 'react'
import FetchData from './hooks/FetchData.jsx'
import useDeleteTodo from './hooks/DeleteTodo.jsx'
import EditTodo from './hooks/EditTodo.jsx'
import CheckTodo from './hooks/CheckTodo.jsx'
import SetEditTodo from './hooks/SetEditTodo.jsx'
import AddNewTodo from './hooks/AddNewTodo.jsx'
import {
  faPlus,
  faCheck,
  faPen,
  faTrashCan,
  faSquareCheck,
  faSquareXmark,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { AddNewTodoStyled } from './hooks/StyledComponents.jsx'

const validationSchema = Yup.object().shape({
  newtodo: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
})

const Home = () => {
  // use states
  const [openForm, setOpenForm] = useState(false)
  const [editTodoId, setEditTodoId] = useState(false)
  const [addNewTodoText, setAddNewTodoText] = useState('')
  const { mutate: deleteTodo } = useDeleteTodo()
  const { mutate: newEditTodo } = EditTodo()
  const { mutate: newCheckTodo } = CheckTodo()
  const { mutate: newSetEditTodo } = SetEditTodo()
  const { mutate: newAddNewTodo } = AddNewTodo()
  const { data, isLoading, isError } = FetchData()

  const addNewTodo = () => {
    setOpenForm((prev) => !prev)
    setAddNewTodoText('')
  }

  useEffect(() => {
    console.log(openForm)
  }, [openForm])

  console.log(isLoading, isError)

  const formik = useFormik({
    initialValues: {
      newtodo: '',
    },

    onSubmit: (values) => {
      console.log(values, editTodoId)
      if (values.newtodo.length <= 2) {
      } else {
        newEditTodo({ id: editTodoId, text: values.newtodo })
      }
    },
    validationSchema: validationSchema,
  })

  if (isLoading) return <div>loading...</div>

  if (isError) return <div>there is Error</div>

  console.log('data', data)

  return (
    <>
      <div className="h-[100vh] w-[100vw] text-center items-center justify-center flex flex-col ">
        <div className="md:h-[600px] md:w-[460px] h-[560px] w-[360px] bg-slate-400 rounded-md flex flex-col text-center items-center justify-start overflow-hidden relative">
          <div className="h-[10vh] w-[100%] bg-[#265073] text-white flex flex-col text-center items-center justify-center">
            {openForm ? (
              <input
                className="text-black"
                value={addNewTodoText}
                onChange={(e) => {
                  setAddNewTodoText(e.target.value)
                }}
                type="text"
                required
              />
            ) : (
              <h1 className="text-[2.2rem] font-bold">TODOS </h1>
            )}
          </div>
          <div className="h-[90vh] w-[100%] bg-[#76abac] text-white flex flex-col text-center items-center justify-center overflow-auto">
            <ul className="w-[100%] h-[100%] flex flex-col gap-[1px] overflow-auto">
              {data.map((todo) => {
                return (
                  <li
                    key={todo.id}
                    className="w-[100%] h-[50px] text-start flex flex-row items-center justify-between bg-blue-600 overflow-hidden"
                  >
                    {todo.edited ? (
                      <form
                        onSubmit={(e) => {
                          e.preventDefault()
                          formik.handleSubmit()
                          setEditTodoId(todo.id)
                          newSetEditTodo(todo.id)
                        }}
                        className=" relative flex text-end items-end justify-between flex-row gap-2  text-black w-[100%] p-4"
                      >
                        <input
                          type="text"
                          id="newtodo"
                          name="newtodo"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.newtodo}
                        />
                        <p className=" text-[15px] text-zinc-700 absolute  top-[35%] left-[60%]">
                          {formik.errors.newtodo}
                        </p>

                        <button type="submit">
                          <FontAwesomeIcon
                            icon={faCheck}
                            className="text-green-500"
                          />
                        </button>
                      </form>
                    ) : (
                      <>
                        {todo.checked ? (
                          <FontAwesomeIcon
                            icon={faSquareCheck}
                            onClick={() => {
                              newCheckTodo(todo.id)
                            }}
                            className=" ml-2 w-[25px] h-[25px] flex flex-col  text-green-500 cursor-pointer"
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faSquareXmark}
                            onClick={() => {
                              newCheckTodo(todo.id)
                            }}
                            className="  ml-2 w-[25px] h-[25px] flex flex-col text-gray-700 cursor-pointer"
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
                              formik.values.newtodo = ''
                              newSetEditTodo(todo.id)
                            }}
                          >
                            <FontAwesomeIcon icon={faPen} />
                          </button>
                        </div>
                      </>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
          <AddNewTodoStyled onClick={addNewTodo}>
            {openForm ? (
              <FontAwesomeIcon
                onClick={() => {
                  newAddNewTodo({ text: addNewTodoText })
                }}
                icon={faCheck}
                className=" text-red-400 w-[100%] h-[100%] text-[11px]"
              />
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
