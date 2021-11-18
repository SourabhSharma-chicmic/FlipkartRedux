const Input = (props) => {
  return (
    <>
     
      <div className="form-group ">
       
        <input
          
          type={props.type}
          className={props.className}
          name={props.name}
          placeholder={props.placeholder}
          autoComplete={props.autoComplete|| 'off'}
          onChange={props.onChange}
          required
          value={props.value}
          pattern={props.pattern}
          title={props.title}
        />
      </div>
    </>
  );
};

export default Input;
