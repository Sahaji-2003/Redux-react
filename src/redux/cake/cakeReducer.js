import { BUY_CAKE } from "./cakeTypes"

const intialstate  ={
        "numOfCakes":10
    }
    
const cakeReducer = (state=intialstate , action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            // numOfCakes:state.numOfCakes - action.payload
            numOfCakes:state.numOfCakes - action.payload
            
        }   
            default:return state
}
}

export default cakeReducer