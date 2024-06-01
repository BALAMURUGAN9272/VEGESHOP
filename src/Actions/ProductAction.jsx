import axios from 'axios'
import { productFail, productRequest, productsFail, productsRequest, productsSuccess, productsuccess } from '../Slice/ProductSlice'


export const getProduct =id=> async(dispatch)=>{


    try {

        dispatch(productsRequest())  
        const {data} = await  axios.get(`/api/v1/woods/${id}`)
        dispatch(productsSuccess(data))
    } catch (error) {
        // handle error
        dispatch(productsFail(error))
    }
     
}