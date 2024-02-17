import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { buyiceCream } from "./iceCream/iceCreamActions";

function IceCreamContainer(props) {
    const [number, setNumber] = useState(1)
    // const numOfIceCream = useSelector(state => state.icecream.numOfIceCream)
    // const dispatch = useDispatch();
    return (
        <div>
            <h2>
                Number of Ice Cream - {props.numOficeCream}
            </h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)}></input>
            <button onClick={() =>  props.buyiceCream(number)}>Buy iceCream</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        numOficeCream: state.icecream.numOficeCream
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyiceCream: number => dispatch(buyiceCream(number))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)


// import { useDispatch, useSelector } from 'react-redux';
// import { buyiceCream } from "./iceCream/iceCreamActions";
// import iceCreamReducer from "./iceCream/iceCreamReducer";

// function IceCreamContainer(){
//     const numOficeCream = useSelector(state => state.cake.numOficeCream)
//     const dispatch = useDispatch();
// return(
//     <div>
//         <h2>
//             Number of IceCream - {numOficeCream}
//         </h2>
      
//         <button onClick={() => dispatch(buyiceCream(number))}>Buy {number} IceCream</button>
//     </div>
// )
// }

// export default IceCreamContainer