const { BUY_ICECREAM } = require("./iceCreamTypes")

export const buyiceCream  = (number=1) => {
    return{
        type: BUY_ICECREAM,
        payload: number
    }
}