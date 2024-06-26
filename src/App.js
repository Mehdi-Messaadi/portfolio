import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./components/Homepage";
import { DarkModeProvider } from "./context/DarkModeContext";
import DarkModeToggleButton from "./components/DarkModeToggleButton";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import LanguageWrapper from "./components/LanguageWrapper";
import "./App.css";

function App() {
  return (
    <DarkModeProvider>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/:lang" element={<LanguageWrapper />} />
              <Route path="/" element={<Navigate to="/en" />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </I18nextProvider>
    </DarkModeProvider>
  );
}

export default App;
