import styled from "styled-components";
import { Btn } from "../Button/Btn.styled";

export const ClearAllBtnStyled = styled(Btn)`
    background-color: var(--medium-light);
    box-shadow: 0 0.5rem 0.5rem rgb(0 0 0 / 20%);
    font-size: 1rem;
    font-weight: 600;
    padding: 0.5rem 1rem;

    &:hover:not(:disabled) {
        background-color: var(--negative);
    }
`;
