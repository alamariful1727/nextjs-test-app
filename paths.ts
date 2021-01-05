export default {
  home: '/',
  contact: '/contact',
  users: '/users',
  userProfile(id: string | number) {
    return `/users/${id}`;
  },
  userProfileEdit(id: string | number) {
    return `/users/${id}/edit`;
  },
};
