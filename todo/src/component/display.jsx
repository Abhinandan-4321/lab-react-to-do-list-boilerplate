export default function display(props){
    const data = props.todoItem
    let newlist = data.map((el)=>{
        return <div className = "MainDiv" key={el.Key}>
            <input  className = "input" type="text" id = {el.Key} value = {el.description} 
            onChange = {(e)=>{
                props.handleUpdate(e.target.value,el.Key)
            }}/>
            <button className = "delete" onClick = {()=>{props.handleDelete(el.Key)}}>Delete Item</button>
        </div>
    })

    return (
        <div>
            {newlist}
        </div>
    )
}