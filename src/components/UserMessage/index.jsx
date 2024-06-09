import Loader from "../Loader";
import CustomButton from "../Button";

const UserMessage = ({ setShowMessage, messageType }) => {
  return (
    <div className=" fixed inset-0 z-[1000] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300">
      <div className={`  relative px-4 py-10 md:min-w-[400px]  rounded bg-black font-sans text-base font-light leading-relaxed antialiased  p-5 border-2 ${messageType === "error" ? "border-red-800" : "border-primary"}`}>
        {messageType === "loading" ? (
          <div className="flex flex-col items-center">
            <Loader />
            <p className="text-tertiary font-medium">Sending message</p>
          </div>
        ) : (
          <div className="text-center">
            <h2 className={`mb-3 text-2xl md:text-3xl  text-xl font-medium ${messageType === "success" ? `text-primary` : `text-red-700`}`}>{messageType === "success" ? `Message Sent` : `Ops an error has occurred. PLease try again`}</h2>
            <CustomButton onClick={() => setShowMessage(false)} className="mt-5 bg-secondary text-black hover:bg-black hover:text-secondary">
              Close
            </CustomButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMessage;
