import { motion, AnimatePresence } from "framer-motion";
import { type ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  routeKey: string;
}

/**
 * Slash-style page transition with logo popup in the middle.
 * Slower animation with logo fade in/out and scale effect.
 */
export const PageTransition = ({ children, routeKey }: PageTransitionProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={routeKey}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        {/* Slash overlay - sweeps in, then out */}
        <motion.div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[60] origin-left bg-primary"
          style={{ clipPath: "polygon(0 0, 100% 0, 88% 100%, 0% 100%)" }}
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[59] origin-right bg-foreground"
          style={{ clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)" }}
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
