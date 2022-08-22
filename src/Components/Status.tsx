type statusProps = {
    //status: string
    status: 'loading'|'success'| 'error'
}

const Status = (props: statusProps) => {

  let message;
  if(props.status === 'loading'){
      message = 'Loading...'
  } else if (props.status === 'success'){
      message = 'Data fetched successfully'
  }else if(props.status === 'error'){
      message = ' Error fetching data'
  }

  return(
      <div>
          <h1>status - {message}</h1>
      </div>
  )
}
export default Status