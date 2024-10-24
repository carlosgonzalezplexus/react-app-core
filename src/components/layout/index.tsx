import { Outlet } from "react-router-dom"

export const Layout= () => {
  return (<div>
    <header>Cabecera layout</header>
    <Outlet />
  </div>)
}