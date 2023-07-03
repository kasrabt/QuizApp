import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../store/Context";
import Input from "../../UI/Input";

const SecondQ = () => {
  const [myAnswerS, setMyanswerS] = useState("");
  const [ForTheNextPage, setFortheNextPage] = useState();
  const { answerCounter, Sum } = useContext(MainContext);
  const Values = [
    {
      id: "1",
      name: "Arabic",
      type: "button",
      onClick: () => setMyanswerS("ab"),
    },
    {
      id: "2",
      name: "English",
      type: "button",
      onClick: () => setMyanswerS("en"),
    },
    {
      id: "3",
      name: "Farsi",
      type: "button",
      onClick: () => setMyanswerS("fa"),
    },
    {
      id: "4",
      name: "spanish",
      type: "button",
      onClick: () => setMyanswerS("sp"),
    },
  ];
  const clickHandler = () => {
    setFortheNextPage(myAnswerS);
  };

  useEffect(() => {
    if (ForTheNextPage === "en") {
      answerCounter();
      Sum();
    } else if (
      ForTheNextPage === "ab" ||
      ForTheNextPage === "fa" ||
      ForTheNextPage === "sp"
    ) {
      Sum();
    }
  }, [ForTheNextPage, Sum, answerCounter]);

  return (
    <div className="flex flex-col">
      <p className="font-bold">
        What is the main language spoken in Australia?
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
export default SecondQ;
