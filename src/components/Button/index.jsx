const CustomButton = ({ className, onClick, children, type }) => {
  const baseClasses = "w-36 sm:w-40 font-semibold rounded border  transition-colors ease-in-out duration-200 text-base sm:text-xl py-2";
  return (
    <button onClick={onClick} type={type} className={`${baseClasses} ${className}`}>
      {children}
    </button>
  );
};

export default CustomButton;
