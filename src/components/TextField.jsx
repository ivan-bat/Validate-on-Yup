import PropTypes from 'prop-types';
import './TextField.css';

export const TextField = ({ value, type, name, onChange, label, placeholder, error }) => {
	return (
		<div className="input__group">
			<label htmlFor={name}>{label}</label>
			<input
				className="input"
				id={name}
				value={value}
				name={name}
				type={type}
				placeholder={placeholder}
				onChange={onChange}
			/>
			{error && <div>{error}</div>}
		</div>
	);
};

TextField.propTypes = {
	value: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	label: PropTypes.string,
	placeholder: PropTypes.string.isRequired,
	error: PropTypes.string,
};
