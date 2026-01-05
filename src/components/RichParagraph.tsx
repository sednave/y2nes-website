import React from "react";

type Props = {
  text: string;
};

const RichParagraph = ({ text }: Props) => {
  const lines = text.split("\n");
  return (
    <p>
      {lines.map((line, index) => (
        <React.Fragment key={`${line}-${index}`}>
          {line}
          {index < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </p>
  );
};

export default RichParagraph;
