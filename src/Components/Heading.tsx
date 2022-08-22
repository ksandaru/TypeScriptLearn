type HeadProps ={
  children: string
}

const Heading = (props: HeadProps) => {
  return(
      <div style={{color: 'yellowgreen', backgroundColor:'black'}}>
      <h1>I am heading</h1>
      <h1>{props.children}</h1>
      </div>
  )
}
export default Heading