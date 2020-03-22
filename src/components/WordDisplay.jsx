import React from "react";

export default function WordDisplay(props) {
  const wordArray = [...props.word];
  const userInputWordArray = [...props.userInput];

  return (
    <div>
      {wordArray.map((val, index) => {
        if (userInputWordArray.length < index + 1) {
          return <span style={styles}> {val} </span>;
        }
        if (val === userInputWordArray[index]) {
          return <span style={{ ...styles, color: "green" }}> {val} </span>;
        }
        if (val !== userInputWordArray[index]) {
          return <span style={{ ...styles, color: "red" }}> {val} </span>;
        }
        return <span style={styles}> {val} </span>;
      })}
    </div>
  );
}

const styles = {
  display: "inline-block"
};
