export const OPENED_NAVBAR = 'OPENED_NAVBAR';
export const CLOSED_NAVBAR = 'CLOSED_NAVBAR';

export const closeNavbar = (isClicked) => {
	return {
		type:CLOSED_NAVBAR,
		payload:isClicked
	}
}
export const openNavbar = (isClicked) => {
	return {
		type:OPENED_NAVBAR,
		payload:isClicked
	}
}