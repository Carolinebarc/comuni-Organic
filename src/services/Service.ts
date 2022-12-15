import axios from 'axios';
import { toast } from 'react-toastify';
import Categoria from '../models/Categoria';
import Produto from '../models/Produto';
import UsuarioLogin from '../models/UsuarioLogin';

export const api = axios.create({
	 //baseURL: 'http://localhost:4000',
	baseURL: 'https://db-organica-tgxd.onrender.com'
});


export const cadastroUsuario = async (url: string, dados: { nome: string, usuario: string, senha: string }, setDado: React.Dispatch<React.SetStateAction<UsuarioLogin>>) => {
	try{
		const resposta = await api.post(url, dados)
		setDado(resposta.data)
	}catch(error){
		console.log(error)
	}
}

export const login = async (url: string, dados: { usuario: string, senha: string }, setDado: React.Dispatch<string>) => {
		const resposta = await api.post(url, dados)
		setDado(resposta.data.token)

}

export const busca = async (url: string, setDado: React.Dispatch<React.SetStateAction<Categoria[]>> | React.Dispatch<React.SetStateAction<Produto[]>>, header: { headers: { Authorization: string } }) => {
	try {
		if (!header.headers.Authorization) {
			console.log('Usuário não autorizado, Error 401 - Unauthorized' )
		} else {
			const resposta = await api.get(url, header)
			setDado(resposta.data)
		}
	} catch (error) {
		console.log(error);
	}
}

export const buscaId = async (url: string, setDado: React.Dispatch<React.SetStateAction<Produto>> | React.Dispatch<React.SetStateAction<Categoria>> |
	React.Dispatch<React.SetStateAction<Produto | undefined>> | React.Dispatch<React.SetStateAction<Categoria | undefined>>, header: { headers: { Authorization: string } }) => {
	try {
		if (!header.headers.Authorization) {
			console.log('Usuário não autorizado, Error 401 - Unauthorized' )
		} else {
		const resposta = await api.get(url, header)
		setDado(resposta.data)
		}
	} catch (error) {
		console.log(error);
	}
}

export const deleteId = async (url: string, header: { headers: { Authorization: string } }) => {
	try {
		if (!header.headers.Authorization) {
			console.log('Usuário não autorizado, Error 401 - Unauthorized' )
		} else {
		const resposta = await api.delete(url, header)
		}
	} catch (error) {
		console.log(error)
	}
}

export const post = async (url: string, dados: Produto | Categoria, setDado: React.Dispatch<React.SetStateAction<Produto>> | React.Dispatch<React.SetStateAction<Categoria>>, header: { headers: { Authorization: string } }) => {
	try {
		if (!header.headers.Authorization) {
			console.log('Usuário não autorizado, Error 401 - Unauthorized' )
		} else {
			const resposta = await api.post(url, dados, header)
			setDado(resposta.data)
		}
	} catch (error) {
		console.log(error)
	}
}

export const put = async (url: string, dados: Produto | Categoria, setDado: React.Dispatch<React.SetStateAction<Produto>> | React.Dispatch<React.SetStateAction<Categoria>>, header: { headers: { Authorization: string } }) => {
	try {
		if (!header.headers.Authorization) {
			console.log('Usuário não autorizado, Error 401 - Unauthorized' )
		} else {
			const resposta = await api.post(url, dados, header)
			setDado(resposta.data)
		}
	} catch (error) {
		console.log(error)
	}
}