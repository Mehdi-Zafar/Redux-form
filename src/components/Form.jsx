import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { update,clear } from '../redux/form/FormSlice'

export const Form = () => {
    const [email,setEmail] = useState("")
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [phoneNumber,setPhoneNumber] = useState("")
    const [company,setCompany] = useState("")
    const dispatch=useDispatch()

    function handleSubmit(e){
        e.preventDefault()
        dispatch(update({email: email,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        company: company,}))
        setEmail("")
        setFirstName("")
        setLastName("")
        setPhoneNumber("")
        setCompany("")
    }

  return (
    <div className="lg:w-1/3 w-3/4 mx-4 px-2 py-4 text-amber-200 font-medium tracking-wider">
        <h1 className="text-lg my-2 text-center font-semibold">Enter your details</h1>
        <form onSubmit={handleSubmit} autoComplete="off">
            <div className="relative z-0 w-full mb-6 group">
                <input onChange={(e)=>setFirstName(e.target.value)} value={firstName} autoComplete="no" type="text"  id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-amber-200 bg-transparent border-0 border-b-2 border-slate-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-amber-200 peer" placeholder=" " required />
                <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-200 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input onChange={(e)=>setLastName(e.target.value)} value={lastName} autoComplete="nope" type="text" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-amber-200 bg-transparent border-0 border-b-2 border-slate-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-amber-200 peer" placeholder=" " required />
                <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-200 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input onChange={(e)=>setEmail(e.target.value)} value={email} autoComplete="off" type="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-amber-200 bg-transparent border-0 border-b-2 border-slate-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-amber-200 peer" placeholder=" " required />
                <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-200 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input onChange={(e)=>setPhoneNumber(e.target.value)} value={phoneNumber} autoComplete="never" type="tel" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-amber-200 bg-transparent border-0 border-b-2 border-slate-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-amber-200 peer" placeholder=" " required />
                <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-200 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input onChange={(e)=>setCompany(e.target.value)} value={company} autoComplete="dont" type="text" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-amber-200 bg-transparent border-0 border-b-2 border-slate-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-amber-200 peer" placeholder=" " required />
                <label for="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-200 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
            </div>
        <div className='flex justify-center items-center space-x-4'>
        <button type="submit" className="text-amber-200 bg-transparent border-2 border-amber-200 block font-semibold tracking-widest text-md hover:bg-indigo-900 focus:ring-2 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        <button type="button" onClick={()=>dispatch(clear())} className="text-amber-200 lg:hidden bg-transparent border-2 border-amber-200 block font-semibold tracking-widest text-md hover:bg-indigo-900 focus:ring-2 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Clear
        </button>
        </div>
        </form>
    </div>
  )
}
