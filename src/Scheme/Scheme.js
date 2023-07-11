import * as yup from 'yup';

export const loginChangeScheme = yup
	.string()
	.max(20, 'Должно быть не более 20 символов')
	.matches(
		/^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/,
		'Email введён не корректно. Пример корректного test@test.test',
	);

export const passwordChangeScheme = yup
	.string()
	.min(3, 'Должно быть не менее 3 символов')
	.max(20, 'Должно быть не более 20 символов')
	.matches(
		/^(?=.*[A-Z])/,
		'Пароль должен содержать хотя бы одну латинскую букву в верхнем регистре',
	)
	.matches(/^(?=.*[0-9])/, 'Пароль должен содержать хотя бы одну цифру');

export const validateAndGetErrorMessege = (scheme, value) => {
	let errorMessege = null;

	try {
		scheme.validateSync(value);
	} catch ({ errors }) {
		errorMessege = errors[0];
	}

	return errorMessege;
};
