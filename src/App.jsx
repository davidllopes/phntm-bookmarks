import { useContext } from "react";
import "./App.css";
import { BookmarksList } from "./components/BookmarksList/BookmarksList";
import { Form } from "./components/Form/Form";
import { BookmarksContext } from "./utlis/bookmarksContext";
import { addBookmark } from "./utlis/bookmarksReducer";

const App = () => {
    // get reducer state/storage and dispatch from context
    const { bookmarks, dispatch } = useContext(BookmarksContext);

    // function that calls the dispatch and saves an item with the new URL
    const addNewBookmark = (item) => {
        dispatch(addBookmark(item));
    };

    return (
        <div className="App">
            <div className="container">
                <h2 className="heading">
                    What would you like to bookmark today?
                </h2>
                <Form handleSave={addNewBookmark} />
                {bookmarks.length > 0 && <BookmarksList />}
            </div>
        </div>
    );
};

export default App;
