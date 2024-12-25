import { Button, Card, CardContent } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const QuestionCard = () => {
  const [quizData, setQuizData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/questions");
        setQuizData(response.data);
      } catch (error) {
        console.error("Error fetching quiz data", error);
      }
    };

    fetchQuizData();
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowExplanation(false);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(null);
      setShowExplanation(false);
    }
  };

  if (!quizData) {
    return <div>Loading...</div>;
  }

  const currentQuestion = quizData.questions[currentQuestionIndex];
  const isCorrect = selectedOption === currentQuestion.answer;

  return (
    <div>
      {quizData && (
        <div className="w-[800px] h-screen">
          <Card variant="outlined" className="shadow-lg">
            <CardContent>
              <h4>Question {currentQuestionIndex + 1}</h4>
              <p>{currentQuestion.question}</p>
            </CardContent>
          </Card>

          {currentQuestion.options.map((option, index) => (
            <Card
              variant="outlined"
              key={index}
              className="my-5 shadow-lg"
              style={{
                backgroundColor:
                  selectedOption === option
                    ? isCorrect
                      ? "green"
                      : "red"
                    : "white",
              }}
              onClick={() => handleOptionSelect(option)}
            >
              <CardContent>{option}</CardContent>
            </Card>
          ))}
          <div className="flex justify-center gap-10 m-4">
            <Button
              variant="outlined"
              onClick={handlePrev}
              disabled={currentQuestionIndex === 0}
              sx={{
                borderColor: "transparent",
                color: "black",
                borderRadius: "8px"
              }}
              className="shadow-lg"
            >
              Prev
            </Button>
            <Button
              variant="outlined"
              onClick={handleNext}
              disabled={currentQuestionIndex === quizData.questions.length - 1}
              sx={{
                borderColor: "transparent",
                color: "black",
                borderRadius: "8px"
              }}
              className="shadow-lg"
            >
              Next
            </Button>
          </div>
          <Card variant="outlined" className="shadow-lg">
            <CardContent>
              <p
                className="text-2xl font-bold"
                onClick={() => setShowExplanation(!showExplanation)}
                style={{ cursor: "pointer" }}
              >
                Explanation
              </p>
              {showExplanation && <p>{currentQuestion.explanation}</p>}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
