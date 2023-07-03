import { Fragment } from "react";

const Input = (props) => {
  const styles =
    "p-4  border-2 border-solid hover:text-green-700 border-white rounded-3xl mt-5 focus:border-green-700" +
    " cursor-pointer active:border-green-700  active:text-green-700 font-semibold focus:text-green-700 ";
  const { myValue } = props;
  return (
    <Fragment>
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
