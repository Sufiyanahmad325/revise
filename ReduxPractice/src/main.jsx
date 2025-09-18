import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Todo from './Todo.jsx'
import Blog from './Blog.jsx'
import { Provider } from 'react-redux'
import store from './reduxSetUp/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>

<Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
          <Route index element={<App/>} />
          <Route path="todopage" element={<Todo/>} />
          <Route path="blogpage" element={<Blog/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </Provider>


  </StrictMode>,
)
