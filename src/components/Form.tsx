import jsPDF from 'jspdf';
import React, {Fragment,useState} from 'react';


const Form = () => {

    const [data, setData] = useState({
        name: '',
        last_name: ''
    })
   
    const handleInputChange = (event:any) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }
    //Generate a  pdf file with the data 
    const handleSubmit = (event:any) => {
        event.preventDefault()
        
        console.log(data)
        const doc = new jsPDF({
            orientation: 'landscape',
            unit: 'px',
            format: [500, 500]
        })
        doc.text(`${data.name} ${data.last_name}`,200 ,30)
        doc.save('test.pdf')
        
    }

  
    
    return (
        <Fragment>
            <form  onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Nombre</label>
                    <input type="text" onChange={handleInputChange} className='form-control' name='name' placeholder='Nombre' />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Apellidos</label>
                    <input type="text" className='form-control' onChange={handleInputChange}  name='last_name' placeholder='Apellidos' />
                </div>
                <div className='btn-group' >
                    <button type="submit" className='btn btn-primary'>Generar</button>
                </div>
            </form>
            <div id='congreso' hidden className="container" >
            <div className="row">
                <div className="col-6">
                    <div className="card text-center">
                        <div className="card-header">
                            Congreso de idalgo
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Se Conmemora</h5>
                            <p className="card-text">Se da este reconocimiento por participar en el congreso
                            a el participante  {data.name}  {data.last_name} </p>
                            
                        </div>
                        <div className="card-footer text-muted">
                            
                        </div>
                </div>
                </div>
            </div>
        </div>
        </Fragment>
    )
}

export default Form;

