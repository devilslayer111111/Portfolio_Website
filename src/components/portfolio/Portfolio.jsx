import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "React Commerce leverages the robust, component-based architecture of React to transform e-commerce platforms into dynamic, efficient, and highly interactive online stores. This approach enhances user interfaces, allowing for real-time updates and a seamless shopping experience that keeps customers engaged. React Commerce is scalable and flexible, accommodating growth and new features without disrupting existing functionalities. It also supports advanced SEO strategies through server-side rendering or static site generation, ensuring content is easily discoverable by search engines. Additionally, React's virtual DOM optimizes page performance, essential for maintaining fast response times that enhance user satisfaction and drive conversions. For business owners, this means a cost-effective, maintainable solution that not only meets modern consumer expectations but also stands out in a competitive digital marketplace.",
  },
  {
    id: 2,
    title: "healthFood Website",
    img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    desc: "A health food website created using HTML and CSS offers a streamlined and visually appealing platform to promote healthy eating and wellness products. By utilizing HTML, the site's structure is meticulously organized, featuring sections like Home, About, Menu, and Contact Us, each designed to provide essential information and engage visitors effectively. CSS plays a crucial role in enhancing the visual appeal and usability of the website. It ensures that the layout is responsive, adapting seamlessly to different devices and screen sizes, which is vital for reaching a broader audience. The use of CSS also allows for the implementation of engaging design elements such as hover effects on menu items, smooth transitions, and a cohesive color scheme that reflects the health-conscious brand. Together, HTML and CSS provide a solid foundation for a health food website, making it accessible, easy to navigate, and aesthetically pleasing, thereby enhancing the overall user experience and supporting the business's goal to promote healthier lifestyle choices.",
  },
  {
    id: 3,
    title: "Chatly",
    img: "https://images.pexels.com/photos/7129718/pexels-photo-7129718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "A Node.js chat application with room functionality provides a robust platform for real-time communication across different chat rooms, each serving as a separate space for interaction among users. Utilizing technologies like Socket.IO, the application facilitates instant messaging without the need for page refreshes, enhancing user experience by maintaining a dynamic flow of conversation. The architecture of such an application involves a server-side component built on Node.js that handles incoming and outgoing messages, manages user connections, and ensures that messages are only visible to users within the same room. This setup not only supports real-time data transmission but also allows for complex features such as user validations and room management. The use of JavaScript and Ajax on the client side ensures seamless interaction, making the chat application responsive and intuitive. This type of application is ideal for creating differentiated communication channels within a community, providing users with the privacy and specificity of multiple chat environments under one platform.",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/4526424/pexels-photo-4526424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "A music app developed using React for the frontend and Node.js for the backend offers a seamless and interactive experience for streaming music. React's component-based architecture allows the user interface to be both dynamic and responsive, enabling smooth interactions such as playing tracks, creating playlists, and searching for music without reloading the page. This provides an immersive user experience that keeps listeners engaged. On the server side, Node.js handles API requests efficiently, managing user data, streaming operations, and interactions with external music databases and services. The integration of Node.js ensures that the server can handle high volumes of concurrent data requests with low latency, which is essential for a music streaming service. Together, React and Node.js create a powerful combination, allowing for quick development cycles and a highly scalable architecture. This setup not only enhances the performance of the app but also makes it highly maintainable and adaptable to new features like personalized music recommendations, social sharing capabilities, and more, making it a robust solution for a modern music streaming platform.",

  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
