import { fireEvent, render, screen } from '@testing-library/react';
import Button from "./Button"

describe("ボタンの単体テスト", () => {
    // window.alertのモックを保持する変数
    let alertMock: jest.SpyInstance<void, [message?: unknown]>;

    beforeEach(() => {
        alertMock = jest.spyOn(window, 'alert').mockImplementation();
    });

    afterEach(() => {
        alertMock.mockRestore();
    });

    test("ボタンが適切なロールで表示される", () => {
        render(<Button>Click Me</Button>);
        const buttonElement = screen.getByRole("button", { name: "Click Me" });
        expect(buttonElement).toBeInTheDocument();
    });

    test("ボタン押下時にコールバック関数が正しく1回作動する", () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click Me</Button>);
        const buttonElement = screen.getByText("Click Me");
        fireEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test("デフォルトのonClickハンドラが正しく動作する", () => {
        render(<Button>Test</Button>);
        const buttonElement = screen.getByText("Test");
        fireEvent.click(buttonElement);
        expect(alertMock).toHaveBeenCalledTimes(1);
        expect(alertMock).toHaveBeenCalledWith("clicked");
    });
})  