import React from 'react'

// icons
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'

function CategoryButton(props) {
  const { index, name, baseColor, colorChange, handleClick } = props

  return(
    <div className='flex flex-col m-4 items-center'>
      <div 
        className={`bg-${colorChange}-300 w-16 h-16 shadow-lg rounded-full flex items-center justify-center`}
        onClick={() => handleClick(index, name, baseColor)}
      >
        <InfoOutlinedIcon />
      </div>
      <div className='mt-2'>{name}</div>
    </div>
  )
}

export default CategoryButton