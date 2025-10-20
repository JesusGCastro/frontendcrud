import axios from 'axios'

// Lee la variable de entorno o usa un valor por defecto
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/'

const productsApi = axios.create({
  baseURL: `${API_BASE_URL}producto/`
})

export const getProducts = () => productsApi.get()
export const getProduct = (id) => productsApi.get(`${id}`)
export const createProduct = (product) => productsApi.post('/', product)
export const updateProduct = (id, product) => productsApi.put(`${id}/`, product)
export const deleteProduct = (id) => productsApi.delete(`/${id}/`)
