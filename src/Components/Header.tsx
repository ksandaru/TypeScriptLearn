//use 'type' instead of 'interface' in projects, use 'interface' in libraries
export interface Props {
    title: string
    color?: string
}

const Header = (props: Props) => {
    return (
        <header>
            <h1>Hello</h1>
            <h1 style={{color: props.color ? props.color : 'blue'}}>{props.title}</h1>
        </header>

    )

}
export default Header;