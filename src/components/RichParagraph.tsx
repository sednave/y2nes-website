import React from "react";

type Props = {
  text: string;
};

const RichParagraph = ({ text }: Props) => {
  const lines = text.split("\n");
  return (
    <div>
      {lines.map((line, index) => (
        <React.Fragment key={`${line}-${index}`}>
          {line}
          {index < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default RichParagraph;
