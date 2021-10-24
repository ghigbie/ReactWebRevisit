const Option = ({optionText, handleRemoveOption}) => (
  <p>
      {optionText}
      <button onClick={() => handleRemoveOption(optionText)}>No Thanks!</button>
  </p>
);

export default Option;