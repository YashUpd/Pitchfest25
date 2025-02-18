import React from 'react';
import Marquee from 'react-fast-marquee';
import { motion, AnimatePresence } from 'motion/react';
import Davinder_Singh from '/assets/Davinder_Singh.png';
import Dhiren from '/assets/Dhiren.webp';
import Yash_Upadhyay from '/assets/Yash_Upadhya.webp';
import Tanuj_Dhakad from '/assets/Tanuj_Dhakad.webp';
import Palak_Wadhwani from '/assets/Palak_Wadhwani.webp';
import Irene from '/assets/Irene.webp';
import Harshit_Vyas from '/assets/Harshit_Vyas.webp';
import Nishant_Patel from '/assets/Nishant_Patel.webp';
import Naval_Srivastava from '/assets/Naval_Srivastava.webp';
import Rhea_Singh_Sud from '/assets/Rhea_Singh_Sud.webp';
import Sampurn_Gupta from '/assets/Sampurn_Gupta_.webp';
import Rakshit_Chauhan from '/assets/Rakshit_Chauhan.webp';
import Parth_Bansal from '/assets/Parth_Bansal_.webp';
import Akshat_Kabra from '/assets/Akshat_Kabra.webp';
import Sahil_Kumar from '/assets/Sahil_Kumar.webp';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1
    }
  }
};

const slideUpVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1.2
    }
  }
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};
const InfiniteCarousel = ({ members }) => {
  return (
    <motion.div
      className="carousel-container overflow-hidden relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
      }}
    >
      <div className="w-full h-96 py-6">
        <Marquee
          speed={80}
          gradient={false}
          pauseOnHover={true}
          className=""
        >
          <motion.div 
          variants={containerVariants}
          className="flex space-x-4 md:space-x-6">
            {[...members, ...members].map((member, index) => (
              <div
                key={`${member.name}-${index}`}
              >
                <TeamMember {...member} />
              </div>
            ))}
          </motion.div>
        </Marquee>
      </div>
    </motion.div>
  );
};

const TeamMember = ({ name, role, image, variant = "default" }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleTouchStart = () => setIsHovered(true);
  const handleTouchEnd = () => setIsHovered(false);

  const variants = {
    hero: (
      <motion.div 
        variants={itemVariants}
        className="w-full bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
      >
        <div className="flex flex-col md:flex-row items-center p-8 md:p-10 gap-8">
          <div className="relative w-56 h-56 md:w-64 md:h-64 flex-shrink-0">
            <motion.div 
              className="absolute inset-0 bg-yellow-200 rounded-2xl"
              whileHover={{ rotate: 8, scale: 1.05 }}
              initial={{ rotate: 3 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img 
                src={image} 
                alt={name} 
                className="w-52 h-52 md:w-60 md:h-60 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <motion.h3 
              className="text-4xl md:text-5xl font-bold text-black mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {name}
            </motion.h3>
            <p className="text-xl md:text-2xl text-black uppercase tracking-wider font-medium">{role}</p>
          </div>
        </div>
      </motion.div>
    ),
    
    leader: (
      <motion.div 
        variants={itemVariants}
        className="relative w-full max-w-sm mx-auto h-full group cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div 
          className="absolute inset-0 bg-yellow-200 rounded-xl"
          initial={{ rotate: 2 }}
          animate={{ rotate: isHovered ? 6 : 2, scale: isHovered ? 1.03 : 1 }}
          transition={{ duration: 0.4 }}
        />
        <div className="relative z-10 flex flex-col items-center bg-white rounded-xl p-8 h-full shadow-lg overflow-hidden">
          <motion.div 
            className="w-48 h-48 mb-6 overflow-hidden rounded-xl"
            animate={{ scale: isHovered ? 0.92 : 1 }}
            transition={{ duration: 0.4 }}
          >
            <motion.img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.15 : 1 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
          
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-75 rounded-xl flex flex-col items-center justify-center p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3 
                  className="font-bold text-white text-2xl mb-3 text-center"
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  custom={0}
                >
                  {name}
                </motion.h3>
                <motion.p 
                  className="text-yellow-200 text-center uppercase tracking-wide font-medium"
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  custom={1}
                >
                  {role}
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    ),

    default: (
      <motion.div 
        variants={itemVariants}
        className="relative group overflow-hidden rounded-t-xl rounded-b-xl shadow-lg cursor-pointer w-40 lg:w-60 m-2"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div 
          className="aspect-square bg-gray-100"
          animate={{ scale: isHovered ? 0.95 : 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.2 : 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
        
        <AnimatePresence>
          {isHovered ? (
            <motion.div
              className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="relative"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <motion.div 
                  className="absolute -inset-1 bg-yellow-200 rounded-lg opacity-20"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 2, 0] 
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                />
                <h3 className="font-bold text-white text-lg mb-2 text-center relative z-10">
                  {name}
                </h3>
              </motion.div>
              
              <motion.p 
                className="text-yellow-200 text-sm text-center uppercase tracking-wide font-medium"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {role}
              </motion.p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    )
  };

  return variants[variant];
};

const TeamSection = () => {
  const teamMembers = [
    { name: "PALAK WADHWANI", role: "ENTRY MANAGEMENT LEAD", image: Palak_Wadhwani },
    { name: "AKSHAT KABRA", role: "PUBLIC RELATIONS LEAD", image: Akshat_Kabra },
    { name: "RAKSHIT CHAUHAN", role: "MARKETING OUTREACH LEAD", image: Rakshit_Chauhan },
    { name: "TANUJ DHAKAD", role: "SOCIAL MEDIA LEAD", image: Tanuj_Dhakad },
    { name: "RHEA SINGH SUD", role: "PARTNERSHIP LEAD", image: Rhea_Singh_Sud },
    { name: "DHIREN", role: "COVERAGE LEAD", image: Dhiren },
    { name: "YASH UPADHYAY", role: "TECHNICAL LEAD", image: Yash_Upadhyay },
    { name: "IRENE VINU CHERIYAN", role: "CONTENT LEAD", image: Irene },
    { name: "HARSHIT VYAS", role: "OPERATIONS LEAD", image: Harshit_Vyas },
    { name: "PARTH BANSAL", role: "OPERATIONS LEAD", image: Parth_Bansal },
    { name: "SAMPURN GUPTA", role: "SPONSORSHIP LEAD", image: Sampurn_Gupta },
    { name: "SAHIL KUMAR", role: "CREATIVE LEAD", image: Sahil_Kumar }
  ];

  return (
    <div className="min-h-screen p-6 md:p-12 space-y-16 md:mt-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideUpVariants}
        className="text-center"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
          MEET THE TEAM
        </h2>
      </motion.div>
      
      <div className="max-w-7xl mx-auto space-y-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <TeamMember 
            name="DAVINDER SINGH" 
            role="FOUNDER & CEO" 
            image={Davinder_Singh}
            variant="hero"
          />
        </motion.div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          <TeamMember 
            name="NAVAL SRIVASTAVA" 
            role="LEAD ORGANIZER" 
            image={Naval_Srivastava}
            variant="leader"
          />
          <TeamMember 
            name="NISHANT PATEL" 
            role="LEAD ORGANIZER" 
            image={Nishant_Patel}
            variant="leader"
          />
        </motion.div>
        <InfiniteCarousel members={teamMembers} />
      </div>
    </div>
  );
};

export default TeamSection;