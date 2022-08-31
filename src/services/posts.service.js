import {axiosService} from './index'
import { urls } from '../config/ulrs'

export const postService = {
    getAll: () => axiosService.get(urls.posts).then(value => value.data)
}