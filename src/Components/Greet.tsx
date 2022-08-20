type Greetprops = {
  firstname: string
  age: number
}

const Greet = (props: Greetprops) => {
  return(
      <h1>Hello I am {props.firstname} and {props.age}</h1>
  )
}
export default Greet