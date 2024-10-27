import axios from "axios";

import { getAuthToken, setAuthToken } from "../../Auth/Auth";

export function register(newUser) {
    return async function (dispatch) {
        const response = await axios.post("http://localhost:3001/api/register", newUser);

        dispatch({
            type: 'REGISTER',
            payload: response.data
        })

    }

}

export function login(formData) {
    // console.log("la data", formData)
    return async function (dispatch) {
        try {
            const responseLogin = await axios.post("http://localhost:3001/api/login", formData)
            const token = responseLogin.data.token;
            console.log(responseLogin)


            setAuthToken(token);

            dispatch({
                type: 'LOGIN',
                payload: responseLogin.data
            })

            return responseLogin;
        } catch (error) {
            console.log('Error al iniciar sesion:', error.message);
            if (error.response) {
                console.log('Error de respuesta:', error.response.data);
            }
            throw error;
        }
    }
}
export const logout = () => {
    return {
        type: 'LOGOUT',
    };
};


//Acciones USER
export function addCarProduct (productId, quantity){
    return async function(dispatch){
        try {
            const token = getAuthToken();
            console.log("Hola soy el token de autorizacion ",token)
            // Configura los encabezados de la solicitud con el token
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            };
            const data = {
                productId: productId,
                quantity: quantity,
              };
            console.log("Encabezados de la solicitud:", config.headers);
            const response = await axios.post("http://localhost:3001/api/car",data,config)
            return dispatch({
                type: 'POST_CART',
                payload:response.data
            })
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
}

export function getAllCartProducts() {
    return async function(dispatch) {
      try {
        const token = getAuthToken();
            console.log("Hola soy el token de autorizacion ",token)
            // Configura los encabezados de la solicitud con el token
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            };
        const responseCart = await axios.get('http://localhost:3001/api/car/all',config);
        console.log("soy el productto del carrito ",responseCart)
        return dispatch({
          type: 'GET_CART_PRODUCT',
          payload: responseCart.data
        });
      } catch (error) {
        console.error(error);
        throw error;
      }
    };
  }
//Acciones para el banner
export function allBanner() {
    return async function (dispatch) {
        try {
            const response = await axios.get("http://localhost:3001/api/banners/all")
            console.log("imagenes del banner ", response)
            return dispatch({
                type: 'GET_BANNERS',
                payload: response.data
            })
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
}
//accion para mostrar los Prdocutos al usuario 
export function getAllProduct() {
    return async function (dispatch) {
        try {
            const response = await axios.get('http://localhost:3001/api/user/allProducts')
            console.log(response)
            // Organizar por orden alfabético
            // console.log(response)
            const sortedProducts = response.data.sort((a, b) => {
                return a.name.localeCompare(b.name);
            });

            return dispatch({
                type: 'GET_USER_PRODUCT',
                payload: sortedProducts,
            });
        } catch (error) {
            console.log(error)
        }

    }
}

export function getNameProducts(name) {
    try {

        return ({
            type: 'GET_NAME',
            payload: name
        })
    } catch (error) {
        console.log(error)
    }

}
export function getAllCategories() {
    return async function (dispatch) {
        try {


            // Configura los encabezados de la solicitud con el token

            const categori = await axios.get("http://localhost:3001/api/user/categorias");
            // console.log("Respuesta de la API:", categori.data);
            return dispatch({
                type: 'ALL_USER_CATEGORIES',
                payload: categori.data
            })

        } catch (error) {
            console.log(error)
        }

    }
}

//Acciones ADMIN

//Acciones para el banner
export function createBanner(newBanner){
    return async function(dispatch){
        try {
            const token = getAuthToken();

            // Configura los encabezados de la solicitud con el token
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            };
            const baner = await axios.post("http://localhost:3001/api/banners",newBanner,config);
            dispatch({
                type:"CREATE_BANNER",
                payload:baner.data
            })
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
}
export function deleteBanner(id){
    return async function(dispatch){
        try {
            const token = getAuthToken();

            // Configura los encabezados de la solicitud con el token
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            };
            const baner = await axios.delete(`http://localhost:3001/api/banners/${id}`,config)
            dispatch({
                type:'DELETE_BANNER',
                payload:baner.data
            })
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
}
export function updateBanner(id,newData){
    return async function(dispatch){
        try {
            const token = getAuthToken();

            // Configura los encabezados de la solicitud con el token
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            };
            const banerUpdate = await axios.put(`http://localhost:3001/api/banners/${id}`,newData,config)
            dispatch({
                type:'UPDATE_BANNER',
                payload:banerUpdate.data
            })
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
}

//Accion para Crear productos 

export function crateProduct(newProduct) {
    return async function (dispatch) {
        try {
            const token = getAuthToken();

            // Configura los encabezados de la solicitud con el token
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            };
            const json = await axios.post("http://localhost:3001/api/create", newProduct, config)
            console.log("Hola soy el producto a guardar ", newProduct)
            dispatch({
                type: 'POST_PRODUCT',
                payload: json.data
            })
            return json
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
}

// Crear las categorias


export function createTipeProduct(newTipe) {
    return async function (dispatch) {
        try {
            const token = getAuthToken();

            // Configura los encabezados de la solicitud con el token
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            };
            const tipeProduct = await axios.post("http://localhost:3001/api/createTipe", newTipe, config);
            console.log("hola soy el tipo de producto", tipeProduct)
            dispatch({
                type: 'TYPE_PRODUCTS',
                payload: tipeProduct.data
            })
            return tipeProduct;
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
}

export function updateCategori(id,data){
    console.log(id)
    return async function(dispatch){
        try {
            const token = getAuthToken();

            // Configura los encabezados de la solicitud con el token
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            };
            const categoriUpdate = await axios.put(`http://localhost:3001/api/update/tipe/${id}`,data,config)
            
            dispatch({
                type:'UPDATE_CATEGORI',
                payload:categoriUpdate.data
            })
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
}
export function deletecategory (id){
    return async function (dispatch){
        try {
            const token = getAuthToken();

            // Configura los encabezados de la solicitud con el token
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            };
            const responseCategori= await axios.delete(`http://localhost:3001/api/delete/tipe/${id}`,config)
            dispatch({
                type:'DELETE_CATEGORI',
                action:responseCategori.data
            })
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

}

// actualizar producto 
export function updateProduct(id,data) {
    return async function (dispatch) {
        try {
            const token = getAuthToken();

            // Configura los encabezados de la solicitud con el token
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            };
            console.log("ID",id)
            const productUpdate = await axios.put(`http://localhost:3001/api/update/${id}`,data, config)
            console.log(productUpdate)
            dispatch({

                type: 'UPDATE_PRODUCT',
                payload: productUpdate.data

            })
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
}
// eliminar producto
export function deleteProduct(id) {
    return async function (dispatch) {
        try {
            console.log("hola soy el producto a eliminar:", id)
            const token = getAuthToken();

            // Configura los encabezados de la solicitud con el token
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            };
            await axios.delete(`http://localhost:3001/api/delete/${id}`, config)

            dispatch({
                type: "DELETE_PRODUCT",
                payload: id
            })
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
}


// ver todos los tipos de productos 
export function allCategories() {
    return async function (dispatch) {
        try {
            const token = getAuthToken();

            // Configura los encabezados de la solicitud con el token
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            };
            const response = await axios.get("http://localhost:3001/api/all/tipes", config);
            dispatch({
                type: 'ALL_CATEGORIES',
                payload: response.data
            })

        } catch (error) {
            console.log(error)
            throw error;
        }
    }
}

export function getDetailProduct (id){
    return async function(dispatch){
        try {
            const detail = await axios.get(`http://localhost:3001/api/product/${id}`)
            dispatch({
                type: 'GET_DETAIL',
                payload:detail.data
            })
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
}
// accion para ver los usuarios registrados

export function allUserAdmin() {
    return async function (dispatch) {
        try {
            const token = getAuthToken();

            // Configura los encabezados de la solicitud con el token
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            };
            const response = await axios.get("http://localhost:3001/api/all/admin/user", config);
            dispatch({
                type: 'ALL_USER',
                payload: response.data
            })

        } catch (error) {
            console.log(error)
            throw error;
        }
    }
}