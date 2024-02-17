const redux = require('redux');
const { thunk } = require('redux-thunk');
const axios  = require('axios')


// console.log('From async.js file')

const initialState={
    loading:false,
    users:[],
    error:''
}

const FETCH_USERS_REQUEST='FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS='FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE='FETCH_USERS_FAILURE'

const fetch_Request = () => {
    //Action
    return{
        type:FETCH_USERS_FAILURE,
        // info:'Fetching failure of users'
    }
}

const fetch_Success = users => {
    //Action
    return{
        type:FETCH_USERS_SUCCESS,
        // info:'Fetching success of users',
        payload: users
    }
}



const fetch_Failure = error => {
    //Action
    return{
        type:FETCH_USERS_FAILURE,
        // info:'Fetching success of users',
        payload: error
    }
}


const reducer = (state=initialState, action)=>{
    switch(action.type){

    
case FETCH_USERS_REQUEST:return{
    ...state,
    loading:true
}
case FETCH_USERS_SUCCESS:return{
    ...state,
    loading:false,
    users:action.payload,
    error:''
}
case FETCH_USERS_FAILURE:return{
    ...state,
    loading:false,
    users: [],
    error:action.payload
}
default:
return state
}
}

const fetchUsers= ()=>{
    return function(dispatch){
        dispatch(fetch_Request())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data.map(user => user.id)
            dispatch(fetch_Success(users))
        })
        .catch(error =>{
            dispatch(fetch_Failure(error.message))
        })
    }
}

const store = redux.createStore(
    reducer,
    redux.applyMiddleware(thunk)
  )
// const store = createStore(rootReducer);
// console.log('Initial state', store.getState());
store.subscribe(() => console.log('updated state', store.getState()));
store.dispatch(fetchUsers());