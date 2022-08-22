type Greetprops = {
  firstname: string
  isLoggedin: boolean
  //age is optional (bcz we added ? mark) and if do not need somewhere, we are free to neglect age.
  age?: number
  notifications?: number
}

const Greet = (props: Greetprops) => {
  const {notifications = 0} = props
  return(
      <h1>
      {props.isLoggedin ? `Welcome ${props.firstname} and Your age is ${props.age} notifications ${notifications}`: "welcome guest"}
      </h1>

  )
}

//Below, props are destructured.....
// const Greet = ({firstname, isLoggedin, age}: Greetprops) => {
//   const notifications = 0
//   return(
//       <h1>
//         {isLoggedin ? `Welcome ${firstname} and Your age is ${age} notifications ${notifications}`: "welcome guest"}
//       </h1>
//
//   )
// }

export default Greet