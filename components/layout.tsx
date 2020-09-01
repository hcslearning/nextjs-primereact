import Menu from "./menu";

export default function Layout(props) {
    return (
        <div className="container">
            <header>
                <Menu />
            </header>
            { props.children }
        </div>
    )
}