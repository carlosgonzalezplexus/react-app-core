import React from 'react';
import { useCallback, useState } from "react";

export const PageTwo = () => {
  const [t, setT] = useState<string>()
  const sampleApiCall = useCallback(() => {
    fetch('/una-call', {
      method: 'POST',

      body: JSON.stringify({message: t})
    })
      .then((r) => {
        return r
      })
      .catch(() => false)
  }, [t])

  return (<>
    <h1>Segunda pagina</h1>

    <form onSubmit={(e) => {
      e.preventDefault()
      sampleApiCall()
    }}   >
      <input type="text" onChange={(v) => {

        setT(v.target.value)
      }} />
      <button type="submit">Enviar</button>


    </form>

  </>)
}