export type Unwrap<T extends Promise<unknown>> = T extends Promise<infer U> ? U : never;

// export type QueryType<T extends (...args: unknown[]) => unknown> = Unwrap<
// 	Promise<ReturnType<T>>
// >;

export type AppUser = {
	id: number;
	email: string;
};

export type UploadPostInput = {
	content: string;
	image: FileList;
};

export type UploadPostResponse = {
	postId: number;
};

export type QueryPostsResponse = {
	userId: number;
	postId: number;
	imgSrc: string;
	content: string;
	createdAt: string;
	updatedAt: string;
};
