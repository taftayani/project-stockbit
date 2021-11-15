import React from "react";
const ButtonClick = ({ textButton, typeButton }) => {
  if (typeButton == "primary") {
    return (
      <div>
        <button className="bg-yellow-primary text-white w-full px-30px py-2 rounded-xl">
          {textButton}
        </button>
      </div>
    );
  }
  if (typeButton == "secondary") {
    return (
      <div>
        <button className="border border-yellow-primary text-yellow-primary w-full px-30px py-2 rounded-xl">
          {textButton}
        </button>
      </div>
    );
  }
};
export default ButtonClick;
