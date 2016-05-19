export const INCREMENTCOUNT = "INCREMENTCOUNT";
export const SETCOUNT = "SETCOUNT";

export function incrementCount() {
	return { type : INCREMENTCOUNT };
}

export function setCount(value) {
	return { type : SETCOUNT, value : value };
}