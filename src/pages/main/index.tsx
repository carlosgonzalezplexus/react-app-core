import {  useNavigate } from "react-router"
import './index.scss'

export const MainPage = () => {
  const navigate = useNavigate()

  return (<>
  <h1 className="main-title">Main page</h1>
  <button onClick={( ) => {
    navigate("/two")
  }}>Navigate</button>
  </>)
}