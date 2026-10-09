import { motion } from "framer-motion";

function App() {
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh"}}>
      
      <motion.div
        style={{
          width:120,
          height:120,
          background:"tomato"
        }}
        
        initial={{
          y: -300,
        }}

        animate={{
          y:0
        }}

        transition={{
          duration: 2,
          type: "spring",
          stiffness: 120,
        }}
      />

    </div>
  );
}

export default App;