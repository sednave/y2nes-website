import React from "react";

type Props = {
  text: string;
};

const RichParagraph = ({ text }: Props) => {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, index) => (
        <p key={`${line}-${index}`}>{line}</p>
      ))}
    </>
  );
};

export default RichParagraph;
