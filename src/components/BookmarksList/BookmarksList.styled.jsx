import styled from "styled-components";

export const BookmarksContainer = styled.ul`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    list-style: none;
    margin: 2rem 0;
    perspective: 800px;
    text-align: left;
    width: 100%;
`;
