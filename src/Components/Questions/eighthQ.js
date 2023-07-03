import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../store/Context";
import Input from "../../UI/Input";

const EighthQ = () => {
  const [myAnswerS, setMyanswerS] = useState("");
  const [ForTheNextPage, setFortheNextPage] = useState();
  const { answerCounter, Sum } = useContext(MainContext);
  const Values = [
    {
      id: "1",
      name: "ohio",
      type: "button",
      onClick: () => setMyanswerS("oh"),
    },
    {
      id: "2",
      name: "California",
      type: "button",
      onClick: () => setMyanswerS("ca"),
    },
    {
      id: "3",
      name: "florida",
      type: "button",
      onClick: () => setMyanswerS("fl"),
    },
    {
      id: "4",
      name: "texas ",
      type: "button",
      onClick: () => setMyanswerS("tx"),
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
      ForTheNextPage === "tx" ||
      ForTheNextPage === "fl" ||
      ForTheNextPage === "oh"
    ) {
      Sum();
    }
  }, [ForTheNextPage, Sum, answerCounter]);

  return (
    <div className="flex flex-col">
      <p className="font-bold">
        Which U.S. state is known as the Golden State?{" "}
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
export default EighthQ;
