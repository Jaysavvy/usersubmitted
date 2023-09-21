
import './App.css'

function App() {


  return (
    <>
     <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
  
  <img src="/img/beams.jpg" alt="" className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
  <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
  
<div className="relative flex flex-col justify-center py-6 ">
  <div className="relative bg-white px-6 pb-8 pt-6 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
    <div className="mx-auto max-w-md">
     Try free for 7 days than $20/mo. thereafter 
    </div>
  </div>
</div>

  <div className="relative bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-24">

  

    <div className="mx-auto max-w-md">
      <div className="divide-y divide-gray-300/50">
        <div className="space-y-6 py-8 text-base leading-7 text-gray-600"></div>

        <div>
        <label className="block mb-1 text-sm font-medium text-grey" htmlFor="floating_fist-name">First name</label>
        <input className="  block w-full " type="text" id="first-name" />
        </div>

        <div>
        <label className=" block mb-1 text-sm font-medium text-grey" htmlFor="floating_last-name">Last name</label>
        <input className="block w-full" type="last_name" />
        </div>

        <div>
        <label className="block mb-1 text-sm font-medium text-grey" htmlFor="floating_email">Email address</label>
        <input type="email" />
        </div>

        <div>
        <label className="block mb-1 text-sm font-medium text-grey" htmlFor="floating_password">Password</label>
        <input type="password" />
        </div>

        <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shawdow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full">Submit Here</button>

      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default App
