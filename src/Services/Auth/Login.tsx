import axios from 'axios';

const API_URL="http://127.0.0.1:8000/api";

export const iniciarSession = async (data : object) => {
    try {
        return await axios.post(API_URL+'/auth/login',data);
    } catch (error) {
        console.log('No se pudo procesar',error);
    }
}

export const finalizar = async (token:string) => {
    
    try {
        const headers = {
            headers: { "Authorization": "Bearer "+token },
        };
        return await axios.get(API_URL+'/logout',headers);
    } catch (error) {
        console.log('No se pudo procesar',error);
    }

    
}