export const chatSelector = state => state.chats.chats

export const messageSelector = state => state.messages.messages

export const user = state => state.user.user

export const userFriends = state => state.user.friends

export const postSelector = state => state.posts.posts

export const chatsLoading = state => state.posts.chatsLoading

export const loadingError = state => state.posts.loadingError