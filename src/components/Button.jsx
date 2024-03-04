import clsx from "clsx";

const Button = ({ children, variant = "contained" }) => {
  return (
    <button
      className={clsx("px-3 py-1 rounded-md transition-all", {
        "bg-primary-500 text-primary-50 hover:bg-primary-700":
          variant === "contained",
        "bg-transparent border border-primary-500 text-primary-500 hover:bg-primary-50":
          variant === "outlined",
        "text-primary-500 bg-transparent hover:bg-primary-50":
          variant === "text",
      })}
    >
      {children}

    </button>
  );
};

export default Button;
