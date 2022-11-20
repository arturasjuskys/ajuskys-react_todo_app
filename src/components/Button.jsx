import "../styles/button.scss";

export default function button({
  children,
  type,
  variant = "primary",
  ...rest
}) {
  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      className={`button button--${variant}`}
      {...rest}
    >
      {children}
    </button>
  );
}
