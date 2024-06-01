import axios from 'axios'
import { productsFail, productsRequest, productsSuccess } from '../Slice/ProductSlice'

export const getproducts = async (dispatch)=>{

    try {

        dispatch(productsRequest())
        const {data} = await axios.get('/api/v1/woods')
        dispatch(productsSuccess(data))
        
    } catch (error) {
        dispatch(productsFail(error.response.data.message))
    }
   

    
}