import { useState, useRef } from 'react';
import { TextField } from './TextField';
import './FormYup.css';
import {
	loginChangeScheme,
	validateAndGetErrorMessege,
	passwordChangeScheme,
} from '../Scheme/Scheme';

const Form = () => {
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState(null);
	const [password, setPassword] = useState('');
	const [passwordError, setPasswordError] = useState(null);
	const [repPassword, setRepPassword] = useState('');
	const [repPasswordError, setRepPasswordError] = useState(null);
	const [isBtnActive, setIsBtnActive] = useState(false);

	const submitButtonRef = useRef(null);

	const onEmailChange = ({ target }) => {
		if (
			!passwordError &&
			!repPasswordError &&
			!emailError &&
			target.value !== '' &&
			password !== '' &&
			email !== ''
		) {
			setIsBtnActive(true);
		}
		setEmail(target.value);
		const error1 = validateAndGetErrorMessege(loginChangeScheme, target.value);
		setEmailError(error1);
	};

	const onPasswordChange = ({ target }) => {
		if (
			!passwordError &&
			!repPasswordError &&
			!emailError &&
			target.value !== '' &&
			email !== '' &&
			repPassword !== ''
		) {
			setIsBtnActive(true);
		}
		setPassword(target.value);
		const error2 = validateAndGetErrorMessege(passwordChangeScheme, target.value);
		setPasswordError(error2);
	};

	const onRepPasswordChange = ({ target }) => {
		if (
			!passwordError &&
			!repPasswordError &&
			!emailError &&
			target.value !== '' &&
			email !== '' &&
			password !== ''
		) {
			setIsBtnActive(true);
		}
		setRepPassword(target.value);
		if (target.value !== password) {
			setRepPasswordError('Пароли не совпадают');
		} else {
			setRepPasswordError(false);
		}
	};

	const onSubmit = (event) => {
		event.preventDefault();
		submitButtonRef.current.focus();
		console.log(
			`Почта - ${email}, Пароль - ${password}, Повтор пароля - ${repPassword}`,
		);
	};

	return (
		<div className="page">
			<form onSubmit={onSubmit}>
				<TextField
					value={email}
					name="email"
					type="text"
					placeholder="email"
					onChange={onEmailChange}
					label="Email"
					error={emailError}
				/>
				<TextField
					value={password}
					name="password"
					type="password"
					placeholder="Пароль"
					onChange={onPasswordChange}
					label="Пароль"
					error={passwordError}
				/>
				<TextField
					value={repPassword}
					name="repPassword"
					type="password"
					placeholder="Повтор пароля"
					onChange={onRepPasswordChange}
					label="Повтор пароля"
					error={repPasswordError}
				/>
				<button ref={submitButtonRef} disabled={!isBtnActive} type="submit">
					{'Зарегистрироваться'}
				</button>
			</form>
		</div>
	);
};

export default Form;
