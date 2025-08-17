import { useState } from 'react'
import Allitem from './Allitem'
import LowStock from './LowStock'
import CreateItems from './CreateItems'

function App() {
  const [openComponent, setOpenComponent] = useState(3)
  const [data, setdata] = useState([
    { id: 1, name: 'Item 1', stock: 30 , unit: 'pcs'},
    { id: 2, name: 'Item 2', stock: 5 , unit: 'pcs'},
    { id: 3, name: 'Item 3', stock: 0 , unit: 'pcs'},
    { id: 4, name: 'Item 4', stock: 20 , unit: 'pcs'},
    { id: 5, name: 'Item 5', stock: 3 , unit: 'pcs'},
    { id: 6, name: 'Item 6', stock: 52 , unit: 'pcs'},
    { id: 7, name: 'Item 7', stock: 8 , unit: 'pcs'},
    { id: 8, name: 'Item 8', stock: 12 , unit: 'pcs'},
    { id: 9, name: 'Item 9', stock: 1 , unit: 'pcs'},
    { id: 10, name: 'Item 10', stock: 18 , unit: 'pcs'},
    { id: 11, name: 'Item 11', stock: 7 , unit: 'pcs'},
    { id: 12, name: 'Item 12', stock: 4 , unit: 'pcs'},
    { id: 13, name: 'Item 13', stock: 9 , unit: 'pcs'},
    { id: 14, name: 'Item 14', stock: 6 , unit: 'pcs'},
    { id: 15, name: 'Item 15', stock: 2 , unit: 'pcs'},
    { id: 16, name: 'Item 16', stock: 31 , unit: 'pcs'},
  ])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>

      {/* Buttons */}
      <div className="flex gap-4 mb-10">
        <button
          onClick={() => setOpenComponent(1)}
          className={`px-5 py-2 rounded-lg text-white font-medium shadow 
          ${openComponent === 1 ? 'bg-blue-600' : 'bg-blue-500 hover:bg-blue-600'}`}
        >
          All Item
        </button>

        <button
          onClick={() => setOpenComponent(2)}
          className={`px-5 py-2 rounded-lg text-white font-medium shadow 
          ${openComponent === 2 ? 'bg-green-600' : 'bg-green-500 hover:bg-green-600'}`}
        >
          Low Stock
        </button>

        <button
          onClick={() => setOpenComponent(3)}
          className={`px-5 py-2 rounded-lg text-white font-medium shadow 
          ${openComponent === 3 ? 'bg-purple-600' : 'bg-purple-500 hover:bg-purple-600'}`}
        >
          Create Item
        </button>
      </div>

      {/* Conditional Component Rendering */}
      <div className="w-full max-w-3xl bg-white p-6 rounded-2xl shadow">
        {openComponent === 1 && <Allitem data={data} />}
        {openComponent === 2 && <LowStock  data={data} />}
        {openComponent === 3 && <CreateItems  data={data} />}
      </div>
    </div>
  )
}

export default App
