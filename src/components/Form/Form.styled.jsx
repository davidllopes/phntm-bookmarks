import styled from "styled-components";

export const FormStyled = styled.form`
    display: flex;
    gap: 1em;
    margin: 1em 0;
    width: 100%;
`;

export const InputTxt = styled.input`
    border-radius: 0.5em;
    border: 1px solid #fefefe;
    font: inherit;
    max-width: 80%;
    padding: 0.5em;
    box-shadow: 0 0.5em 2em rgba(0, 0, 0, 0.2);
    width: 100%;
    ${(props) =>
        props.modifier === "edit-mode"
            ? `
    background-color: transparent;
    color: white;
    `
            : ""};
`;

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

export const SubmitBtn = styled(Btn)`
    max-width: 20%;
    min-width: 3em;
    padding: 0.4em 1em;
    width: 100%;
`;

export const StatusMsg = styled.div`
    border: 2px solid white;
    border-radius: 0.3em;
    color: white;
    font-size: 1.25rem;
    padding: 0.5em;
    text-align: center;
`;

export const SuccessMsg = styled(StatusMsg)`
    background-color: rgb(4 120 87);
    border-color: rgb(5 150 105);
`;

export const ErrorMsg = styled(StatusMsg)`
    background-color: rgb(71 85 105);
    border-color: rgb(100 116 139);
`;
