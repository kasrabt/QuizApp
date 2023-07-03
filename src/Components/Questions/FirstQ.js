import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../store/Context";
import Input from "../../UI/Input";

const FirstQ = () => {
  const [myAnswerOne, setMyanswerOne] = useState("");
  const [ForTheNExtPage, setFortheNExtpage] = useState("");
  const { answerCounter, Sum } = useContext(MainContext);
  const Values = [
    {
      id: "1",
      name: "khalifa tower",
      type: "button",
      onClick: () => setMyanswerOne("kt"),
    },
    {
      id: "2",
      name: "milad tower",
      type: "button",
      onClick: () => setMyanswerOne("mt"),
    },
    {
      id: "3",
      name: "warisan tower",
      type: "button",
      onClick: () => setMyanswerOne("wt"),
    },
    {
      id: "4",
      name: "pizza tower",
      type: "button",
      onClick: () => setMyanswerOne("pt"),
    },
  ];

  const clickHandler = () => {
    setFortheNExtpage(myAnswerOne);
  };
  useEffect(() => {
    if (ForTheNExtPage === "kt") {
      answerCounter();
      Sum();
    } else if (
      ForTheNExtPage === "mt" ||
      ForTheNExtPage === "wt" ||
      ForTheNExtPage === "pt"
    ) {
      Sum();
    }
  }, [Sum, answerCounter, ForTheNExtPage]);

  return (
    <div className="flex flex-col">
      <p className="font-bold">What is the tallest building in the world?</p>
      <Input myValue={Values} />
      <button
        className="mt-5 bg-green-700/80 p-5 rounded-3xl font-bold  "
        onClick={clickHandler}
      >
        Click
      </button>
    </div>
  );
};
export default FirstQ;
