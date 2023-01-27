import styled from "styled-components";
import { Btn } from "../../Button/Btn.styled";

// navigation container
export const BookmarksNavStyled = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem auto;
    width: auto;
`;

// indicator buttons
// first and last element have rounded outter corners
// if the current prop is present, change the style to indicate the current page
export const Indicator = styled(Btn)`
    background-color: var(--medium-light);
    border-radius: 0;
    box-shadow: 0 0.5rem 0.5rem rgb(0 0 0 / 20%);
    color: var(--primary);
    font-size: 1.2rem;
    height: clamp(40px, 2vmin, 60px);
    width: clamp(30px, 2vmin, 40px);

    &:first-child {
        border-top-left-radius: 0.2em;
        border-bottom-left-radius: 0.2em;
    }

    &:last-child {
        border-top-right-radius: 0.2em;
        border-bottom-right-radius: 0.2em;
    }

    &:hover:not(:disabled) {
        background-color: var(--primary-hover);
        color: white;
    }

    ${(props) =>
        props.current
            ? `
        border-bottom: 2px solid white;
        color: white;
        cursor: default;

            &:hover:not(:disabled) {
                background-color: var(--medium-light);
            }
        `
            : ``};
`;
