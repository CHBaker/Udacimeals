export const ADD_RECIPE = 'ADD_RECIPE';
export const REMOVE_FROM_CALANDAR = 'REMOVE_FROM_CALANDAR';

export function addRecipe ({ day, recipe, meal }) {
    return {
        type: ADD_RECIPE,
        recipe,
        day,
        meal
    }
}

export function removeFromCalandar ({ day, meal }) {
    return {
        type: REMOVE_FROM_CALANDAR,
        day,
        meal
    }
}