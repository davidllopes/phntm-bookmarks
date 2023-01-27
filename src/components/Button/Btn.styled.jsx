import styled from "styled-components";

// base styling for buttons
export const Btn = styled.button`
    background-color: var(--primary);
    border-radius: 0.5em;
    color: white;
    font: inherit;
    font-weight: bold;

    &:hover:not(:disabled) {
        background-color: var(--primary-hover);
    }

    &:disabled {
        background-color: var(--medium);
        color: var(--medium-light);
        cursor: default;
    }
`;
