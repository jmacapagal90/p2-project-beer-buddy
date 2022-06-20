import { useEffect, useState } from "react"
import LoginForm from './LoginForm'

const LoginPage = ({helpLogin}) => {
    return (
        <LoginForm helpLogin={helpLogin} />
    )
}
export default LoginPage