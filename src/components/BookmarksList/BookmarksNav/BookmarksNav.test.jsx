import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BookmarksNav } from "./BookmarksNav";

const TOTAL_ITEMS = 100,
    LIMIT = 20,
    setStartItem = jest.fn();
const totalPages = Math.ceil(TOTAL_ITEMS / LIMIT);

test(`should click each button, calling setStartItem ${totalPages} times`, () => {
    render(
        <BookmarksNav
            startItem={0}
            setStartItem={setStartItem}
            limit={LIMIT}
            totalItems={TOTAL_ITEMS}
        />
    );

    for (let i = 1; i <= totalPages; i++) {
        const btn = screen.getByRole("button", {
            name: i,
        });
        userEvent.click(btn);
    }

    expect(setStartItem).toHaveBeenCalledTimes(totalPages);
});
