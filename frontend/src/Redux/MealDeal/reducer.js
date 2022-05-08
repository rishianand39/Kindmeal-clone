import { MEALS_DEAL} from "./action"
import { FILTER_MEALS_DEAL} from "./action"

export const mealsdealreducer = (store, { type, payload }) => {
    switch (type) {
        case MEALS_DEAL:
            return { ...store, mealsdealdata: payload };
        
        case FILTER_MEALS_DEAL:
            return { ...store, mealsdealdata : store.mealsdealdata.filter((data) => data.category.includes(payload)   )  };
        
            default:
            return store;
    }
};