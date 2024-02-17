import {combineReducers} from 'redux'
import customerReducer from './customers/customerReducer'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream : iceCreamReducer

    // customer:customerReducer
})


export default rootReducer