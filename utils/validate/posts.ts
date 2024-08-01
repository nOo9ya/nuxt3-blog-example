import type { IPostElement } from "~/types";

export const formValidated = (form: Object, targetElement: IPostElement[]) => {
	const errors = ref({});
	errors.value = {};

	targetElement.forEach(({ id, message }) => {
		if (!form.value[id]) {
			Object.defineProperty(errors.value, id, {
				value: message,
				writable: true,
				enumerable: true,
				configurable: true,
			});
			// errors.value[id] = message;
		}
	});

	return errors.value;
};
