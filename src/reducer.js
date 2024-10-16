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
        case "REMOVE_ITEM":
            // return {
            //     ...state,
            //     basket: state.basket.filter((item) => item.id !== action.id)}
            //this code is actully deleting the multiple itmes placed in our cart with same id
            //like the 2 toys to buy remove same time when press remove for one ,to resolve issue the findIndex
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1);

            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket!`
                )
            }
            return {
                ...state,
                basket: newBasket
            }
        default:
            return state;
    }
}

export default reducer;