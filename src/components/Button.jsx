import React from "react";

const Buttons = ({ filterItem, menuItems }) => {
  return (
    <>
      <div className="d-flex justify-content-center tw-flex-wrap">
        <button
          className="tw-filter-button tw-bg-indigo-500 hover:tw-bg-pink-500 tw-px-4 tw-py-2 tw-mr-2 tw-mb-2 tw-text-white tw-rounded"
          onClick={() => filterItem("All")}
        >
          All
        </button>
        {menuItems.map((Val, id) => {
          return (
            <button
              className="tw-filter-button tw-bg-indigo-500 hover:tw-bg-pink-500 tw-px-4 tw-py-2 tw-mr-2 tw-mb-2 tw-text-white tw-rounded"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Buttons;
