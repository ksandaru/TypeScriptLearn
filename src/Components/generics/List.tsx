type ListProps = {
    items: string[],
    onClick: (value: string) => void
}

export const List = ({items, onClick}: ListProps) => {
return(
    <div>
        <h2>List of Items..</h2>
        {items.map((item, index)=>{
            return(
                <h3 key={index} onClick={()=> onClick(item)}>{item}</h3>
            )
        })}
    </div>
)
}