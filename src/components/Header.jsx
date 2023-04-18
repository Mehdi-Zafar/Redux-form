import React from 'react'
import { clear } from '../redux/form/FormSlice'
import { useDispatch } from 'react-redux'
import {SiRedux} from 'react-icons/si'

export const Header = () => {
    const dispatch = useDispatch()
  return (
    <div className="w-full h-20 text-amber-200 font-semibold text-2xl flex justify-center items-center tracking-wider">
        <SiRedux/>&nbsp;Redux form
        <button onClick={()=>dispatch(clear())} className="absolute top-4 right-4 hidden lg:block text-lg border-2 border-amber-200 py-1.5 px-4 rounded-lg hover:bg-purple-900 hover:text-amber-200">
            Clear
        </button>
    </div>
  )
}
