import { useContext } from "react";
import EntereName from "../Questions/EnteredName";
import { MainContext } from "../../store/Context";
import FirstQ from "../Questions/FirstQ";
import SecondQ from "../Questions/SecondQ";
import ThirdQ from "../Questions/thirdQ";
import ForthQ from "../Questions/ForthQ";
import FifthQ from "../Questions/fifthQ";
import SixthQ from "../Questions/sixthQ";
import SeventhQ from "../Questions/seventhQ";
import EighthQ from "../Questions/eighthQ";
import Result from "../Result/Result";

const MainQuiz = () => {
  const { totalValue } = useContext(MainContext);

  return (
    <div>
      <div className=" flex items-center justify-center mt-20">
        <h3 className="  text-5xl font-extralight text-white">Quiz App</h3>
      </div>
      <div className="flex justify-center ">
        <div className="items-center mt-24 bg-white/30  h-auto w-[500px] p-10 text-white rounded-2xl">
          {totalValue === 0 && <EntereName />}
          {totalValue === 1 && <FirstQ />}
          {totalValue === 2 && <SecondQ />}
          {totalValue === 3 && <ThirdQ />}
          {totalValue === 4 && <ForthQ />}
          {totalValue === 5 && <FifthQ />}
          {totalValue === 6 && <SixthQ />}
          {totalValue === 7 && <SeventhQ />}
          {totalValue === 8 && <EighthQ />}
          {totalValue === 9 && <Result />}
        </div>
      </div>
    </div>
  );
};
export default MainQuiz;
