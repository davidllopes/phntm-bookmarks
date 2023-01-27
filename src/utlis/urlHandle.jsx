/**
 * function that tests to see if URL is valid
 * if protocol is missing tries with https
 * returns parsed URL or false if not valid
 */
export const makeURL = (urlInput) => {
    let url;
    try {
        url = new URL(urlInput);
    } catch (err) {
        try {
            url = new URL("https://" + urlInput);
        } catch (err) {
            //console.error(err);
            return false;
        }
    }
    return url;
};

/**
 * checks if the bookmark exists in the items/storage
 */
export const bookmarkExists = (parsedURL, items) => {
    return items.find((item) => item.url === parsedURL.href);
};

/**
 * I used the fetch API to pick the parsed URL and test for a response.
 * If there's a response save it using the handleSave callback passed (add new/edit bookmark)
 * If there's no response display error message
 * "no-cors" used to enable cross origin requests
 */
export const saveURL = (parsedURL, handleSave, displayStatus) => {
    fetch(parsedURL, { mode: "no-cors" }).then(
        (response) => {
            handleSave({ url: parsedURL.href });
            displayStatus("success", "Bookmark saved!");
        },
        (error) => {
            //console.error(error);
            displayStatus(
                "error",
                "I'm afraid I couldn't find the website you're looking for. Please check again."
            );
        }
    );
};
