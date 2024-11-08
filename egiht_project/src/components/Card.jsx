import React from 'react'

const Card = ({data,loading,error}) => {
  if (loading) {
    return  <h1>Loading...</h1>
    
  }
  if (error !== null) {
    return <h1>Something went wrong please try again.</h1>
  }

    return (
   <div className='flex flex-wrap gap-11 '>{data.map((value)=>(
        <div key={value.id}
         className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <a href="#">
                <img className="rounded-t-lg h-56" src={value.image} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{value.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{value.description}</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                   <p>{value.price}</p>
                </a>
            </div>
        </div>
   ))}</div>
  )
}

export default Card
