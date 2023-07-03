import { Fragment } from "react";

const Input = (props) => {
  const styles =
    "p-4  border-2 border-solid border-white rounded-3xl mt-5 " +
    " cursor-pointer focus:border-green-700 focus:text-green-700 font-semibold";
  const { myValue } = props;
  return (
    <Fragment className=" font">
      {myValue.map((item) => (
        <input
          key={item.id}
          type={item.type}
          value={item.name}
          className={styles}
          onClick={item.onClick}
        />
      ))}
    </Fragment>
  );
};
export default Input;
