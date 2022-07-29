import React, {useState, useRef} from 'react';
import Message from './Message';

const InputForm = () =>{
  const inputRef = useRef('');
  const [input, setInput] = useState(null)

  function submitHandler(event) {
    event.preventDefault();
    setInput(inputRef.current.value);
  }

  let content = (<p> </p>)

  if(input){
    content = (<Message msg={input} />)
  }
  
  return (
    <div className='container-fluid m-auto'> 
    <form onSubmit={submitHandler}>
      <div className="input-group my-3 px-5">
        <div className="input-group-prepend">
          <span className="input-group-text px-4" id="inputGroup-sizing-default"> Masukkan Password </span>
        </div>
        <input type="text" required ref={inputRef} className="form-control rounded" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
      </div>

      <button type="submit" className="btn btn-primary"> Lihat Pesan! </button>
    </form>
    {content}
    </div>
  )
};

export default InputForm;