export default {
  home: '/',
  contact: '/contact',
  users: '/users',
  userProfile(username: string) {
    return `/users/${username}`;
  },
  userProfileEdit(username: string) {
    return `/users/${username}/edit`;
  },
};
