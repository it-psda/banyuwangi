async function apiGet(params = '') {

  const response = await fetch(
    API_URL + params
  );

  return await response.json();

}


async function apiPost(data = {}) {

  try {

    const response = await fetch(API_URL, {

      method: 'POST',

      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(data)

    });

    return await response.json();

  } catch(err) {

    console.log(err);

    return {
      status: false,
      message: err.toString()
    };

  }

}