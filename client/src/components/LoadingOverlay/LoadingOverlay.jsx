import React from "react";
import { motion, AnimatePresence } from "motion/react";
import ClipLoader from "react-spinners/ClipLoader";

export const LoadingOverlay = ({ isLoading, delay, zIndex }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoading ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: delay || 1 }}
          style={{ zIndex: zIndex || 10 }}
          className="bg-[#333333] absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center border border-gray-500"
        >
          <ClipLoader color="white" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
