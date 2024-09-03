import PropTypes from 'prop-types';
import moon from "../assets/images/navbar/moonlight.png";
import sun from "../assets/images/navbar/sunlight.png";

const ToggleSwitch = ({ isChecked, onToggle }) => {
    return (
        <div className="cursor-pointer" onClick={ onToggle }>
            <img src={ isChecked ? sun : moon }
                alt={ isChecked ? 'Sun Icon' : 'Moon Icon' }
                className="w-10 h-10"
            />
        </div>
    );
};

ToggleSwitch.propTypes = {
    isChecked: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
};

export default ToggleSwitch;
