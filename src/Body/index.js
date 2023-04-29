import "./styles.css"

function Body() {
  return (
    <>
      <div className="formContainer">
        <form className="form"> 
        <h2 className="title">Web Notas</h2>
          <p className="description">Crie uma nova anotação</p>
          
            <div className="formGroup">
              <label className="label">Título</label>
              <input className="input" type="text"/>
            </div>

            <div className="formGroup">
              <label className="label">Descrição</label>
              <textarea className="textarea"></textarea>
            </div> 

            <button className="button" type="submit"> + Adicionar nota + </button>

        </form>     

      </div>      
    </>
  )
}

export default Body;