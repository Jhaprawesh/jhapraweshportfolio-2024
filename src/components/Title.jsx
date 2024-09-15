import React from "react";

const Title = ({ title, subTitle, titleClassName, subtitleClassName }) => {
  return (
    <>
      <div className="tw-text-center tw-mb-6">
        <h2 className={`tw-text-4xl tw-font-bold tw-mb-4 ${titleClassName}`}>
          {title}
        </h2>
        <p
          className={`tw-text-lg tw-text-indigo-500 tw-font-semibold ${subtitleClassName}`}
        >
          <span className="tw-rounded-md tw-bg-slate-100 tw-py-0.5 tw-px-2.5 tw-border tw-border-transparent tw-text-sm tw-text-slate-600 tw-transition-all tw-shadow-sm">
            {subTitle}
          </span>
        </p>
      </div>
    </>
  );
};

export default Title;
