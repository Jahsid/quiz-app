import QuizHeader from "./components/QuizHeader";
import QuestionCard from "./components/QuestionCard";
import ProgressIndicator from "./components/ProgressIndicator";
import { useEffect, useState } from "react";
import axios from "axios";
import { ThemeProvider } from "@mui/material";
import theme from "./styles/theme";

function App() {
  const [quizData, setQuizData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        // const response = await axios.get("http://localhost:5000/questions");
        const response = await axios.get("https://quiz-app-backend-nw98.onrender.com/questions");
        setQuizData(response.data);
      } catch (error) {
        console.error("Error fetching quiz data", error);
      }
    };

    fetchQuizData();
  }, []);

  const handleNext = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowExplanation(false);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowExplanation(false);
    }
  };

  if (!quizData) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <QuizHeader />
        <div className="container mx-auto flex justify-center gap-5">
          <QuestionCard
            quizData={quizData}
            currentQuestionIndex={currentQuestionIndex}
            handleNext={handleNext}
            handlePrev={handlePrev}
            showExplanation={showExplanation}
            setShowExplanation={setShowExplanation}
          />
          <ProgressIndicator 
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={quizData.questions.length}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
