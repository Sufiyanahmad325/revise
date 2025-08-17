import React from 'react'

function CreateItems() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Create Item</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Item Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter item name"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Stock Quantity</label>
          <input
            type="number"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter stock quantity"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Unit</label>
          <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="pcs">Pieces</option>
            <option value="kg">Kilograms</option>
            <option value="bg">Bags</option>
            <option value="pc">Pcs</option>
            <option value="pk">Pack</option>
          </select>
        </div>
        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition duration-200"
        >
          Create Item
        </button>
      </form>
    </div>
  )
}

export default CreateItems