import { Navigate, Route, Routes } from 'react-router-dom';
import { IntlProvider } from 'react-intl'
import { useState } from 'react';
import { LOCALES } from "./localization/locales";
import { messages } from "./localization/messages";

import { AnswerProvider } from './context/AnswerContext';

import { EmailPage, NotFoundPage, QuizPage, ThankYou } from './pages';

function App() {
  const [currentLocale, setCurrentLocale] = useState(getInitialLocal());

  function getInitialLocal() {
    const savedLocale = localStorage.getItem("locale");
    return savedLocale || LOCALES.ENGLISH;
  }

  return (
    <IntlProvider
      messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={LOCALES.ENGLISH}
    >
      <AnswerProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/quiz/1" replace />} />
          <Route
            path="/quiz/:id"
            element={<QuizPage currentLocale={currentLocale} setCurrentLocale={setCurrentLocale} />}
          />
          <Route path="/email" element={<EmailPage />} />
          <Route path="/result" element={<ThankYou />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnswerProvider>
    </IntlProvider>
  )
}

export default App
