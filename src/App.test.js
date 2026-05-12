import { render, screen } from "@testing-library/react";
import App from "./App";
import { LanguageProvider } from "./context/LanguageContext";

test("renders site brand", () => {
  render(
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("DUO SMILE Dental Center");
});
