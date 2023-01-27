import styled from "styled-components";
import { Btn } from "../../Button/Btn.styled";

// bookmark item
export const BookmarkItemStyled = styled.li`
    animation: pop-up 0.5s ease;
    background-color: var(--medium);
    border-radius: 0.8rem;
    box-shadow: 0 0.5em 2em rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    font-size: 1rem;
    gap: 1em;
    padding: 0.8rem;
    transition: all 0.3s ease-in-out;
    word-break: break-all;

    &:hover {
        background-color: var(--medium-light);
        transform: scale(1.01);
    }
`;

// base style for icon buttons (square)
export const BtnIcon = styled(Btn)`
    padding: 0;
    height: clamp(40px, 4vmin, 50px);
    width: clamp(40px, 6vmin, 50px);
`;

// delete item button - hover red bg
export const DeleteItemBtn = styled(BtnIcon)`
    background-color: var(--light);

    &:hover:not(:disabled) {
        background-color: var(--negative);
    }
`;

// edit item button
export const EditItemBtn = styled(BtnIcon)`
    margin-left: 0.5em;
`;

// the link itself
export const BmLink = styled.a`
    color: white;
    width: 100%;
`;
