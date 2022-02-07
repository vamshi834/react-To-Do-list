import React ,{useState}from 'react';
const Todolist =()=>{
   
    const [list, setList] = useState([]);
    const [input,setinput] = useState('');
    const handleSubmit =(e)=>{
        e.preventDefault();
        let currentList = list;
        currentList.push(input);
        setList(currentList);
        setinput('')
    }
    console.log(list)
    return(
        <div >
            <h1>To-do List</h1>
            <form onSubmit={handleSubmit}>
                <input style={{margin:'50px 10px 50px 0px', height:'50px',width:'500px', borderRadius:'10px',fontSize:'20px'}} onChange={(e)=>setinput(e.target.value)} value={input} placeholder="Enter your task"/>
                <button style={{height:'40px',width:'100px',backgroundColor:'#73C6B6', borderRadius:'10px'}} type="submit">Add To List</button>
            </form>
            <div>
              {
                  list && list.map((item)=>(
                        <text style={{height:'50px', width:'75%',display:'flex', flex:'wrap',backgroundColor:'#73C6B6',fontSize:'20px',margin:'10px 50px 10px 200px',borderRadius:'8px',flexDirection:'column' ,justifyContent:'center'}}>{item}</text>
                  ))
              }
            </div>
        </div>
          

    )
}
export default Todolist;