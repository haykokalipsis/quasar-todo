import { Platform } from 'quasar';

export const delayed_autofocus = {
	// inserted hook
	inserted (el, binding) {
		let input = el.querySelector('.q-field__native');
		let delay = 0;

		if (Platform.is.cordova) {
			delay = 700;
			if (binding.value) {
				delay = binding.value.delayForCordova;
			}
		}

		setTimeout(() => {
			input.focus();
		}, delay);
	}
}
