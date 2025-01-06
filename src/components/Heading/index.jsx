import PropTypes from "prop-types";

export const Heading = ({ children, type = "h1", color = "" }) => {
  const customColor = color === "white" ? "text-white" : "text-text";

  if (type === "h1") {
    return (
      <h1
        className={`${customColor} text-[4.625rem] leading-[5.25rem] font-graphik-bold`}
      >
        {children}
      </h1>
    );
  }

  return (
    <h2
      className={`${customColor} text-5xl leading-[3.4375rem] font-graphik`}
    >
      {children}
    </h2>
  );
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.node.isRequired,
  color: PropTypes.node.isRequired,
};
