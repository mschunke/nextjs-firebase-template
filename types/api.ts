export type ApiResponse<T> = ApiSuccess<T> | ApiError;

export type ApiSuccess<T> = {
	success: true;
	data: T;
	status: number;
};

export type ApiError = {
	success: false;
	message: string;
};
