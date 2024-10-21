import { HttpResponse, http } from 'msw'
import { setupWorker } from 'msw/browser'
 
export const mockServer = setupWorker(
  http.get('/test', () => {
    return HttpResponse.json(['pepe'])
  })
)