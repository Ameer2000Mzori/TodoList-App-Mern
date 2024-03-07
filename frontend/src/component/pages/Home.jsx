import React from 'react'

const Home = () => {
  return (
    <>
      <div className="h-[100vh] w-[100vw] text-center items-center justify-center flex flex-col">
        <div className="h-[600px] w-[460px] bg-slate-400 rounded-md flex flex-col text-center items-center justify-start overflow-hidden">
          <div className="h-[10vh] w-[100%] bg-[#265073] text-white flex flex-col text-center items-center justify-center">
            <h1 className="text-[2.2rem] font-bold">TODOS </h1>
          </div>
          <div className="h-[90vh] w-[100%] bg-[#2D9596] text-white flex flex-col text-center items-center justify-center ">
            <ul>
              <li>
                <input type="checkbox" checked />
                <p>Ameer</p>
                <button>delete</button>
                <button>edit</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
