import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../store/Context";
import Input from "../../UI/Input";

const SeventhQ = () => {
  const [myAnswerS, setMyanswerS] = useState("");
  const [ForTheNextPage, setFortheNextPage] = useState();
  const { answerCounter, Sum } = useContext(MainContext);
  const Values = [
    {
      id: "1",
      name: "italy",
      type: "button",
      onClick: () => setMyanswerS("it"),
    },
    {
      id: "2",
      name: "england",
      type: "button",
      onClick: () => setMyanswerS("en"),
    },
    {
      id: "3",
      name: "india",
      type: "button",
      onClick: () => setMyanswerS("in"),
    },
    {
      id: "4",
      name: "canada ",
      type: "button",
      onClick: () => setMyanswerS("ca"),
    },
  ];
  const clickHandler = () => {
    setFortheNextPage(myAnswerS);
  };

  useEffect(() => {
    if (ForTheNextPage === "it") {
      answerCounter();
      Sum();
    } else if (
      ForTheNextPage === "in" ||
      ForTheNextPage === "en" ||
      ForTheNextPage === "ca"
    ) {
      Sum();
    }
  }, [ForTheNextPage, Sum, answerCounter]);

  return (
    <div className="flex flex-col">
      <p className="font-bold">
        Which country is known for inventing the pizza?{" "}
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
export default SeventhQ;
