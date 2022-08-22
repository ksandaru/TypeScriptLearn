type ObjListProps<T> = {
    items: T[],
    onClick: (value: T) => void
}

export const ObjectList =<T extends {id: number, first: string, last: string}>({items, onClick}: ObjListProps<T>) => {
    return(
        <div>
            <h2>List of Items..</h2>
            {items.map((item, index)=>{
                return(
                    <div key={item.id} onClick={()=> onClick(item)}>
                       <h2>{item.id}-{item.first} {item.last}</h2>
                    </div>
                )
            })}
        </div>
    )
}