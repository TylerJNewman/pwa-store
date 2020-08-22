import React from "react"
import { Link } from "gatsby"
import Header from "../components/Header"

export default () => {
  return (
    <>
      <div>
        <Header title="header of index" />
        <h1>Starter</h1>
        <Link to="/test/">Navigate To Test</Link>
      </div>

      <img
        src="https://www.indiewire.com/wp-content/uploads/2016/08/20140216-131646.jpg"
        alt=""
        className="src"
        width="780"
      />
    </>
  )
}
