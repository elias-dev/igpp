const axiosInstance = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*"
  }
});
axios.get('https://api.instagram.com/oauth/authorize?client_id=553855078936098&redirect_uri=https://elias-dev.github.io/igpp/&scope=user_profile,user_media&response_type=code')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  /*axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';  
axios.defaults.headers.common['Access-Control-Allow-Methods'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'access-control-allow-headers,access-control-allow-methods,access-control-allow-origin,authorization';  
*/