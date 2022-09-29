import React from "react";

export type Props = {
  onClick: () => void;
};

const Button = (props: Props) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={props.onClick}
    >
      fetch
    </button>
  );
};

export default Button;
