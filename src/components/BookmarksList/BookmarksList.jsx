import { useContext, useState } from "react";
import { BookmarksContext } from "../../utlis/bookmarksContext";
import { ClearAllBtn } from "../ClearAllBtn/ClearAllBtn";
import { BookmarkItem } from "./BookmarkItem/BookmarkItem";
import { BookmarksContainer } from "./BookmarksList.styled";
import { BookmarksNav } from "./BookmarksNav/BookmarksNav";

// items per page
const LIMIT = 20;

/**
 * Component for displaying the bookmarks
 * - gets a 20 item slice of the array
 * - returns in a sorted order from newest to oldest
 */
export const BookmarksList = () => {
    const { bookmarks } = useContext(BookmarksContext);
    const [startItem, setStartItem] = useState(0);
    const totalItems = bookmarks.length;

    /** reverse items so list starts with the newest
     * (although I could've just used .reverse() on the entire array,
     * doing so could have an impact on performance when
     * reversing a longer array)
     */
    const start = totalItems - startItem - LIMIT;
    const slice = bookmarks.slice(start < 0 ? 0 : start, LIMIT + start);
    const reversedItems = [...slice].reverse();

    return (
        <div>
            <BookmarksContainer>
                {reversedItems.map((item) => (
                    <BookmarkItem item={item} key={item.id} />
                ))}
            </BookmarksContainer>
            <ClearAllBtn />
            <BookmarksNav
                startItem={startItem}
                setStartItem={setStartItem}
                limit={LIMIT}
                totalItems={totalItems}
            ></BookmarksNav>
        </div>
    );
};
