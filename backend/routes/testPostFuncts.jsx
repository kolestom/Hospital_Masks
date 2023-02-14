
const handleClick = async () => {
    const resp = await axios.post('http://localhost:7777/api/users/register', {
      name: 'Jancsi',
      username: 'jancsi',
      email: 'email@fsdsd.hu',
      password: 'jelszo'
    })
    console.log(resp.data)
  }

  const createHonved = async() =>{
    const resp = await axios.post('http://localhost:7777/api/create-hospital')
    console.log(resp.data)
  }

  const createOrder = async() => {
    const resp = await axios.post(
      "http://localhost:7777/api/orders/create_order",
      {
        hospitalID: 1770327103,
        quantity: 10
      }
    );
    console.log(resp.data)
  }