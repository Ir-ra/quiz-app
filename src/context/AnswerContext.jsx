import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useIntl } from "react-intl";

export const AnswerContext = createContext();

export const AnswerProvider = ({ children }) => {
  const [answers, setAnswers] = useLocalStorage('quizAnswers', {});
  const [email, setEmail] = useLocalStorage('email', '');

  const [quizAnswers, setQuizAnswers] = useState(answers);
  const [emailState, setEmailState] = useState(email);
  const intl = useIntl();

  useEffect(() => {
    setAnswers(quizAnswers);
  }, [quizAnswers, setAnswers]);

  useEffect(() => {
    setEmail(emailState);
  }, [emailState, setEmail]);

  const saveAnswerToLocalStorage = (id, answer, type) => {
    setQuizAnswers(prevAnswers => ({
      ...prevAnswers,
      [id]: {
        question: intl.messages[`question${id}`],
        answer: answer,
        type: type
      }
    }));
  };

  const saveEmailToLocalStorage = (newEmail) => {
    setEmailState({
      email: newEmail,
      type: 'email'
    });
  };

  const clearAnswers = () => {
    setQuizAnswers({});
  };

  const clearEmail = () => {
    setEmailState('');
  };

  return (
    <AnswerContext.Provider
      value={{
        answers: quizAnswers,
        clearAnswers,
        clearEmail,
        email: emailState,
        saveAnswerToLocalStorage,
        saveEmailToLocalStorage
      }}
    >
      {children}
    </AnswerContext.Provider>
  );
}
