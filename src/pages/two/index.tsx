import React from 'react';
import { useCallback, useState } from "react";

export const PageTwo = () => {
  const [t, setT] = useState<string>()
  const [lista, setlista] = useState<Array<string>>([])
  const sampleApiCall = useCallback(() => {
    fetch('/una-call', {
      method: 'POST',
      body: JSON.stringify({message: t})
    })
    .then(r => r.json())
      .then((r: any) => {
        if(r) {
          setlista(r)
        }
      })
      .catch(() => {
        throw false
      })
  }, [t])

  return (<>
    <h1>Second page</h1>

    <form onSubmit={(e) => {
      e.preventDefault()
      sampleApiCall()
    }}   >
      <input type="text" onChange={(v) => {

        setT(v.target.value)
      }} />
      <button type="submit">Send</button>


    </form>

    <div>{lista.map((a) => (<div>{a}</div>))}</div>

  </>)
}