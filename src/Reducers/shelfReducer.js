const initialState = [
    'Bananas',
    'Cheetos',
    'Chocolate Milk',
    'La Croix',
    'Oreos',
    'Popsicles'
]

export default (state = initialState, action) => {
    switch (action.type) {
        case 'STOCK_ITEM':
            return [...state, action.item]
        default: 
            return state
    }
}