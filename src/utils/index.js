export const createAction = (type, payload) => {
	if (typeof typeof type !== 'string') {
		throw Error('type must be string.');
	}
	return { type, ...payload };
};
