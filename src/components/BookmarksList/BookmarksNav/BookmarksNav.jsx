import { BookmarksNavStyled, Indicator } from "./BookmarksNav.styled";

/**
 * Navigation component to control which items to show
 * Generates indicator buttons
 */
export const BookmarksNav = ({
    startItem,
    setStartItem,
    limit,
    totalItems,
}) => {
    const totalPages = Math.ceil(totalItems / limit);
    const currentPage = Math.ceil(startItem / limit);

    /** generates the indicator number buttons and push them into an array
     *  on click sets the first item on the page (n*20)
     */
    const indicators = [];
    for (let i = 0; i < totalPages; i++) {
        indicators.push(
            <Indicator
                key={i}
                onClick={() => setStartItem(i * limit)}
                current={currentPage === i}
                disabled={totalPages === 1 ? "disabled" : false}
            >
                {i + 1}
            </Indicator>
        );
    }

    // previous and next nav buttons use fontawesome icons
    // buttons are disabled when on the first or last page respectively
    return (
        <BookmarksNavStyled>
            <Indicator
                onClick={() => setStartItem(startItem - limit)}
                disabled={startItem - limit < 0 ? "disabled" : false}
            >
                <i className="fa-solid fa-angle-left"></i>
            </Indicator>
            {indicators}
            <Indicator
                onClick={() => setStartItem(startItem + limit)}
                disabled={
                    startItem + limit + 1 > totalItems ? "disabled" : false
                }
            >
                <i className="fa-solid fa-angle-right"></i>
            </Indicator>
        </BookmarksNavStyled>
    );
};
