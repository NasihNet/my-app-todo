import axios from 'axios'
import { userAuthenticated } from '../app/authenticationSlice';

const axiosInstance = axios.create({
    baseURL: `https://localhost:7055/Authentication`,
})

export const SignUp = async (dispatch, credentials) => {

        try {
            debugger
            const {data} = await axiosInstance.post('/SignUp',credentials);
            dispatch(userAuthenticated(data));
        } catch (error) {
            console.log('Error!');
        }
}
export const SignIn = async (dispatch, credentials) => {
    try {
        // api call
        const { data } = await axiosInstance.post('/signin', credentials);
        
        dispatch(userAuthenticated(data));
    } catch {
        console.log('Error!');
    }
}

