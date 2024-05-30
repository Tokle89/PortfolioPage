import StackCard from "../StackCard";

const StackSection = () => (
  <section className="space-y-4 mb-40">
    <h2 className="text-3xl md:text-5xl text-primary mb-10">My Stack:</h2>
    <p className="md:text-2xl text-tertiary">Front-End:</p>
    <div className="flex flex-wrap gap-10">
      <StackCard title="HTML5" url="https://cdn.simpleicons.org/html5/#E34F26" />
      <StackCard title="CSS3" url="https://cdn.simpleicons.org/css3/#1572B6" />
      <StackCard title="Javascript" url="https://cdn.simpleicons.org/javascript/#F7DF1E" />
      <StackCard title="React.js" url="https://cdn.simpleicons.org/react/#61DAFB" />
      <StackCard title="Sass" url="https://cdn.simpleicons.org/sass/#CC6699" />
      <StackCard title="Tailwind" url="https://cdn.simpleicons.org/tailwindcss/#06B6D4" />
      <StackCard title="Bootstrap" url="https://cdn.simpleicons.org/bootstrap/#7952B3" />
      <StackCard title="Vite.js" url="https://cdn.simpleicons.org/vite/#646cff" />
    </div>
    <p className="md:text-2xl text-tertiary">Tools:</p>
    <div className="flex flex-wrap gap-10">
      <StackCard title="VS Code" url="https://cdn.simpleicons.org/visualstudiocode/#007ACC" />
      <StackCard title="Github" url="https://cdn.simpleicons.org/github/FFFFFF" />
      <StackCard title="Git" url="https://cdn.simpleicons.org/git/#F05032" />
      <StackCard title="Wordpress" url="https://cdn.simpleicons.org/wordpress/#21759B" />
      <StackCard title="Adobe XD" url="https://cdn.simpleicons.org/adobexd/#ff61f6" />
    </div>
  </section>
);
export default StackSection;
