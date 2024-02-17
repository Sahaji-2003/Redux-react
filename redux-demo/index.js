// import { applyMiddleware, createStore } from 'redux';// 
// import logger from 'redux-logger'

const redux = require('redux')
const createStore = redux.legacy_createStore
const applyMiddleware = redux.applyMiddleware;
const reduxLogger = require('redux-logger');

const logger = reduxLogger.createLogger();

console.log('From index.js')

const BUY_CAKE =  "BUY_CAKE";
const BUY_ICECREAM= "BUY_ICECREAM";

//Action creator
function buy_Cake() {
    //Action
    return{
        type:BUY_CAKE,
        info:'First Redux action'
    }
}

function buy_IceCream() {
    //Action
    return{
        type:BUY_ICECREAM,
        info:'Second Redux action'
    }
}


const initialCakeState = {
    numOfCakes : 10,
    // numOfIceCream : 15
}

const initialIcecreamState = {
    numOfIceCream : 15
}

//create reducer
const cakeReducer = (state=initialCakeState, action )=>{
    switch(action.type){
        case BUY_CAKE: return{
        ...state,
        numOfCakes:state.numOfCakes -1
    }
    default: return state
}
}


const icecreamReducer = (state=initialIcecreamState, action )=>{
    switch(action.type){
        case BUY_ICECREAM: return{
        ...state,
        numOfIceCream:state.numOfIceCream -1
    }
    default: return state
}
}

const rootReducer=redux.combineReducers({
    cake:cakeReducer,
    icecream:icecreamReducer
})

//subscribe store and dispatch action
const store = createStore(
    rootReducer,
    applyMiddleware(logger)
  )
// const store = createStore(rootReducer);
console.log('Initial state', store.getState());
store.subscribe(() => console.log('updated state', store.getState()));
store.dispatch(buy_IceCream());
store.dispatch(buy_Cake());
store.dispatch(buy_Cake());