import { useEffect, useState } from "react";
import useAxiosInstance from "../api/axiosInstance";

function Quiz() {
  // Properties
  const [data, setData] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const instance = useAxiosInstance();

  // get all quizzes
  useEffect(() => {
    instance
      .get("/quiz/getall")
      .then((res) => {
        setData(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  // Helper Functions
  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < data[currentQuiz].questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      if (currentQuiz + 1 < data.length) {
        setCurrentQuiz(currentQuiz + 1);
        setCurrentQuestion(0);
      } else {
        setShowResults(true);
      }
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuiz(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="w-[70%] justify-center items-center mx-auto bg-[#955B09BA] rounded-lg">
      <h1 className="text-white font-bold p-2 border-b-2 border-orange-300">
        EZRA seminary
      </h1>
      {data.length > 0 && data[currentQuiz] && (
        <div className="text-center">
          <h1 className="text-3xl font-bold my-3 text-white">Quiz</h1>
          <h2 className="my-3 text-white">Score: {score}</h2>
          {showResults ? (
            <div className="mx-auto w-1/2 mt-16 p-4 rounded-lg text-white shadow-xl">
              <h1>Final Results</h1>
              <h2>
                {score} out of {data[currentQuiz].questions.length} correct - (
                {(score / data[currentQuiz].questions.length) * 100}%)
              </h2>
              <button
                className="bg-red-500 border-none text-white py-4 px-6 text-center no-underline inline-block text-lg font-bold rounded-3xl"
                onClick={() => restartGame()}
              >
                Restart game
              </button>
            </div>
          ) : (
            <div className="mx-auto w-[80%] h-auto p-4 rounded-2xl text-white shadow-xl">
              <h2 className="my-3 font-bold">
                Question: {currentQuestion + 1} out of{" "}
                {data[currentQuiz].questions.length}
              </h2>
              <h3 className="text-blue-950 text-2xl font-bold my-3">
                {data[currentQuiz].questions[currentQuestion].text}
              </h3>

              {/* List of possible answers  */}
              <ul className="list-none">
                {data[currentQuiz].questions[currentQuestion].options.map(
                  (option) => {
                    return (
                      <li
                        key={option.id}
                        className="mt-2 bg-accent-6 p-3 w-3/4 mx-auto border-2 border-white rounded-3xl text-xl cursor-pointer hover:bg-orange-300"
                        onClick={() => optionClicked(option.isCorrect)}
                      >
                        {option.text}
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Quiz;
