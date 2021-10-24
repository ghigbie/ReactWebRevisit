import Option from "./Option";
import RemoveAll from "./RemoveAll";

const Options = ({options, handleRemoveAll, handleRemoveOption}) => (
    <div>
        Options Component
        {options.map((option) => (
            <Option 
                key={option} 
                handleRemoveOption={handleRemoveOption}
                optionText={option}
            />
        ))}
        <RemoveAll 
            handleRemoveAll={handleRemoveAll} 
            hasOptions={options.length > 0 || 0 }
        />
    </div>
);

export default Options;