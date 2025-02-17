import {motion} from "motion/react"

const Textbox = ({text}) =>{
    return(
    <motion.div
      className="bg-yellow-background rounded-md md:rounded-lg text-sm sm:text-base md:text-lg xl:text-xl text-center p-3 sm:p-4 md:p-6 xl:p-8 flex justify-center items-center font-bold w-full whitespace-nowrap shadow-md"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {text}
    </motion.div>
    )
}
export default Textbox;