export const App_Title = 'Next App';

export const isEmpty = (obj: any) => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};
