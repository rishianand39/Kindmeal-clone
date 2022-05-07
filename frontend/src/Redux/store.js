import { legacy_createStore as createstore } from "redux";
import { mealsdealreducer } from "./MealDeal/reducer";


export const store = createstore(mealsdealreducer, { mealsdealdata: [] });

store.subscribe(() => {
    console.log("Subscribe", store.getState());
});