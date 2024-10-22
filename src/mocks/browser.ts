import { setupWorker } from 'msw/browser'
import {http, HttpResponse} from 'msw'
import Sample from './fixtures/sample'
export const worker = setupWorker(
  http.post('/una-call', () => HttpResponse.json(Sample))
)