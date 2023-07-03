import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../store/Context";
import Input from "../../UI/Input";

const SixthQ = () => {
  const [myAnswerS, setMyanswerS] = useState("");
  const [ForTheNextPage, setFortheNextPage] = useState();
  const { answerCounter, Sum } = useContext(MainContext);
  const Values = [
    {
      id: "1",
      name: "Atlantic ocean",
      type: "button",
      onClick: () => setMyanswerS("ao"),
    },
    {
      id: "2",
      name: "Arctic ocean",
      type: "button",
      onClick: () => setMyanswerS("ao1"),
    },
    {
      id: "3",
      name: " Pacific Ocean ",
      type: "button",
      onClick: () => setMyanswerS("po"),
    },
    {
      id: "4",
      name: "Indian ocean ",
      type: "button",
      onClick: () => setMyanswerS("io"),
    },
  ];
  const clickHandler = () => {
    setFortheNextPage(myAnswerS);
  };

  useEffect(() => {
    if (ForTheNextPage === "po") {
      answerCounter();
      Sum();
    } else if (
      ForTheNextPage === "io" ||
      ForTheNextPage === "ao" ||
      ForTheNextPage === "ao1"
    ) {
      Sum();
    }
  }, [ForTheNextPage, Sum, answerCounter]);

  return (
    <div className="flex flex-col">
      <p className="font-bold">
        What is the name of the world’s largest ocean?{" "}
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
export default SixthQ;
