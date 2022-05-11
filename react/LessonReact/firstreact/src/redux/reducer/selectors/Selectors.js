export const chatSelector = state => state.chats.chats

export const messageSelector = state => state.messages.messages

export const userInfo = state => state.user.info

export const userFriends = state => state.user.friends

export const postSelector = state => state.posts.posts

export const isLoading = state => state.posts.loading

export const loadingError = state => state.posts.error