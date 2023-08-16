export const dateStringToDate = (dateString: string): Date => {
	const [day, month, year] = dateString.split('/').map((v) => parseInt(v));
	return new Date(year, month - 1, day);
};
