import { useContext, useState } from "react";
import { BookmarksContext } from "../../../utlis/bookmarksContext";
import { deleteBookmark, editBookmark } from "../../../utlis/bookmarksReducer";
import { Form } from "../../Form/Form";
import {
    BmLink,
    BookmarkItemStyled,
    DeleteItemBtn,
    EditItemBtn,
} from "./BookmarkItem.styled";

/**
 * Bookmark item component - includes buttons to edit and delete
 * edit button sets the edit state to true and displays the form
 * delete button calls dispatch to remove bookmark
 */
export const BookmarkItem = ({ item }) => {
    const [isEditting, setIsEditting] = useState(false);
    const { dispatch } = useContext(BookmarksContext);

    // calls the dispatch method that removes a bookmark with a specific ID
    const remove = () => {
        dispatch(deleteBookmark({ id: item.id }));
    };

    // edits the url passed in the form component
    const edit = (saved) => {
        dispatch(editBookmark({ ...item, url: saved.url }));
        setIsEditting(false);
    };

    return (
        <BookmarkItemStyled>
            {isEditting ? (
                <Form url={item.url} handleSave={edit} modifier="edit-mode" />
            ) : (
                <>
                    <BmLink href={item.url} target="_blank">
                        {
                            //display url without http and trailing slash
                            item.url
                                .replace(/(^\w+:|^)\/\//, "")
                                .replace(/\/$/, "")
                        }
                    </BmLink>
                    <EditItemBtn onClick={() => setIsEditting(true)}>
                        <i className="fa-solid fa-pencil"></i>
                    </EditItemBtn>
                    <DeleteItemBtn onClick={remove}>
                        <i className="fa-solid fa-trash-can"></i>
                    </DeleteItemBtn>
                </>
            )}
        </BookmarkItemStyled>
    );
};
