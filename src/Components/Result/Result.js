import { useContext } from "react";
import { MainContext } from "../../store/Context";

const Result = () => {
  const { AnswerCount, name, subtract } = useContext(MainContext);
  const tryAgainHandler = () => {
    subtract();
  };
  return (
    <div className=" items-center flex justify-center flex-col">
      <p className="  font-bold text-3xl">congratulations {name}</p>
      <p className="mt-10 ">
        "you answered{" "}
        <span className="  font-bold text-xl">{AnswerCount} </span>of{" "}
        <span className="  font-bold text-xl"> 8</span> Questions"
      </p>
      <p className="mt-10">
        for try again the quiz , you can refresh page or click on the button
      </p>
      <button
        onClick={tryAgainHandler}
        className="mt-5 bg-green-700/80 p-5 rounded-3xl font-bold flex justify-center "
      >
        Click for try Again
      </button>
    </div>
  );
};
export default Result;
