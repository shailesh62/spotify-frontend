const TextWithHover = ({displayText, active }) => {
  return (
    <div className="flex items-center justify-start cursor-pointer">
      <p className={`${active?"text-white":"text-gray-500"}  hover:text-white text-lg`}>{displayText}</p>
    </div>
  );
};

export default TextWithHover;
