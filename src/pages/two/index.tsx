import React from 'react';
import { useCallback, useState } from "react";

export const PageTwo = () => {
  const [t,setT] = useState<string>()
  const e = useCallback(() => {
    fetch('/test', {
      method: 'POST',
      body: JSON.stringify({TEST: t})
    })
    .then((r) => {
     console.log('pruebas', r)
    })
    .catch((e) => {
      console.warn('error', e)
    })



  }, [])

  return (<>
  <h1>Segunda pagina</h1>
  <form  onSubmit={(() => {
    e()
  })}>
    <input type="text" onChange={(v) => {
      setT(v.target.value)
    }} />
      <button type="submit">Enviar</button>

  </form>
  </>)
}