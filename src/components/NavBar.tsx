import '../css/NavBar.css'
const NavStyle = {
    backgroundColor: '#4b0082',
}
function NavBar(){
    return (
        <div>
            <nav  style={NavStyle} className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Congreso de Hidalgo</a>
            </div>
        </nav>
        </div>
    )
}

export default NavBar;