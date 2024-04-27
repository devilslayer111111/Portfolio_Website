import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Crafting Your Unique Identity</h2>
          <p>
          Every brand has a story. What's yours? We delve deep into what makes your business stand out—your ethos, your strengths, your market. We then translate this into a visual and verbal identity that speaks directly to your audience's desires and needs.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Consistency Across All Touchpoints</h2>
          <p>
          Your brand should be recognizable wherever your customers find you. This consistency extends from your website and social media to your physical products and packaging. We ensure that your brand's voice and visual identity are cohesive and aligned across all platforms.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Engaging and Retaining Your Audience</h2>
          <p>
          Branding isn't a one-time effort but a continuous process of engagement, refinement, and evolution. We help you keep your brand fresh and relevant, adapting to changing market conditions and customer preferences while staying true to your core values.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Strategic Brand Positioning</h2>
          <p>
          Where does your brand fit in the competitive landscape? We analyze your market positioning and help you find the sweet spot that appeals to your target demographic. This strategic positioning is crucial for long-term growth and sustainability.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
