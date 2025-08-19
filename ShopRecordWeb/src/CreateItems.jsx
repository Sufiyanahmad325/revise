import React, { useState } from 'react'

function CreateItems({ setdata, data }) {

  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState()
  const [unit, setUnit] = useState()
  const [isEdit, setIsEdit] = useState(null)


  const handleSubmit = (e) => {
    // Validation for empty fields
    if (!name || !quantity) {
      alert("Please fill all fields")
      e.preventDefault()
      return
    }

    if (isEdit != null) {
      setdata(prev => prev.map(item => item.id == isEdit.id ? { ...item, name: name, stock: quantity, unit: unit } : item))
      setIsEdit(null)
      setName('')
      setQuantity('')
      setUnit('')
      e.preventDefault()
      return
    }




    let obj = {
      id: new Date(),
      name: name,
      stock: quantity,
      unit: unit || 'kg'
    }

    setdata(prev => [obj, ...prev])
    setName('')
    setQuantity('')
    setUnit('')
    e.preventDefault()

  }


  const handleEdit = (item) => {
    setIsEdit(item)

    setName(item.name)
    setQuantity(item.stock)
    setUnit(item.unit)
  }

  const handleDelte = (id) => {
    setdata(prev => prev.filter(item => item.id != id))
  }


  return (
    <div>
      {/* Form Section */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Create Item
      </h2>

      <form className="space-y-4">
        {/* Item Name */}
        <div>
          <label className="block text-gray-700 mb-2">Item Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter item name"
          />
        </div>

        {/* Stock Quantity */}
        <div>
          <label className="block text-gray-700 mb-2">Stock Quantity</label>
          <input
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter stock quantity"
          />
        </div>

        {/* Unit Dropdown */}
        <div>
          <label className="block text-gray-700 mb-2">Unit</label>
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">select your unit </option>
            <option value="pcs">Pieces</option>
            <option value="kg">Kilograms</option>
            <option value="bg">Bags</option>
            <option value="pc">Pcs</option>
            <option value="pk">Pack</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          onClick={(e) => handleSubmit(e)}
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition duration-200"
        >
          {isEdit ? 'Update Item' : 'Create Item'}
        </button>
      </form>

      {/* Current Items List */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Current Items
        </h3>

        <ul className="space-y-2">
          {data.map((item) => (
            <li
              key={item.id}
              className={`
                flex flex-row justify-between rounded-md px-14 p-3 w-full 
                ${item.unit == 'kg' || item.unit == 'pcs' ? item.stock < 30 ? 'bg-red-300' : 'bg-green-400'
                  : item.unit == 'bg' ? item.stock < 6 ? 'bg-red-300' : 'bg-green-400'
                    : item.unit == 'pc' ? item.stock < 30 ? 'bg-red-300' : 'bg-green-400'
                      : item.unit == 'pk' ? item.stock < 20 ? 'bg-red-300' : 'bg-green-400'
                        : ''
                }
              `}
            >
              {/* Item Name */}
              <span className="font-medium">{item.name}</span>

              {/* Stock + Unit + Actions */}
              <div className="flex w-1/2 justify-end items-center gap-4">
                <div className="flex gap-5 w-3/7">
                  <p className="w-1/2">{item.stock}</p>
                  <p className="w-1/2">{item.unit}</p>
                </div>

                <div className="flex gap-2 w-4/7 justify-end px-1">
                  <button
                    onClick={() => handleEdit(item)}
                    className="border-2 hover:bg-blue-500 py-0.5 px-4 rounded-md"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelte(item.id)}
                    className="border-2 hover:bg-blue-500 py-0.5 px-4 rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CreateItems
