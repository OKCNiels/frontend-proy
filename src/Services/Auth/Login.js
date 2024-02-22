import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL="http://127.0.0.1:8000/api";

export const iniciarSession = async (data) => {
    try {
        return await axios.post(API_URL+'/auth/login',data);
    } catch (error) {
        console.log('No se pudo procesar',error.message);
    }
}

export const finalizar = async (token) => {
    
    const headers = {
        headers: { "Authorization": "Bearer "+token },
    };
    return await axios.get(API_URL+'/logout',headers).then(response => {
        localStorage.removeItem('usuario');
        localStorage.removeItem('token');
    }).catch(error => {
        console.log(error);
    });
}