const initialState = {
  info: {
    name: 'Kolya',
    age: 25,
    city: 'Kozlovsk',
    work: 'Builder'
  },
  friends: [
    {
      id: 1,
      name: 'Sonya',
      age: 20,
      city: 'Petrovsk',
      work: 'Model'
    },
    {
      id: 2,
      name: 'Tolya',
      age: 28,
      city: 'Moscow',
      work: 'Bloger'
    },
    {
      id: 3,
      name: 'Nikita',
      age: 24,
      city: 'Magadan',
      work: 'Barber'
    },
  ]
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addFriend':
      return state;

    default:
      return state;
  }
}