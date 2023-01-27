import styled from "styled-components";

// container for the bookmarks items
// media query for medium screens and above - 2 cols
// perspective for the tilting animation
export const BookmarksContainer = styled.ul`
    display: grid;
    gap: 1rem;
    list-style: none;
    margin: 2rem 0;
    perspective: 800px;
    text-align: left;
    width: 100%;

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;
