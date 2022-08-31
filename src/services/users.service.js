import {axiosService} from './index'
import { urls } from '../config/ulrs'

export const userService = {
    getAll: () => axiosService.get(urls.users).then(value => value.data)
}