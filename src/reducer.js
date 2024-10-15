export const initialState = {
    basket: []
}

//selector an advance way to doo so
// export const getBasketTotal = (basket) => {
//     return basket?.reduce((amount, item) => item.price + amount, 0);
// }
export const getBasketTotal = (basket) => {
    let total = 0;

    // Check if basket is not empty
    if (basket && basket.length > 0) {
        // Loop through each item in the basket
        for (let i = 0; i < basket.length; i++) {
            total += basket[i].price; // Add each item's price to the total
        }
    }

    return total; // Return the total amount
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
        default:
            return state;
    }
}

export default reducer;