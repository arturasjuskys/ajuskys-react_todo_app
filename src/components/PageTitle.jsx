import "../styles/title.scss";

export default function PageTitle({ children, ...rest }) {
  return (
    <p className="title" {...rest}>
      {children}
    </p>
  );
}
