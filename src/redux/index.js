class Store {
    constructor(reducer, initialState = {}) {
        this.reducer = reducer;
        this.state = initialState;
    }

    getState() {
        return this.state;
    }

    dispatch(action) {
        this.state = this.reducer(this.state, action);
    };
}

export const createStore = (reducer, initialState) => {
    return new Store(reducer, initialState);
}
