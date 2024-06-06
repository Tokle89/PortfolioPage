import Card from "../../components/Card";
import RenderPageHeadInfo from "../../hooks/usePageHeadHandler";

const Portfolio = () => {
  RenderPageHeadInfo("FT | Portfolio", "Here you can find Fredrik Tokle's portfolio of projects.");
  return (
    <main className="max-w-7xl w-full mx-auto my-40 px-5">
      <h1 className="text-3xl font-semibold md:text-4xl text-primary mb-20">Portfolio:</h1>
      <div className="space-y-40">
        <Card
          title="Holidaze"
          description=" Holidaze is a bookings website that is offering two key functionalities: a customer-facing side where users can search, browse, and book venues, and update or delete their bookings, and an admin-facing side where users can register as venue managers to create, delete, and manage their
         own venues and bookings."
          stack={[
            { title: "React.js", url: "https://cdn.simpleicons.org/react/#61DAFB" },
            { title: "Tailwind", url: "https://cdn.simpleicons.org/tailwindcss/#06B6D4" },
          ]}
          liveLink="https://the-holidaze.netlify.app/"
          repoLink="https://github.com/Tokle89/holidaze"
          img="/images/holidaze.jpg"
        />
        <Card
          title="E-com"
          description=" E-com is an e-commerce site created using React and the Noroff E-Commerce API"
          stack={[
            { title: "React.js", url: "https://cdn.simpleicons.org/react/#61DAFB" },
            { title: "CSS3", url: "https://cdn.simpleicons.org/css3/#1572B6" },
          ]}
          liveLink="https://spontaneous-melomakarona-03bd68.netlify.app/"
          repoLink="https://github.com/Tokle89/js-frameworks_CA"
          img="/images/e-com.jpg"
        />
        <Card
          title="Auction House"
          description="Auction House Is and Auction house web app where users can look trough and bid on items auctioned by other users. And put their own items up for auction."
          stack={[
            { title: "HTML5", url: "https://cdn.simpleicons.org/html5/#E34F26" },
            { title: "JavaScript", url: "https://cdn.simpleicons.org/javascript/#F7DF1E" },
            { title: "Bootstrap", url: "https://cdn.simpleicons.org/bootstrap/#7952B3" },
            { title: "Sass", url: "https://cdn.simpleicons.org/sass/#CC6699" },
          ]}
          liveLink="https://rococo-churros-9ca4d1.netlify.app/"
          repoLink="https://github.com/Tokle89/auction-house"
          img="/images/auction-house.jpg"
        />
      </div>
    </main>
  );
};
export default Portfolio;
