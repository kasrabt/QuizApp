import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../store/Context";
import Input from "../../UI/Input";

const ThirdQ = () => {
  const [myAnswerS, setMyanswerS] = useState("");
  const [ForTheNextPage, setFortheNextPage] = useState();
  const { answerCounter, Sum } = useContext(MainContext);
  const Values = [
    {
      id: "1",
      name: "Nile River",
      type: "button",
      onClick: () => setMyanswerS("nr"),
    },
    {
      id: "2",
      name: "Ganga river",
      type: "button",
      onClick: () => setMyanswerS("gr"),
    },
    {
      id: "3",
      name: " Indus river",
      type: "button",
      onClick: () => setMyanswerS("ir"),
    },
    {
      id: "4",
      name: "Yamuna river",
      type: "button",
      onClick: () => setMyanswerS("yr"),
    },
  ];
  const clickHandler = () => {
    setFortheNextPage(myAnswerS);
  };

  useEffect(() => {
    if (ForTheNextPage === "nr") {
      answerCounter();
      Sum();
    } else if (
      ForTheNextPage === "ir" ||
      ForTheNextPage === "yr" ||
      ForTheNextPage === "gr"
    ) {
      Sum();
    }
  }, [ForTheNextPage, Sum, answerCounter]);

  return (
    <div className="flex flex-col">
      <p className="font-bold">What is the world’s longest river?</p>
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
export default ThirdQ;
