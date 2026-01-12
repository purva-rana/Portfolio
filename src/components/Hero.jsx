import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { useTypewriter } from "../hooks/useTypewriter";

const containerVariants = {
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  const headline = "Hi! I'm Purva Rana";
  const { typedText: typed, isDone: done } = useTypewriter(headline);

  const subline =
    "I build human-centered intelligent systems at the intersection of applied AI, Human-AI Collaboration, and spatial computing (AR/VR).";
  
  const credibility =
    "Research-driven systems • real-world constraints • design-forward engineering";


  return (
    <section
      id="hero"
      className="relative flex items-center w-full px-6 py-20 lg:px-8"
    >
      
      <div className="mx-auto grid items-center gap-12 md:grid-cols-3 max-w-5xl">
        {/* Text Content: Ordered first for mobile, centered on mobile */}
        <div className="z-10 max-w-xl text-center md:text-left md:col-span-2">
          <span className="sr-only">
            {headline} — {subline}
          </span>

          <h1
            className="text-4xl font-extrabold leading-tight sm:text-5xl"
            aria-hidden="true"
          >
            {typed}
            {!done && (
              <span className="inline-block ml-1 animate-caret">|</span>
            )}
          </h1>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={done ? "visible" : "hidden"}
            className="mt-4"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-300"
            >
              {subline}
            </motion.p>

             <motion.p
              variants={itemVariants}
              className="mt-3 text-sm tracking-wide text-slate-400"
            >
              {credibility}
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8">
              <ScrollLink
                to="projects"
                smooth
                offset={-80}
                className="inline-block"
              >
                <motion.button
                  className="btn-primary"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  Explore My Work
                </motion.button>
              </ScrollLink>
            </motion.div>
          </motion.div>
        </div>

        {/* Hero Art*/}
        <div
          className="relative flex items-center justify-center"
          aria-hidden="true"
        >
          {/* <div className="h-64 w-full max-w-sm rounded-2xl bg-gradient-to-br from-[#7C5CFF] to-[#5DD3FF] shadow-2xl shadow-slate-900/50 md:h-72 md:max-w-md" /> */}
          <div className="rounded-2xl bg-gradient-to-br from-[#7C5CFF] to-[#5DD3FF] p-1 shadow-2xl shadow-slate-900/50">
            <img
              src="/Purva.jpg"
              alt="A portrait of Purva Rana"
              className="h-64 w-64 rounded-[14px] object-cover md:h-72 md:w-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
