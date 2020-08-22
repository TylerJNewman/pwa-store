import React from "react"
import { navigate } from "gatsby"
import Header from "../components/Header"

export default () => {
  return (
    <>
      <div>
        <Header title="header of test" />
        <h1>Starter</h1>
        <button onClick={() => navigate("/")}>Index</button>
      </div>
      test page
    </>
  )
}
