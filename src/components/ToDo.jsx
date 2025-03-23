import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx"

function ToDo() {

    const [todo, setTodo] = useState(true)

    const handleToDo = (e) => {
        e.stopPropagation()
        setTodo(!todo)
    }

    return (
        <>
            {
                todo ?
                    <div className='bg-blue-800 text-white flex justify-between items-center mx-[4px] text-sm sm:text-base sm:mx-10 px-3 sm:px-6 py-2 rounded-full mt-2 mr-2 sm:ml-2 sm:mr-6'>
                        <div className='flex justify-center items-center sm:gap-x-3'>
                            <span>Slack is your digital HQ. Meet the new feature keeping teams connected in a work-from anywhere world.</span>
                            <a className='underline font-bold ' href="#">Let's go </a>
                            <FaArrowRightLong />

                        </div>
                        <RxCross2 onClick={handleToDo} className='text-5xl sm:text-2xl' />
                    </div>
                    :
                    <></>
            }
        </>
    )
}

export default ToDo