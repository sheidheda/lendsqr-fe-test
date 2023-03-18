import React, {useRef} from 'react'
import loading from '../../dist/img/loading.gif'


interface Props{
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  showText:string;
  setShowText:React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  errorMsg: string; 
  login: (e: React.FormEvent, email: string, password:string)=> void;
}


const Index: React.FC<Props> = ({type, setType, showText, setShowText, isLoading, login, errorMsg}) => {
  const toggleShow = ()=>{
    setType(type === 'password' ?'text' : 'password');
    setShowText( showText === 'show' ?'hide' : 'show');
  }

  const emailRef = useRef<HTMLInputElement>(null!);
  const passwordRef = useRef<HTMLInputElement>(null!);

  // console.log(emailRef.current?.value);
  
  return (
    <div className='loginform_container'>
     <form className="loginform">
      <h2>welcome!</h2>
      <p>Enter details to login</p>
      <input type="text" className="loginform__input" placeholder='Email' ref={emailRef} />
      <div className="pos_show">
        <input type={type} className="loginform__input" placeholder='Password' ref={passwordRef} />
        <span onClick={toggleShow}>{showText}</span>
      </div>
      <p>forget password</p>
      {isLoading  ?<button className='loginform__button'><img src={loading} alt="" width='30'/></button>
      :<button className='loginform__button' onClick={(e) =>{login(e, emailRef.current?.value, passwordRef.current?.value)}}>log in</button>}

      {errorMsg.length > 5 && <div className="error">{errorMsg}</div>}
      
     </form>
    </div>
  )
}

export default Index