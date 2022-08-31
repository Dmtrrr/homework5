import axios from 'axios';

import baseURL from '../config/ulrs'

const axiosService = axios.create({baseURL})

export {axiosService}