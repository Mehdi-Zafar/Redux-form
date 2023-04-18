import React from 'react'
import { useSelector} from 'react-redux'
import {GoMail} from 'react-icons/go'
import {IoIosPeople} from 'react-icons/io'
import {AiOutlinePhone} from 'react-icons/ai'
import {IoPersonOutline} from 'react-icons/io5'
import {BsFillPatchQuestionFill} from 'react-icons/bs'
import {MdDoNotDisturbAlt} from 'react-icons/md'

export const Display = () => {
  const form = useSelector((state) => state.form.value)
  return (
    <div className="text-center text-amber-200 lg:w-1/2 w-3/4 lg:mt-0 mt-4 tracking-wider">
        <h1 className="font-semibold text-lg my-4">Current Information</h1>
        <div className="font-medium w-full flex justify-around items-center flex-wrap space-y-5 space-x-2 tracking-wider mt-4">
        <div className="lg:w-60 w-full lg:max-w-none max-w-sm h-28 bg-transparent border-2 border-amber-200 rounded-full flex justify-center items-center flex-col shadow-lg mt-6">
                <h5 className="font-semibold text-lg flex items-center"><IoPersonOutline/>&nbsp;First name:</h5> 
                <p className='mt-4'> {form.firstName ? form.firstName: <span className='text-xl'><MdDoNotDisturbAlt/></span>}</p>
            </div>
            <div className="lg:w-60 w-full lg:max-w-none max-w-sm h-28 bg-transparent border-2 border-amber-200 rounded-full flex justify-center items-center flex-col shadow-lg">
                <h5 className="font-semibold text-lg flex items-center"><IoPersonOutline/>&nbsp;Last name:</h5>
                 <p className='mt-4'> {form.lastName ? form.lastName: <span className='text-xl'><MdDoNotDisturbAlt/></span>}</p>
            </div>
            <div className="lg:w-60 w-full lg:max-w-none max-w-sm h-28 bg-transparent border-2 border-amber-200 rounded-full flex justify-center items-center flex-col shadow-lg">
                <h5 className="font-semibold text-lg flex items-center"><GoMail/>&nbsp;Email address:</h5> 
                <p className='mt-4'>{form.email ? form.email: <span className='text-xl'><MdDoNotDisturbAlt/></span>}</p>
            </div>
            <div className="lg:w-60 w-full lg:max-w-none max-w-sm h-28 bg-transparent border-2 border-amber-200 rounded-full flex justify-center items-center flex-col shadow-lg">
                <h5 className="font-semibold text-lg flex items-center"><AiOutlinePhone/>&nbsp;Phone number:</h5> 
                <p className='mt-4'> {form.phoneNumber ? form.phoneNumber: <span className='text-xl'><MdDoNotDisturbAlt/></span>}</p>
            </div>
            <div className="lg:w-60 w-full lg:max-w-none max-w-sm h-28 bg-transparent border-2 border-amber-200 rounded-full flex justify-center items-center flex-col shadow-lg"> 
                <h5 className="font-semibold text-lg flex items-center"><IoIosPeople/>&nbsp;Company: </h5> 
                <p className='mt-4'>{form.company ? form.company: <span className='text-xl'><MdDoNotDisturbAlt/></span>}</p>
            </div>
        </div>
    </div>
  )
}
