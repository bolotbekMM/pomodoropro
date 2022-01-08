import { BG_RED, BG_GREEN, BG_BLUE } from "./bg.actionTypes";

export const BG_KEY ='bgStore'


let initialState= {
    color: 'rgb(217, 85, 80)'
}
let bgReducer=(state=initialState, action)=>{
    switch(action.type){
        case  BG_RED:
            return {
                color: 'rgb(217, 85, 80)'
            } 
        case  BG_GREEN:
            return {
                color: 'rgb(76, 145, 149)'
            }
        case  BG_BLUE:
            return {
                    color: 'rgb(69, 124, 163)'
                }
            default: return state
    }
}

export {bgReducer}