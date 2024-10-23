import {  useNavigate } from "react-router"
import './index.scss'
import { useTranslation } from "react-i18next"

export const MainPage = () => {
  const navigate = useNavigate()
  const { t} = useTranslation()

  return (<>
  <h1 className="main-title">{t('common.title')}</h1>
  <button onClick={( ) => {
    navigate("/two")
  }}>Navigate</button>
  </>)
}