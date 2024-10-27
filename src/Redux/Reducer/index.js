import Cookies from "js-cookie";
const initialState = {
    session: null,
    user: [],
    products: [],
    allProducts: [],
    tipeProducts: [],
    filteredProducts: [],
    banners: [],
    cart:[],
    detail: [],

    rol: "",
}
function rootreducer(state = initialState, action) {
    switch (action.type) {
        case 'REGISTER':
            return {
                ...state,
                user: action.payload
            }
        case 'LOGIN':
            return {
                ...state,
                session: action.payload,
                rol: action.payload.user.role,
            }
        case 'LOGOUT':
            Cookies.remove('session')
            return {
                ...state,
                session: null,
                user: {},
                rol: ""
            };
        // reducer User

        case 'GET_USER_PRODUCT':
            return {
                ...state,
                allProducts: action.payload,

            }
        case 'POST_CART':
            return{
                ...state,
                cart:action.payload
            }
        case 'GET_CART_PRODUCT':
            return{
                ...state,
                cart:action.payload
            }
        case 'GET_BANNERS':
            return {
                ...state,
                banners: action.payload,

            }
            case 'GET_NAME':
                const searchTerm = action.payload || ""; // Si action.payload es undefined, asigna una cadena vacía
                const filteredProduct = searchTerm === "" ? state.allProducts :
                    state.allProducts.filter((productNmae) => productNmae.name.toLowerCase().includes(searchTerm.toLowerCase()));
                return {
                    ...state,
                    filteredProducts: filteredProduct
                }
            

        case 'ALL_USER_CATEGORIES':
            return {
                ...state,
                tipeProducts: action.payload
            }

        //Reducer para admin
        case 'CREATE_BANNER':
            return {
                ...state,
                banners: action.payload
            }
        case 'DELETE_BANNER':
            const filterBanner = state.banners.filter(
                (baner) => baner.id !== action.payload
            );
            return {
                ...state,
                banners: filterBanner
            }
        case 'UPDATE_BANNER':
            const banersUpdate = action.payload;
            const updateBaner = state.banners.map(ban => {
                if (ban.id === banersUpdate.id) {
                    return banersUpdate;
                }
                return ban;
            })
            return {
                ...state,
                banners: updateBaner
            }

        //Product admin
        case 'POST_PRODUCT':
            return {
                ...state,
                allProducts: action.payload
            }
        case 'UPDATE_PRODUCT':
            const productUpdate = action.payload;

            // Actualiza el tipo de PQRS en la lista
            const updatedProducts = state.allProducts.map(product => {
                if (product.id === productUpdate.id) {
                    return productUpdate;
                }
                return product;
            });
            // console.log("Hola spy el producto ",updatedProducts)
            return {
                ...state,
                allProducts: updatedProducts
            }
        case 'DELETE_PRODUCT':
            const filterProducts = state.products.filter(
                (product) => product.id !== action.payload
            );

            return {
                ...state,
                products: filterProducts
            }
        case 'TYPE_PRODUCTS':

            return {
                ...state,
                tipeProducts: [...state.tipeProducts, action.payload]
            }
        case 'ALL_CATEGORIES':
            return {
                ...state,
                tipeProducts: action.payload
            }
        case 'DELETE_CATEGORI':
            const filterCategori = state.tipeProducts.filter(
                (categori) => categori.id !== action.payload
            );

            return {
                ...state,
                tipeProducts: filterCategori
            }
        case 'UPDATE_CATEGORI':
            const categoriesUpdate = action.payload;
            // console.log("Holass shshs", categoriesUpdate)
            const updateCategori = state.tipeProducts.map(cat => {
                if (cat.id === categoriesUpdate.id) {
                    return categoriesUpdate;
                }
                return cat;
            })
            return {
                ...state,
                tipeProducts: updateCategori
            }

        case 'ALL_USER':
            return {
                ...state,
                user: action.payload
            }


        case 'GET_DETAIL':
            return {
                ...state,
                detail: action.payload
            }

        default:
            return state;
    }
}

export default rootreducer;