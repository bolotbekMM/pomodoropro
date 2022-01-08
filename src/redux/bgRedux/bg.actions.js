import { BG_RED, BG_GREEN, BG_BLUE } from "./bg.actionTypes";

let bgRed = ()=>{
    return {
        type:BG_RED,
        payload: 'change background'
    }
}

let bgGreen = ()=>{
    return {
        type:BG_GREEN,
        payload: 'change background'
    }
}

let bgBlue = ()=>{
    return {
        type:BG_BLUE,
        payload: 'change background'
    }
}

export {bgRed, bgGreen, bgBlue}