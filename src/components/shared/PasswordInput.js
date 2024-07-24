const PasswordInput = ({ label, placeholder }) => {
    return (
      <div className="passwordInputDiv flex flex-col space-y-2 w-full">
        <label for={label} className="font-semibold">
          {label}
        </label>
        <input
          type="password"
          placeholder={placeholder}
          className="p-2 border border-solid border-gray-300 rounded placeholder-gray-700 "
          id={label}
        />
      </div>
    );
  };
  
  export default PasswordInput;
  