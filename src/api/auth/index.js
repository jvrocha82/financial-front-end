
const auth = {}
auth.login = async (login) => {
  var myHeaders = new Headers();
  var res
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "username": login.email,
    "password": login.password
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  await fetch("https://localhost:7004/Authentication", requestOptions)
    .then(response => response.text())
    .then(result => res = JSON.parse(result))
    .catch(error => console.log('error', error));
  return res
}
auth.register = async (login) => {
  var myHeaders = new Headers();
  var res
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "username": login.email,
    "password": login.password
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  await fetch("https://localhost:7004/User", requestOptions)
    .then(response => response.text())
    .then(result => res = JSON.parse(result))
    .catch(error => console.log('error', error));

  return res
}
auth.verify = async function (token) {

  let res
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `bearer ${token}`);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  await fetch("https://localhost:7004/Authentication", requestOptions)
    .then(response => {
      res = response
    }
    )
    .catch(error => {
      console.log('error', error)
    }
    );

  return res?.ok
}
auth.getUser = async function (token) {
  let res
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `bearer ${token}`);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  await fetch("https://localhost:7004/User", requestOptions)
    .then(response => response.text())
    .then(result => res = JSON.parse(result))
    .catch(error => {
      console.log('error', error)
    }
    );
  debugger
  return res
}
export default auth;