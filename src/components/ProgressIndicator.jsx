import { Card, CardContent, Chip } from "@mui/material";
import PropTypes from "prop-types";

const ProgressIndicator = ({ currentQuestionIndex, totalQuestions }) => {
  const progress = currentQuestionIndex + 1;

  const getChipStyles = (index) => {
    if (index < currentQuestionIndex) {
      // Visited
      return { backgroundColor: "#a8bcfc", color: "white" };
    } else if (index === currentQuestionIndex) {
      // Current
      return { backgroundColor: "#fea8af", color: "white" };
    } else {
      // Unvisited
      return { backgroundColor: "#c3c2c2", color: "black" };
    }
  };

  return (
    <div className="w-[350px]">
      <Card className="h-[650px]">
        <CardContent>
          <div className="flex justify-between">
            <p>Question {progress}/{totalQuestions}</p>
            <p>Need Help?</p>
          </div>
          <div className="flex justify-center mt-8">
            {Array.from({ length: totalQuestions }, (_, index) => (
              <Chip 
                key={index}
                label={index + 1}
                style={getChipStyles(index)}
                className="m-5"
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

ProgressIndicator.propTypes = {
  currentQuestionIndex: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
};

export default ProgressIndicator;
