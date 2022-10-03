export type Unwrap<T extends Promise<unknown>> = T extends Promise<infer U> ? U : never;

// export type QueryType<T extends (...args: unknown[]) => unknown> = Unwrap<
// 	Promise<ReturnType<T>>
// >;

export type AppUser = {
	id: number;
	email: string;
	provider: string;
};

export type CreatePostResponse = {
	postId: number;
};

export interface QueryPostsResponse {
	id: number;
	content: string;
	imgUrl: string;
	createdAt: string;
	user: QueryPostResponseUser;
	comments?: Comment[];
	likes?: Likes;
}

export interface Comment {
	content: string;
	user: CommentUser;
}

export interface CommentUser {
	id: number;
	username: string;
}

export interface Likes {
	id: number;
	likes: number;
	user: Post;
	post: Post;
	liked: boolean;
}

export interface Post {
	id: number;
}

export interface QueryPostResponseUser {
	id: number;
	username: string;
	provider: string;
}
