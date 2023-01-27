// empty array for initial state
const initialState = [];

/**
 * function that returns the JSONified object from storage
 * or returns the initial array if storage item doesn't exist yet
 */
export const initializer = (initialValue = initialState) =>
    JSON.parse(localStorage.getItem("phntm-bookmarks-data")) || initialValue;

/**
 * Reducer that manages the storage
 */
export const bookmarksReducer = (state, action) => {
    switch (action.type) {
        //creates a new bookmark and adds it to the existing state
        case "ADD_BOOKMARK":
            return [
                ...state,
                {
                    ...action.item,
                    id:
                        state.length > 0
                            ? parseInt(state[state.length - 1].id) + 1
                            : 1,
                },
            ];

        //edits the URL of an existing item
        case "EDIT_BOOKMARK":
            return state.map((item) =>
                item.id === action.item.id
                    ? {
                          ...item,
                          url: action.item.url,
                      }
                    : item
            );

        // returns the state minus the matched id, removing it from the array
        case "DELETE_BOOKMARK":
            return state.filter((item) => item.id !== action.item.id);

        // returns the intial empty array
        case "CLEAR_ALL":
            return initialState;

        // returns the state as is
        default:
            return state;
    }
};

/**
 * Functions to be called for each type of operation
 */

export const addBookmark = (item) => ({
    type: "ADD_BOOKMARK",
    item,
});

export const editBookmark = (item) => ({
    type: "EDIT_BOOKMARK",
    item,
});

export const deleteBookmark = (item) => ({
    type: "DELETE_BOOKMARK",
    item,
});

export const clearBookmarks = () => ({
    type: "CLEAR_ALL",
});
