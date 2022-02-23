const data = [
  {
    name: 'pig'
  },
  {
    name: 'dog'
  },
  {
    name: 'chicken'
  },
  {
    name: 'pig1'
  },
  {
    name: 'dog1'
  },
  {
    name: 'chicken1'
  },
  {
    name: 'pig2'
  },
  {
    name: 'dog2'
  },
  {
    name: 'chicken2'
  },
  {
    name: 'pig3'
  },
  {
    name: 'dog3'
  },
  {
    name: 'chicken3'
  },
]

function fetchAnimalsList(country) {
  return new Promise((resolve) => {
    let list = [];
    console.log(country)
    setTimeout(() => {
      switch (country) {
        case 'China':
          list = data.slice(0,3)
          break;
        case 'JP':
          list = data.slice(3,6)
          break;
        case 'USA':
          list = data.slice(6,9)
          break;
        case 'England':
          list = data.slice(9,12)
          break;
        default:
          list = data.slice()
          break;
      }

      resolve(list)
    }, 1000);

  })
}

export {
  fetchAnimalsList,
}