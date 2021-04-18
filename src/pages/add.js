import React, { useState } from 'react'

import CategoryButton from './../components/categoryButton'

// material-ui
import { IconButton } from '@material-ui/core'

//icons
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import EditIcon from '@material-ui/icons/Edit'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import CancelIcon from '@material-ui/icons/Cancel'

function AddPage(props) {
  const [token, setToken] = useState(null)
  const [activeCategory, setActiveCategory] = useState({})
  const [type, setType] = useState('expense')

  const handleToken = (index, name, color) => {
    setToken(index)
    setActiveCategory({ name: name, color: color })
  }

  const handleSelect = () => {
    type == 'expense' ? setType('income') : setType('expense')
    setActiveCategory({})
    setToken(null)
  }

  const goBack = () => {
    props.history.goBack()
  }

  // test data
  const categories = [
    { name: 'Food', color: 'red', type: 'expense' },
    { name: 'Car', color: 'red', type: 'expense' },
    { name: 'Salary', color: 'green', type: 'income' },
    { name: 'Gift', color: 'green', type: 'income' }
  ]

  return (
    <div className="m-auto max-w-4xl">
      {/* Categories */}
      <div className="flex flex-col w-full h-full bg-white rounded shadow-md mb-8 p-4">
        <select
          className="bg-gray-200 w-32 h-8 mr-auto"
          onChange={handleSelect}
        >
          <option value="expenses">Expenses</option>
          <option value="income">Income</option>
        </select>
        <div className="w-full h-full mt-4 flex flex-row flex-wrap">
          {/* categories-btn */}
          {categories.map((category, index) => {
            if (type == category.type) {
              return (
                <div key={index}>
                  <CategoryButton
                    index={index}
                    name={category.name}
                    baseColor={category.color}
                    colorChange={token === index ? category.color : 'gray'}
                    handleClick={handleToken}
                  />
                </div>
              )
            }
          })}
        </div>
      </div>

      {/* Input */}
      {!Object.keys(activeCategory).length == 0 && (
        <div className="w-full h-full bg-white rounded shadow-md flex flex-wrap flex-row items-center p-4">
          {/* categories-btn */}
          <div
            className={`bg-${activeCategory.color}-300 mr-2 w-16 h-16 shadow-lg rounded-full flex items-center justify-center`}
          >
            <InfoOutlinedIcon />
          </div>

          <div className="h-10 flex flex-row items-center text-xl">
            <EditIcon />
            <input className="ml-2 mr-2" id="text" placeholder="Memo..." />
          </div>
          <div className="h-10 ml-auto flex items-center text-xl">
            <input
              id="amount"
              placeholder="0"
              maxLength={8}
              style={{ maxWidth: '100px' }}
              className="w-full text-right"
            />
          </div>
        </div>
      )}

      {/* action button */}
      <div className="flex justify-center items-center mt-8 ">
        <IconButton color="primary" className="mr-8">
          <CheckCircleIcon fontSize="large" />
        </IconButton>
        <IconButton color="secondary" onClick={goBack}>
          <CancelIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  )
}

export default AddPage
