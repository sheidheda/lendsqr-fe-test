import React, { useState } from 'react'
import LoginBanner from '../../component/loginbanner/Index'
import LoginForm from '../../component/loginform/Index'
import { useNavigate} from "react-router-dom";




const Index: React.FC = () => {
  const [type, setType] = useState<string>('password');
  const [showText, setShowText] = useState<string>('show');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('')

  const navigate = useNavigate();

  const login = (e: React.FormEvent, email: string, password:string)=>{
    setErrorMsg('')
    e.preventDefault();
    setIsLoading(true)
    
    if(email === 'test' && password === 'test' ){
      setTimeout(()=>{
        setIsLoading(false);
        navigate('/dashboard')
      }, 1500)
    }else{
      setErrorMsg('Wrong login credentials.... Kindly try again')
      setTimeout(()=>{
        setIsLoading(false);
      }, 1500)
    }
  }
  return (
    <div className="login_container">
      <LoginBanner />
      <LoginForm setType={setType} type={type} showText={showText} setShowText={setShowText} isLoading={isLoading} login={login} errorMsg={errorMsg} />
    </div>
  )
}



export default Index