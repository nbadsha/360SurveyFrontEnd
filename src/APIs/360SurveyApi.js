import axios from 'axios'

export default axios.create({
    baseURL: "http://192.168.2.107:5000/api/user/"
})