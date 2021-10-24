const Option = ({optionText, handleDeleteOption}) => (
  <p>
      {optionText}
      <button onClick={(e) => {handleDeleteOption(optionText)}}>No Thanks!</button>
  </p>
);

export default Option;