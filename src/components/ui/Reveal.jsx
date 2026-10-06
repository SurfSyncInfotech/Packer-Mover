import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function Reveal({ children, className, delay = 0, as = "div", lift = false }) {
  const reduce = useReducedMotion();
  const Comp = motion[as] || motion.div;
  const hover = lift ? { y: -8, transition: { duration: 0.28, ease } } : undefined;

  if (reduce) {
    return <Comp className={className}>{children}</Comp>;
  }

  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={hover}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </Comp>
  );
}
