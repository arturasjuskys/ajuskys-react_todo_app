import "../styles/button.scss";

export default function ButtonSelect({ children, ...rest }) {
  return (
    <select className="button button--select" {...rest}>
      {children}
    </select>
  );
}
