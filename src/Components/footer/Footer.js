import React from 'react'
import { useState } from 'react'


function Footer() {
    const [footer, setfooter] = useState(new Date().getFullYear())
  return (
    <div>
        <div className='mt-5'>
            <p>&copy; {footer} <span className='text-danger'>Bank app Powered by <span className='text-success'>Muhammad Anas &#128512; &#128525;</span></span></p>
        </div>
    </div>
  )
}

export default Footer