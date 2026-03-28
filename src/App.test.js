import { render, screen } from "@testing-library/react";
import App from "./App";
import { LanguageProvider } from "./context/LanguageContext";

test("renders site brand", () => {
  render(
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
  expect(screen.getByText("BrightSmile Dental")).toBeInTheDocument();
});
