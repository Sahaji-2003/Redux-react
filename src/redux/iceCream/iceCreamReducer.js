import { BUY_ICECREAM } from "./iceCreamTypes"

const intialstate  ={
        "numOficeCream":10
    }
    
const iceCreamReducer = (state=intialstate , action)=>{
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,
            numOficeCream:state.numOficeCream - action.payload
        }   
            default:return state
}
}

export default iceCreamReducer