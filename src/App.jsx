import { useState } from "react";
import "./App.css";
import Data from "./data";
import Question from "./components/Question";

function App() {
  const [questions, setQuestion] = useState(Data);
  console.log(Data);
  return (
    <main className="bg-pink-500 py-20 ">
      <section className="flex justify-center items-center">
        <div className="bg-white rounded w-[50%] shadow py-10 ">
          <h1 className="text-center font-normal text-5xl mb-10">
            All Questions
          </h1>
          <div>
            {questions.map((question) => {
              return <Question key={question.id} {...question} />;
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
