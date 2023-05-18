import React from 'react'

const Contact = () => {
    return (
        <div>
            <form>
                <div className='flex flex-col overflow-hidden'>

                    <div className='flex flex-row w-full sm:px-14 space-x-2 md:flex-col justify-center md:space-x-0'>
                        <div className='flex flex-col w-full'>
                            <label htmlFor='name'>Name</label>
                            <input className='border' type="text" id="name" />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label htmlFor='number'>Phone Number</label>
                            <input className='border outline-none' type="text" id="number" />
                        </div>
                    </div>
                    <div className='sm:px-14'>
                        <div className='flex flex-col items-center justify-center'>
                            <label htmlFor='Email'>Email</label>
                            <input className='border outline-none w-full' type="text" id="Email" />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <label htmlFor='subject'>Subject</label>
                            <input className='border outline-none w-full' type="text" id="subject" />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <label htmlFor='message'>Message</label>
                            <textarea className='border outline-none w-full' type="text" id="message" />
                            <button>Send message</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Contact