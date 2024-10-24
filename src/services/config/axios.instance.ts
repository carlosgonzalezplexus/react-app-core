import axios, { AxiosRequestConfig } from 'axios';


import { setupInterceptors } from '../../interceptors/axios.interceptor';

const URL = `http://base_url`;

export const AXIOS_INSTANCE = axios.create({ baseURL: URL });

export const customInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> => {
  const source = axios.CancelToken.source();
  const promise = AXIOS_INSTANCE({
    ...config,
    ...options,
    cancelToken: source.token,
  }).then(({ data }) => data);
  return promise;
};

setupInterceptors(AXIOS_INSTANCE);

/**
 * SI SE DESEA AÑADIR OTRA URL DE ENDPOINT
 * SERA NECESARIO CREAR UNA NUEVA INSTANCIA Y DECLARARLO EN EL OVAL.CONFIG.JS
 * output: {
 *       mode: 'single',
 *       target: './src/test/pokemon/pokemon.service.ts',
 *       schemas: './src/test/pokemon/model',
 *       mock: true,
 *       override: {
 *         mutator: {
 *           path: './api/mutator/custom-instance.ts',
 *           name: 'NEWcustomInstance',
 *         },
 *       },
 *     },
 *
 */
