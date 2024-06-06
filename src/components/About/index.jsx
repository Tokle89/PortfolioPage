const AboutMe = () => (
  <section className="my-40 flex flex-col-reverse lg:flex-row  gap-10 items-center ">
    <div className="flex-1 space-y-4">
      <h3 className="text-3xl md:text-4xl mb-10 font-semibold text-primary">About Me:</h3>
      <p className="md:text-xl text-tertiary">Hello my name is Fredrik Tokle, I am 34 years old. I recently graduated Front-end Development from Noroff School of Technology and Digital Media.</p>
      <p className="md:text-xl text-tertiary">
        These last years have been a rollercoaster of stress, learning, chaos, growth, and joy. Combining working full time and studying full time has been a challenge, but I have learned so much and I am so grateful for the opportunity to learn and grow as a developer and a person. And now, I can`t
        wait to start my career as a Front-end Developer.
      </p>
      <p className="md:text-xl text-tertiary">
        When I am not working or coding, I like to spend my time training, watching Formula 1, and gaming. As you can see from my picture, I have been a gamer almost my entire life. I also enjoy spending time with my family and friends, traveling, and creating wonderful experiences and memories.
      </p>
    </div>
    <div>
      <img src={"/images/fredrik.jpg"} alt="Fredrik Tokle" className="rounded-full w-[200px] h-[200px] md:w-[380px] md:h-[380px] object-cover" />
    </div>
  </section>
);

export default AboutMe;
