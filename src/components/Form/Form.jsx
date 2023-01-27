import { useContext, useEffect, useRef, useState } from "react";
import { BookmarksContext } from "../../utlis/bookmarksContext";
import { bookmarkExists, makeURL, saveURL } from "../../utlis/urlHandle";
import {
    ErrorMsg,
    FormStyled,
    InputTxt,
    SubmitBtn,
    SuccessMsg,
} from "./Form.styled";

/**
 * Form component which can be used at the top of the page,
 * as well as to edit an existing bookmark
 * handleSave is the callback used for handling the resulting URL
 * modifier tells the styled components how to style the elements
 */
export const Form = ({ handleSave, url, modifier }) => {
    const { bookmarks } = useContext(BookmarksContext);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const inputTxt = useRef(null);

    // sets the error or success state messages and ends the loading state
    const displayStatus = (type, msg) => {
        if (type === "success") {
            setError(null);
            setSuccess(msg);
        } else {
            setError(msg);
            setSuccess(null);
        }
        setIsLoading(false);
    };

    /** controls the output of the form and checks if it's a valid URL
     * if not in editting mode, check if bookmark exists
     * use callback function to save bookmark if valid
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const parsedURL = makeURL(inputTxt.current.value);
        if (parsedURL) {
            if (
                bookmarkExists(parsedURL, bookmarks) &&
                modifier !== "edit-mode"
            ) {
                displayStatus(
                    "error",
                    "You've already bookmarked this before."
                );
            } else {
                saveURL(parsedURL, handleSave, displayStatus);
            }
        } else {
            displayStatus(
                "error",
                "That URL doesn't seem to be valid. Try something else."
            );
        }
    };

    /**
     * create timeout to close the status message after 2 seconds,
     * useEffect will run if the success or error states change
     */
    useEffect(() => {
        if (success || error) {
            setTimeout(() => {
                setSuccess(null);
                setError(null);
            }, 2000);
        }
    }, [error, success]);

    return (
        <>
            <FormStyled onSubmit={handleSubmit} modifier={modifier}>
                <InputTxt
                    type="text"
                    placeholder="https://..."
                    ref={inputTxt}
                    id="new-url"
                    name="url"
                    defaultValue={url ? url : ""}
                    modifier={modifier}
                    disabled={isLoading ? "disabled" : ""}
                />
                <SubmitBtn type="submit" disabled={isLoading ? "disabled" : ""}>
                    Save
                </SubmitBtn>
            </FormStyled>
            {error ? (
                <ErrorMsg>
                    <code>{error}</code>
                </ErrorMsg>
            ) : success ? (
                <SuccessMsg>
                    <code>{success}</code>
                </SuccessMsg>
            ) : null}
        </>
    );
};
