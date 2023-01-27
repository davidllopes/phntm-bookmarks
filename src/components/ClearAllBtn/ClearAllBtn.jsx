import { useContext } from "react";
import { BookmarksContext } from "../../utlis/bookmarksContext";
import { clearBookmarks } from "../../utlis/bookmarksReducer";
import { ClearAllBtnStyled } from "./ClearAllBtn.styled";

export const ClearAllBtn = () => {
    const { dispatch } = useContext(BookmarksContext);

    // calls the dispatch method clearBookmarks to empty the stored array
    const clearAll = () => {
        dispatch(clearBookmarks());
    };

    return (
        <ClearAllBtnStyled onClick={clearAll}>
            Clear All Bookmarks
        </ClearAllBtnStyled>
    );
};
