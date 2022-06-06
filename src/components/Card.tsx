import Form from './Form';
function Card(){
    return(
        <div className="card text-center">
            <div className="card-header">
                Ingrese los datos correspondientes
            </div>
            <div className="card-body">
                <Form/>
            </div>
            <div className="card-footer text-muted">
            power by: React Create at: Bonifacio Juarez ceja
            </div>
        </div>
    )
}
export default Card;