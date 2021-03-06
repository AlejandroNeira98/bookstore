const CHECK_STATUS = 'bookstore/books/CHECK_STATUS';

export default function reducer(state = [], action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
}

export function checkStatus() {
  return { type: CHECK_STATUS };
}
