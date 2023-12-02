import { render, screen } from '@testing-library/react';
import Loading from "./Loading";

describe("ローディングアニメーションの単体テスト", () => {
    test("ローディングアニメーションが適切なロールで表示される", () => {
        render(<Loading />);
        const element = screen.getByRole("status");
        expect(element).toBeInTheDocument();
    });
});
