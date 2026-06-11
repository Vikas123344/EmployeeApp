import React from "react";

const CustomButton = ({
  type,
  classType,
  onClick,
  text,
  radius,
  width,
  isSpinner = false,
  spinnerText = "Loading...",
  inlineButtonIcon,
}) => {
  const buttonClass = `${classType} ${radius} flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed`;

  return (
    <button
      type={type}
      onClick={onClick}
      style={{ width }}
      className={buttonClass}
      disabled={isSpinner}
    >
      {isSpinner && (
        <span
          className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"
          role="status"
          aria-hidden="true"
        ></span>
      )}

      {inlineButtonIcon && (
        <img
          src={inlineButtonIcon}
          alt="button-icon"
          width="20"
          height="21"
          className="mx-2"
        />
      )}

      {isSpinner ? spinnerText : text}
    </button>
  );
};

export default CustomButton;

/*<CustomButton
  type="submit"
  classType="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4"
  onClick={redirectTo}
  text="Sign In"
  radius="rounded-full"
  width="100%"
  isSpinner={spinner}
  spinnerText={spinner ? "Checking..." : ""}
/>*/
