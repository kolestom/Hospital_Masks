
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
        quantity: 10,
        vat: "27%",
        unit_price: 127
      }
    );
    console.log(resp.data)
  }

  useEffect(()=>{
    const init = async () => {
      const response = await axios.get("http://localhost:7777/api/orders/allhospitals")
      setAllHospitals(response.data)
    }
    init()
  }, [])

  const getOrderHistory = async () => {
    let response = await axios.post("http://localhost:7777/api/orders/order_history",{
      hospitalID: allHospitals[1].id
    })
    console.log(response.data)
  }