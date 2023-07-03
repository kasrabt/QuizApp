import { useRef, useContext, useState } from "react";
import { MainContext } from "../../store/Context";

const EntereName = () => {
  const enteredName = useRef();
  const Ctx = useContext(MainContext);
  const [empty, setEmpty] = useState(false);
  const onsubmitHandler = (event) => {
    event.preventDefault();

    const valueOfName = enteredName.current.value;
    if (
      valueOfName.trim().length === 0 ||
      valueOfName === Number ||
      valueOfName >= 10
    ) {
      setEmpty(true);
      return;
    }
    Ctx.selectName(valueOfName);
    Ctx.Sum();
  };

  return (
    <form className="flex flex-col" onSubmit={onsubmitHandler}>
      <label htmlFor="NameI" className="font-bold">
        {!empty && <p>please Enter Your Name:</p>}
        {empty && (
          <p className="bg-green-700 w-auto rounded-lg p-2">
            please Enter a correct Value !
          </p>
        )}
      </label>
      <input
        ref={enteredName}
        id="NameI"
        placeholder="ForExample : Kasra"
        className=" mt-10 p-5 rounded-3xl
             text-white outline-none bg-white/10 placeholder-white focus:bg-white/10"
      />
      <button className="mt-10 bg-green-700 w-32 p-2 items-center rounded-2xl  transition ease-in-out 1s ">
        submit
      </button>
    </form>
  );
};
export default EntereName;
