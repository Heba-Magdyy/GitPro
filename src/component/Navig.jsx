import React from 'react'
import { Link } from 'react-router-dom'
import AddPage from '../Pages/AddPost'
import HomePage from '../Pages/HomePage'
export default function Navig() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">



          <a className="navbar-brand" href="#">
            BLOG
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ">
              <Link
            className="text-gray-500 hover:text-black transition-colorsp-2 bg-success bg-opacity-75 mt-2  rounded text-white p-2 ms-1  "
            to={""}
          >
            Home
          </Link> 
              </li>
              <li className="nav-item ">
                <Link to={"add"} className='p-2 bg-success bg-opacity-75 mt-2  rounded text-white ms-2'>
                    Add Post
                </Link>
              </li>
              <li className="nav-item">
               
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}
