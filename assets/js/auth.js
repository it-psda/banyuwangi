function getUser() {

  return JSON.parse(
    localStorage.getItem('user')
  );

}


function checkLogin() {

  const user = getUser();

  if(!user) {

    location.href = '/login.html';

  }

}


function logout() {

  localStorage.removeItem('user');

  location.href = '/login.html';

}