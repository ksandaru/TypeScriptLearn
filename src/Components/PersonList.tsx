type nameProps = {
    names: {
        first: string,
        last: string
    }[]
}
const PersonList = (props: nameProps) => {
    return (
        <div>
            {props.names.map(name => {
                return (
                    <div key={name.first}>
                        <p>{name.first}</p>
                        <p>{name.last}</p>
                    </div>

                )
            })}
        </div>
    )
}
export default PersonList