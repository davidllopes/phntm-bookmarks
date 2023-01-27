import styled from "styled-components";
import { Btn } from "../Button/Btn.styled";

// form element
export const FormStyled = styled.form`
    display: flex;
    gap: 1em;
    margin: 1em 0;
    width: 100%;
`;

// input text element for user's link
// if modifier prop is "edit-mode" remove the background to indicate the user is just editting the value
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

// Submit button, extends base button style
export const SubmitBtn = styled(Btn)`
    max-width: 20%;
    min-width: 3em;
    padding: 0.4em 1em;
    width: 100%;
`;

// status message base styling
export const StatusMsg = styled.div`
    border: 2px solid white;
    border-radius: 0.3em;
    color: white;
    font-size: 1.25rem;
    padding: 0.5em;
    text-align: center;
`;

// Success status message styling - extends StatusMsg
export const SuccessMsg = styled(StatusMsg)`
    background-color: rgb(4 120 87);
    border-color: rgb(5 150 105);
`;

// Error status message styling - extends StatusMsg
export const ErrorMsg = styled(StatusMsg)`
    background-color: rgb(71 85 105);
    border-color: rgb(100 116 139);
`;
