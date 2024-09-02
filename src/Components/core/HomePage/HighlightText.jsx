import React from 'react'

function HighlightText({text}) {
  return (
    //bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text 
    <span className='font-bold'>
        {" "}
        {text}
    </span>
  )
}

export default HighlightText