import QuizHeader from "./components/QuizHeader"
import QuestionCard from "./components/QuestionCard"
import ProgressIndicator from "./components/ProgressIndicator"

function App() {

  return (
    <>
    <div className="App">
      <QuizHeader />
      <div className="container mx-auto flex justify-center gap-5">
      <QuestionCard />
      <ProgressIndicator />
      </div>
    </div>
    </>
  )
}

export default App
