import { useState, useEffect } from "react"
const LoginForm = ({ helpLogin}) => {
    const [message,setMessage] = useState('')
    const [data, setData] = useState()
    useEffect(() => {
        fetch('https://sheltered-beach-53138.herokuapp.com/users')
        .then(r => r.json())
        .then(d => setData(d))
    },[])
    const timeoutMessage = (message) => {
        setMessage(message)
        setTimeout(() => {setMessage('')}, 5000)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const [username, pass] = [e.target.username.value, e.target.pass.value]
        console.log(username)
        console.log(pass)
        const userData = getUser(username)
        if (!!userData){
            if (checkPass(userData, pass)){
                const orders = userData.orders 
                setMessage(`${userData.name} has spent a total of ${userData.spent}$ on beer, in ${orders} order${(orders===1)?'':'s'}.`)
                helpLogin()
                console.log(userData)
            } else {
                timeoutMessage('bad password try again')
            }
        } else {
            timeoutMessage('bad username try again')
        }
    }
    const checkPass = (userData, pass) => {
        return userData.password=== pass
    }
    const getUser = (username) =>{
        //this return USERDATA for specific user if the name matches
        //returns undefined otherwise
        const userData = data.find(user => user.name === username)
        return userData
    }
    const renderMessage = () => (
        <p>{message}</p>
    )
    



    return (
    <>
        <form onSubmit={handleSubmit}>
          <label>Username </label>
          <input type="text" name="username" required />
          <label>Password </label>
          <input type="password" name="pass" required />
          <input type="submit" value='Login In'/>
        </form>
        {renderMessage()}
    </>
    )
}

export default LoginForm