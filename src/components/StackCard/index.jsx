const StackCard = ({ title, url }) => (
  <div className="  border border-secondary h-[105px] w-[105px] rounded bg-quaternary flex flex-col items-center justify-center gap-2 ">
    <img height="32" width="32" src={url} alt="React.js" />
    <p className="text-base md:text-xl text-secondary">{title}</p>
  </div>
);

export default StackCard;
