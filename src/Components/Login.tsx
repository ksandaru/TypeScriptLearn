type UserProps = {
    user: {
        userid: string
        token: string
    }
}
const Login = (props: UserProps) => {
    return (
        <div>
            <h1>Welcome, {props.user.userid}</h1>
            <h2>Token: {props.user.token}</h2>
            <div>

            </div>
        </div>
    )
}
export default Login