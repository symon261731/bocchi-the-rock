const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b98a525a29msh07058884f2edee2p190c63jsne34f6cf0a54a',
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
  },
};

const needAlbum = 'https://deezerdevs-deezer.p.rapidapi.com/playlist/10907695602';

export const deezerApi = {

  getAlbum() {
    return fetch(needAlbum, options)
      .then((response) => response.json())
      .catch((err) => console.error(err));
  },
};
