export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = (diff) => {
    return {
        type: INCREMENT,
        payload: {diff}
    };
}

export const decrement = (diff) => {
    return {
        type: DECREMENT,
        payload: {diff}
    };
}