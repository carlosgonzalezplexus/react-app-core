/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * Swagger Sample
 * OpenAPI spec version: 1.0.0
 */
import type {
  GetRolesResponse,
  GetRolesnRequest
} from './users.schemas'
import { customInstance } from '../../../services/config/axios.instance';



type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


  /**
 * @summary Get user role
 */
export const userGetRoles = (
    getRolesnRequest: GetRolesnRequest,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<GetRolesResponse>(
      {url: `/Users/GetRoles`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: getRolesnRequest
    },
      options);
    }
  