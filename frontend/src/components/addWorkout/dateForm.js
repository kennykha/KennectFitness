import React from "react";

const DateForm = ({ date, onChange }) => {
  return (
    <input id="Date" placeholder="Date" value={date} onChange={onChange} />
  );
};

export default DateForm;
