import React from 'react'
import { BrowserRouter as Routers, Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Home from '../Pages/home'
import ItemList from '../Pages/itemList'
import AddItemList from '../Pages/itemList/AddItemList'


const Router = () => {
  return (
    <Routers>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/item-list">
          <Route index element={<ItemList />} />
          <Route path="add-item-list" element={<AddItemList />} />
        </Route>
      </Routes>
    </Routers>
  )
}

export default Router