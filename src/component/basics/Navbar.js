import React from 'react'

export const Navbar = ({filteritem}) => {
  return (
    <>
    <nav className="navbar">
    <div className="btn-group">
    <button className="btn-group__item" onClick={() => filteritem("breakfast")}>Breakfast</button>
    <button className="btn-group__item" onClick={() => filteritem("lunch")}>lunch</button>
    <button className="btn-group__item" onClick={() => filteritem("Evening")}>Evening</button>
    <button className="btn-group__item" onClick={() => filteritem("dinner")}>Dinner</button>
    <button className="btn-group__item" onClick={() => filteritem("cake")}>Cake</button>
    <button className="btn-group__item" onClick={() => filteritem("cake")}>Cake</button>
    </div>
  </nav>
    </>
  )
}
