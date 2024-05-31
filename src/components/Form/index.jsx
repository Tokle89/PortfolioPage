import { useForm } from "react-hook-form";
import { useRef } from "react";
import CustomButton from "../Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const serviceKey = import.meta.env.VITE_SERVICE_ID;
  const templateKey = import.meta.env.VITE_TEMPLATE_ID;
  const PublicKey = import.meta.env.VITE_PUBLIC_KEY;

  const schema = yup.object({
    user_name: yup.string().min(3, `Name must be at least 3 characters`).required(`Please  enter your name`),
    user_email: yup.string().email().required(`Please enter your email`),
    message: yup.string().min(1, `Message must be at least 1 characters`).required(`Please enter your message`),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const form = useRef();
  const onSubmit = () => {
    console.log("working");
    emailjs
      .sendForm(serviceKey, templateKey, form.current, { publicKey: PublicKey })
      .then(() => {
        reset();
        console.log("success");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className=" bg-quaternary rounded border border-primary w-full max-w-[600px] py-5">
      <h2 className="text-primary font-semibold text-3xl md:text-5xl text-center mb-5">Send me a message</h2>
      <form ref={form} className=" flex flex-col " onSubmit={handleSubmit(onSubmit)}>
        <div className="min-h-20 px-5 space-y-3 my-4 text-xl md:text-2xl ">
          <label htmlFor="name" className="text-white ">
            Name
          </label>
          <p className="text-red-500  font-medium mb-1">{errors.name?.message}</p>
          <input {...register("user_name")} type="text" name="user_name" placeholder="Name" className=" bg-black text-xl text-white  placeholder-xl  h-[50px] w-full block rounded border border-primary p-2 focus:outline-none focus:border-4 focus:border-primary " />
        </div>
        <div className="min-h-20 px-5 space-y-3 my-5 text-xl md:text-2xl">
          <label htmlFor="email" className="text-white ">
            Email
          </label>
          <p className="text-red-500 text-xl font-medium my-1">{errors.email?.message}</p>
          <input {...register("user_email")} type="text" name="user_email" placeholder="Email" className="box-border bg-black text-xl  placeholder-xl  text-white h-[50px] w-full block rounded border border-primary p-2 focus:outline-none focus:border-4 focus:border-primary " />
        </div>
        <div className=" px-5 space-y-3 my-5 text-xl md:text-2xl">
          <label htmlFor="message" className="text-white ">
            Message
          </label>
          <p className="text-red-500 text-xl  font-medium my-1">{errors.message?.message}</p>
          <textarea {...register("message")} name="message" placeholder="Message" className="box-border min-h-[120px] bg-black text-xl  placeholder-xl  text-white  w-full block rounded border border-primary p-2 focus:outline-none focus:border-4 focus:border-primary " />
        </div>

        <div className="mt-5 px-5">
          <CustomButton type="submit" className=" border-secondary bg-secondary text-black hover:bg-black hover:text-secondary ">
            Send
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
