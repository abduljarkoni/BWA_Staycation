import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

// 1. function
export default function Button(props) {
  //  3. implementasi propTypes
  const className = [props.className];
  if (props.isPrimary) className.push("btn-primary");
  if (props.isLarge) className.push("btn-lg");
  if (props.isSmall) className.push("btn-sm");
  if (props.isBlock) className.push("btn-block");
  if (props.hasShadow) className.push("btn-shadow");

  // 4. function untuk menghandle onclick
  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  // 7. logik isLoading dan isDisabled
  if (props.isDisabled || props.isLoading)
    if (props.isDisabled) className.push("disabled");
  return (
    <span className={className.join(" ")} style={props.style}>
      {props.isLoading ? (
        <>
          <span className="spinner-border spinner-border-sm mx-5"></span>
          <span className="sr-only">Loading...</span>
        </>
      ) : (
        props.children
      )}
    </span>
  );

  // 5. pengecekan link yang digunakan
  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          target={props.target === "_blank" ? "_blank" : undefined}
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href}
          className={className.join(" ")}
          style={props.style}
          onClick={onClick}
        >
          {props.children}
        </Link>
      );
    }
  }

  // 6. meritan button
  return;
  <button className={className.join(" ")} style={props.style} onClick={onClick}>
    {props.children}
  </button>;
}

// 2 propTypes
Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  onClick: propTypes.func,
  href: propTypes.string,
  target: propTypes.string,
  className: propTypes.string,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
  isExternal: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
  isExternal: propTypes.bool,
  hasShadow: propTypes.bool,
};
