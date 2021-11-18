import Button from "../Components/Button";
import Input from "../Components/Input";
import React ,{useState} from 'react';

const RegisterForm = (props) => {

    const [users,setUsers] = useState(JSON.parse(localStorage.getItem('users'))||[]);

    const [formValid,setFormValid] = useState({
        fname: true, fmsg:'',
        lname: true , lmsg:'',
        email: true, emsg:'',
        password:true, pmsg:'',
        phone:true , mmsg:''
    })

    const [formData, setFormData] = useState({
        fname:'',
        lname:'',
        email:'',
        password:'',
        phone:''
    });

    

    const ChangeHandler=(event)=>{
        const {name, value} = event.target;
        if(name==='fname')
        {
            if(value=='')
            {
                setFormValid({...formValid, fname:false ,fmsg:'Cant leave empty'})
            }else{
                  value.match(/^([a-zA-Z]{3,10})$/)?(setFormValid({...formValid, fname:true ,fmsg:'Perfect'}) || setFormData({...formData ,[name]:value})):
                  value.match(/[\d\s\.$!£$^%*`~&-_=+|¡€#¢∞§¶•ªº–≠/]/)?setFormValid({...formValid, fname:false ,fmsg:'Cant add number or special character or space'}):
                  setFormValid({...formValid, fname:false ,fmsg:'min charcter is 3 and max is 10'})
                  console.log(formData.fname +' ' + value);
                  
            }
        }else if(name==='lname')
        {
           
                value.match(/^([a-zA-Z]{1,})([a-z\sA-Z]+)$/)?(setFormValid({...formValid, lname:true ,lmsg:'Perfect'}) ||setFormData({...formData ,[name]:value})):
                value.match(/[\d\.$!£$^%*`~&-_=+|¡€#¢∞§¶•ªº–≠/]/)?setFormValid({...formValid, lname:false ,lmsg:'Cant add number or special character or space'}):
                setFormValid({...formValid, lname:false ,lmsg:'Cant leave empty or cant have space in first  place or min is 2 '})
                
           
        }else if(name==='email')
        { 
            if(value=='')
            {
                setFormValid({...formValid, email:false ,emsg:'Cant leave empty '})
            }else{
                value.match(/^([a-z\d])([a-z\d\.-]+)?@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2-8})?$/)?(setFormValid({...formValid, email:true ,emsg:'Perfect'}) || setFormData({...formData ,[name]:value})):
                setFormValid({...formValid, email:false ,emsg:'Enter valid email address'})
            }
        }else if(name==='password')
        {
            if(value=='')
            {
                setFormValid({...formValid, password:false ,pmsg:'Cant leave empty '})
            }else{
                value.match(/([a-zA-Z\d\.$!£$^%*`~&-_=+|¡€#¢∞§¶•ªº–≠/]{6,14})/)?value.match(/[\.$!£$^%*`~&-_=+|¡€#¢∞§¶•ªº–≠/]{1,}/)?
                value.match(/[A-Z]+/)?value.match(/[\d]+/)? (setFormValid({...formValid, password:true ,pmsg:'Perfect!'}) || setFormData({...formData ,[name]:value})):
                setFormValid({...formValid, password:false ,pmsg:'Atleast 1 Number'}) :
                setFormValid({...formValid, password:false ,pmsg:'Atleast 1 Capital letter'}):
                setFormValid({...formValid, password:false ,pmsg:'Atleast 1 Special Character'}):
                setFormValid({...formValid, password:false ,pmsg:'min length is 6 and max is 14 or spaces not allowd'})
                
            }

        }else if(name=='phone') 
        {
            if(value=='')
            {
                setFormValid({...formValid,  phone:false ,mmsg:'Cant leave empty'})
            }else{
      
                value.match(/^([9|7|8|6])([0-9]{9})$/)?(setFormValid({...formValid, phone:true ,mmsg:'Perfect!'}) || setFormData({...formData ,[name]:value})):
                setFormValid({...formValid, phone:false ,mmsg:'Invalid Phone Number'})
                
            }
        }

        
    };

    const submitHandler =(event)=>{

        event.preventDefault();
        console.log(formData.fname +'outside')

        if(formData.fname && formData.lname && formData.password && formData.phone && formData.email)
        {
            const userObj = {
                name: formData.fname + ' ' + formData.lname,
                email: formData.email,
                password : formData.password,
                phone: formData.phone
            }
            console.log(userObj);
            
            setUsers((prev)=>{
                localStorage.setItem('users', JSON.stringify([...prev, userObj]));
                return [...prev,userObj];
            });

            



            setInterval(() => {
                props.panelHandler();
            }, 300);
            
           

        }else{
            alert('Cant Leave empty Feilds');
        }
       
    }
   



  return (
    <form onSubmit={submitHandler}>
      <Input  onChange={(event)=>{ChangeHandler(event)}} type="text" placeholder="First name" name="fname" className="form-control mt-5"/>
       {!formValid.fname?( <div className='row'><div className='col-lg-12 text-danger'>{formValid.fmsg} </div></div>):<p className='text-success m-lg-2'>{formValid.fmsg}</p>}

      <Input onChange={(event)=>{ChangeHandler(event)}} type="text" placeholder="Last name" name="lname" className="form-control mt-3"/>
       {!formValid.lname?( <div className='row'><div className='col-lg-12 text-danger'>{formValid.lmsg} </div></div>):<p className='text-success m-lg-2'>{formValid.lmsg}</p>}

      <Input onChange={(event)=>{ChangeHandler(event)}} type="email" placeholder="Email" name="email" className="form-control mt-3"/>
      {!formValid.email?( <div className='row'><div className='col-lg-12 text-danger'>{formValid.emsg} </div></div>):<p className='text-success m-lg-2'>{formValid.emsg}</p>}

      <Input onChange={(event)=>{ChangeHandler(event)}} type="password" placeholder="Password" name="password" className="form-control mt-3"/>
      {!formValid.password?( <div className='row'><div className='col-lg-12 text-danger'>{formValid.pmsg} </div></div>):<p className='text-success m-lg-2'>{formValid.pmsg}</p>}

      <Input onChange={(event)=>{ChangeHandler(event)}} type="number" placeholder="Mobile Number" name="phone" className="form-control mt-3"/>
      {!formValid.phone?( <div className='row'><div className='col-lg-12 text-danger'>{formValid.mmsg} </div></div>):<p className='text-success m-lg-2'>{formValid.mmsg}</p>}

      <Button type="submit" className="btn mt-5 me-3  btn-danger">
        Register
      </Button>

      <Button
        type="button"
        onClick={props.panelHandler}
        className="btn mt-5  btn-outline-secondary"
      >
        Existing User?Log In
      </Button>
    </form>
  );
};

export default RegisterForm;
