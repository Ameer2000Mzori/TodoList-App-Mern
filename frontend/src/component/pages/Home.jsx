import React from 'react'

const Home = () => {
  return (
    <>
      <div className="h-[100vh] w-[100vw] text-center items-center justify-center flex flex-col">
        <div className="md:h-[600px] md:w-[460px] h-[560px] w-[360px] bg-slate-400 rounded-md flex flex-col text-center items-center justify-start overflow-hidden">
          <div className="h-[10vh] w-[100%] bg-[#265073] text-white flex flex-col text-center items-center justify-center">
            <h1 className="text-[2.2rem] font-bold">TODOS </h1>
          </div>
          <div className="h-[90vh] w-[100%] bg-[#76abac] text-white flex flex-col text-center items-center justify-center overflow-auto">
            <ul className="w-[100%] h-[100%] flex flex-col gap-[1px] overflow-auto">
              <li className="w-[100%] h-[50px] text-start flex flex-row items-center justify-between bg-blue-600 overflow-hidden">
                <input type="checkbox" className="w-[10%]" checked />

                <div className="flex flex-row gap-2 w-[60%] h-[100%] pl-1 overflow-auto">
                  <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda possimus, officiis rem inventore ipsam fugiat sed
                    cum error autem temporibus cumque, ab adipisci perferendis
                    minima quibusdam quod. Similique, rerum sed.
                  </h1>
                </div>

                <div className="flex text-end items-end justify-center flex-row gap-2  w-[20%] pr-1">
                  <button>delete</button>
                  <button>edit</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
