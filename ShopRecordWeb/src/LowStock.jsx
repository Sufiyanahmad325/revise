import React, { useEffect, useState } from 'react'



function LowStock({ data }) {

  const [newData, setNewData] = useState([])

  useEffect(() => {
    setNewData(prev => data.filter(item => {
      return item.unit == 'kg' ? item.stock < 30 : item.unit == 'pcs' ? item.stock < 30 : item.unit == 'bg' ? item.stock < 6 : item.unit == 'pc' ? item.stock < 30 : item.unit == 'pk' ? item.stock < 20 : false
    }));
  }, [data])

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">All Items</h2>

      {/* Header Row */}
      <div className="w-full flex justify-between items-center px-6 py-3 bg-gray-200 rounded-md font-medium text-gray-700">
        <p>Item</p>
        <p>Quantity</p>
      </div>

      {/* Items */}
      <div className="space-y-3 mt-4">
        {newData.map((item) => (
          <div
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
            <span className="text-lg font-semibold text-gray-800">
              {item.name}
            </span>
            <span
              className={`font-medium ${item.stock <= 5 ? 'text-red-700' : 'text-gray-800'
                }`}
            >
              {item.stock} {item.unit}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LowStock