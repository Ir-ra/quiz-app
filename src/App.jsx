import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { IntlProvider } from 'react-intl'
import { useState } from 'react';
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";

//pages
import { EmailPage } from './pages/EmailPage';
import { ResultPage } from './pages/ResultPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { QuizPage } from './pages/QuizPage';

function App() {
  const [currentLocale, setCurrentLocale] = useState(getInitialLocal());

  function getInitialLocal() {
    const savedLocale = localStorage.getItem("locale");
    return savedLocale || LOCALES.ENGLISH;
  }

  return (
    <>
      <IntlProvider
        messages={messages[currentLocale]}
        locale={currentLocale}
        defaultLocale={LOCALES.ENGLISH}
      >
        <Routes>
          <Route path="/" element={<Navigate to="/quiz/1" replace />} />
          <Route
            path="/quiz/:id"
            element={<QuizPage currentLocale={currentLocale} setCurrentLocale={setCurrentLocale} />}
          />

          <Route path="/email" element={<EmailPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </IntlProvider>
    </>
  )
}

export default App
