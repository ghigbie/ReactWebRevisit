import Option from "./Option";
import RemoveAll from "./RemoveAll";

const Options = ({options, handleRemoveAll, handleDeleteOption}) => (
    <div>
        Options Component
        {options.map((option) => (
            <Option 
                key={option} 
                handleDeleteOption={handleDeleteOption}
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