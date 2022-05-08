
//Action type
export const MEALS_DEAL = "MEALS_DEAL";
export const FILTER_MEALS_DEAL = "FILTER_MEALS_DEAL";


//action
export const mealsdeal = (data) => ({
    type: MEALS_DEAL,
    payload : data,
})

export const filtermealsdeal = (data) => ({
    type: FILTER_MEALS_DEAL,
    payload : data,
})