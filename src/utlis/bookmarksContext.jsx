import { createContext, useEffect, useReducer } from "react";
import { bookmarksReducer, initializer } from "./bookmarksReducer";

/**
 * Create context for bookmarks storage so it's usable by any component anywhere
 */
export const BookmarksContext = createContext();

/**
 * The context provider will give access to managing the bookmarks storage
 */
export const BookmarksProvider = ({ children }) => {
    // declare dispatch using the useReducer hook, "bookmarks" will represent the storage
    const [bookmarks, dispatch] = useReducer(bookmarksReducer, [], initializer);

    useEffect(() => {
        // save to local storage when changes occur
        localStorage.setItem("phntm-bookmarks-data", JSON.stringify(bookmarks));
    }, [bookmarks]);

    // return the context component passing the values to the children
    return (
        <BookmarksContext.Provider
            value={{
                bookmarks,
                dispatch,
            }}
        >
            {children}
        </BookmarksContext.Provider>
    );
};
