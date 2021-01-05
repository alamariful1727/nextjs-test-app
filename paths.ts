export default {
  home: '/',
  contact: '/contact',
  movies: '/movies',
  singleMovie(id: string) {
    return `/movies/${id}`;
  },
  userProfile(username: string) {
    return `/${username}`;
  },
  userProfileEdit(username: string) {
    return `/${username}/edit`;
  },
};
