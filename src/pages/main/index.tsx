import {  useNavigate } from "react-router"

export const MainPage = () => {
  const navigate = useNavigate()

  return (<>
  <h1>Main page</h1>
  <button onClick={( ) => {
    navigate("/two")
  }}>Ir a pagina dos</button>
  </>)
}