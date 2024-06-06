import CustomButton from "../Button";
import StackCard from "../StackCard";

const Card = ({ title, description, stack, liveLink, repoLink, img }) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">
      <div className="text-tertiary space-y-8 flex-1">
        <h2 className="text-2xl md:text-4xl text-white font-semibold">{title}</h2>
        <div className="md:text-xl space-y-3">
          <h3 className=" text-primary font-semibold">Description</h3>
          <p className="text-tertiary">{description}</p>
        </div>
        <div className="md:text-xl space-y-3">
          <h3 className=" text-primary"> Stack</h3>
          <div className="flex flex-wrap gap-5">
            {stack.map(({ title, url }) => {
              return <StackCard title={title} url={url} key={title} />;
            })}
          </div>
          <div className="pt-10 flex gap-10">
            <a href={liveLink} target="_blank">
              <CustomButton className={"bg-secondary border-secondary text-black hover:bg-black hover:text-secondary"}>View live</CustomButton>
            </a>

            <a href={repoLink} target="_blank">
              <CustomButton className={"bg-black border-secondary text-secondary hover:bg-secondary hover:text-black"}>Github repo</CustomButton>
            </a>
          </div>
        </div>
      </div>
      <div>
        <img src={img} alt={title} className="rounded w-full max-w-[600px] h-full md:h-96 object-cover" />
      </div>
    </div>
  );
};

export default Card;
