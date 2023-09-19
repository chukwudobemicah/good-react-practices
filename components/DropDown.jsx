import React from "react";

export default function DropDown({ items, text, heading }) {
  return (
    <>
      <h1>{heading}</h1>
      <p>{text}</p>
      <p>{items}</p>
    </>
  );
}
