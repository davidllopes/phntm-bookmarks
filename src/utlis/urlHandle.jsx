export const makeURL = (urlInput) => {
    let url;
    try {
        url = new URL(urlInput);
    } catch (err) {
        try {
            url = new URL("https://" + urlInput);
        } catch (err) {
            console.error(err);
            return false;
        }
    }
    return url;
};

export const saveURL = (urlInput, handleSave, setSuccess, setError) => {
    return fetch(urlInput, { mode: "no-cors" })
        .then((response) => {
            return response;
        })
        .then(
            (response) => {
                console.log(response);
                handleSave({ url: urlInput.href });
                setSuccess("Bookmark saved!");
            },
            (error) => {
                console.log(error, urlInput);
                setError("Website doesn't exist");
            }
        );
};
