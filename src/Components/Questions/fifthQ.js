import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../store/Context";
import Input from "../../UI/Input";

const FifthQ = () => {
  const [myAnswerS, setMyanswerS] = useState("");
  const [ForTheNextPage, setFortheNextPage] = useState();
  const { answerCounter, Sum } = useContext(MainContext);
  const Values = [
    {
      id: "1",
      name: "Francis Bacon",
      type: "button",
      onClick: () => setMyanswerS("fb"),
    },
    {
      id: "2",
      name: "Robert Boyle",
      type: "button",
      onClick: () => setMyanswerS("rb"),
    },
    {
      id: "3",
      name: " Robert Hooke ",
      type: "button",
      onClick: () => setMyanswerS("rh"),
    },
    {
      id: "4",
      name: "Charles Babbage ",
      type: "button",
      onClick: () => setMyanswerS("cb"),
    },
  ];
  const clickHandler = () => {
    setFortheNextPage(myAnswerS);
  };

  useEffect(() => {
    if (ForTheNextPage === "cb") {
      answerCounter();
      Sum();
    } else if (
      ForTheNextPage === "rh" ||
      ForTheNextPage === "rb" ||
      ForTheNextPage === "fb"
    ) {
      Sum();
    }
  }, [ForTheNextPage, Sum, answerCounter]);

  return (
    <div className="flex flex-col">
      <p className="font-bold">
        Which famous scientist was known as the “father of the computer”?{" "}
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
export default FifthQ;
