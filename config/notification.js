
const api = null;
/*
const api = axios.create({
    baseURL: 'https://product-catalog-next.vercel.app/api',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
})
*/

const notification = {
    message: 'nada consta',
    options: {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined    
    }
}

export { api, notification }
