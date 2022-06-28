import React from 'react'

const LayoutProfile = ({children}) => {
  return (
    <div className='grid grid-cols-3 gap-4'>
      <div className="col-span-1">01</div>
      <div className='col-span-2'>{children}</div>
    </div>
  )
}

export default LayoutProfile
