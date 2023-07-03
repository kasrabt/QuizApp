import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../store/Context";
import Input from "../../UI/Input";

const ForthQ = () => {
  const [myAnswerS, setMyanswerS] = useState("");
  const [ForTheNextPage, setFortheNextPage] = useState();
  const { answerCounter, Sum } = useContext(MainContext);
  const Values = [
    {
      id: "1",
      name: "North Korea",
      type: "button",
      onClick: () => setMyanswerS("nk"),
    },
    {
      id: "2",
      name: "Iran",
      type: "button",
      onClick: () => setMyanswerS("ir"),
    },
    {
      id: "3",
      name: " Amrica ",
      type: "button",
      onClick: () => setMyanswerS("us"),
    },
    {
      id: "4",
      name: "Canada ",
      type: "button",
      onClick: () => setMyanswerS("ca"),
    },
  ];
  const clickHandler = () => {
    setFortheNextPage(myAnswerS);
  };

  useEffect(() => {
    if (ForTheNextPage === "ca") {
      answerCounter();
      Sum();
    } else if (
      ForTheNextPage === "us" ||
      ForTheNextPage === "ir" ||
      ForTheNextPage === "nk"
    ) {
      Sum();
    }
  }, [ForTheNextPage, Sum, answerCounter]);

  return (
    <div className="flex flex-col">
      <p className="font-bold">
        What is the world’s second-largest country by land area?{" "}
      </p>
      <Input myValue={Values} />
      <button
        className="mt-5 bg-green-700/80 p-5 rounded-3xl font-bold "
        onClick={clickHandler}
      >
        Click
      </button>
    </div>
  );
};
export default ForthQ;
