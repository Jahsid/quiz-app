import { Button, Card, CardContent } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";

const QuestionCard = ({
  quizData,
  currentQuestionIndex,
  handleNext,
  handlePrev,
  showExplanation,
  setShowExplanation,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowExplanation(true);
  };

  const currentQuestion = quizData.questions[currentQuestionIndex];
  const isCorrect = selectedOption === currentQuestion.answer;

  return (
    <div>
      <div className="w-[800px] h-screen">
        <Card
          variant="outlined"
          className="shadow-lg"
          sx={{
            borderColor: "#84a7fa",
            borderRadius: "12px",
          }}
        >
          <CardContent>
            <h4 className="text-2xl font-bold">
              Question {currentQuestionIndex + 1}
            </h4>
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
              borderRadius: "8px",
              textTransform: "none",
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
              borderRadius: "8px",
              textTransform: "none",
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
            {showExplanation && (
              <p className="mx-2">{currentQuestion.explanation}</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

QuestionCard.propTypes = {
  quizData: PropTypes.shape({
    questions: PropTypes.arrayOf(
      PropTypes.shape({
        question: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(PropTypes.string).isRequired,
        answer: PropTypes.string.isRequired,
        explanation: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  currentQuestionIndex: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
  showExplanation: PropTypes.bool.isRequired,
  setShowExplanation: PropTypes.func.isRequired,
};

export default QuestionCard;
