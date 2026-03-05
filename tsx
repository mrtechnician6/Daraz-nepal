import { motion } from 'framer-motion';

export const PrizeCard = ({ title, prize, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.5)" }}
    className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center"
  >
    <h3 className="text-gray-400 uppercase tracking-widest text-sm mb-2">{title}</h3>
    <p className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
      {prize}
    </p>
  </motion.div>
);
