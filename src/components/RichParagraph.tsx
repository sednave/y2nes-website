import React from "react";

type Props = {
    text: string
}

const RichParagraph = ({ text }: Props) => {
    return <p>
        {
            text.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
            ))
        }
    </p>
}

export default RichParagraph;