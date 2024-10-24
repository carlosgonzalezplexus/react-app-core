import React from 'react';
import { useCallback, useState } from "react";
import { login } from '../../api/generated/credentials/default';
import { useTranslation } from 'react-i18next';

export const PageTwo = () => {
  const {t} = useTranslation()
  const [text, setT] = useState<string>('')
  const [lista, setlista] = useState<Array<string>>([])
  const sampleApiCall = useCallback(() => {

    login({Password: 'any', UserName: text})
      .then((r) => {
        if(r) {
          setlista(r.roles)
        }
      })
      .catch((e) => {
        console.warn(e)
      })
  }, [text])

  return (<>
    <h1>{t('two.title')}</h1>

    <form onSubmit={(e) => {
      e.preventDefault()
      sampleApiCall()
    }}   >
      <input placeholder={t('two.input')} type="text" onChange={(v) => {

        setT(v.target.value)
      }} />
      <button type="submit">{t('two.send')}</button>


    </form>

    <div>{lista.map((a) => (<div>{a}</div>))}</div>

  </>)
}