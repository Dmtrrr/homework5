import {axiosService} from './index'
import {urls} from '../config/ulrs'

export const commentService = {
    getAll: () => axiosService.get(urls.comments).then(value => value.data)
}