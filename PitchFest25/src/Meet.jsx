import React from 'react';
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

function TeamMember({ name, role, image, size = "small", className = "" }) {
  const sizeClasses = {
    large: "col-span-full md:col-span-3 aspect-[3/1]",
    medium: "col-span-full md:col-span-1 aspect-square w-full max-w-[400px]",
    small: "w-[250px] aspect-square", // Fixed width for consistent sizing
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {size === "large" ? (
        <div className="bg-white rounded-[2rem] h-full flex items-center overflow-hidden shadow-lg p-4">
          <div className="relative h-full" style={{ width: '40%' }}>
            <div className="absolute inset-2 bg-yellow-200 rounded-[4rem]" />
            <div className="relative h-full flex items-center justify-center p-4">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="flex-grow flex flex-col justify-center items-start pl-12">
            <h3 className="font-bold text-black text-3xl mb-2">{name}</h3>
            <p className="text-black uppercase text-lg">{role}</p>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-full">
          <div className="w-full aspect-square bg-white flex items-center justify-center overflow-hidden rounded-lg shadow-md">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-4 left-0 right-0">
            <div className="bg-yellow-200 mx-4 py-2 px-4 rounded">
              <h3 className="font-bold text-black text-center text-sm">{name}</h3>
              <p className="text-black text-center text-xs uppercase">{role}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ScrollingTeam({ members }) {
  const itemWidth = 250; // Match small card width
  const gap = 24; // Match gap-6 (1.5rem = 24px)
  const duplicatedMembers = [...members, ...members, ...members, ...members]; // Duplicate 4 times for smoothness
  const totalWidth = (duplicatedMembers.length * (itemWidth + gap)) - gap;

  return (
    <div className="w-full overflow-hidden py-4">
      <div className="relative overflow-hidden">
        <div 
          className="flex animate-scroll hover:[animation-play-state:paused] gap-6"
          style={{ 
            animation: `scroll ${duplicatedMembers.length * 0.75}s linear infinite`, // Adjust duration
            width: `${totalWidth}px`
          }}
        >
          {duplicatedMembers.map((member, i) => (
            <div 
              key={`${member.name}-${i}`}
              className="w-[250px] flex-shrink-0"
            >
              <TeamMember 
                name={member.name}
                role={member.role}
                image={member.image}
                size="small"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${totalWidth / 2}px); } // Scroll half the total width
        }
      `}</style>
    </div>
  );
}
export default function TeamSection() {
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
    <div className="min-h-screen p-6 md:p-12">
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
        MEET THE TEAM
      </h2>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <TeamMember 
          name="DAVINDER SINGH" 
          role="FOUNDER & CEO" 
          size="large" 
          image={Davinder_Singh}
          className="md:col-span-3"
        />

        <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
          <TeamMember 
            name="NAVAL SRIVASTAVA" 
            role="LEAD ORGANIZER" 
            size="medium" 
            image={Naval_Srivastava}
          />
          <TeamMember 
            name="NISHANT PATEL" 
            role="LEAD ORGANIZER" 
            size="medium" 
            image={Nishant_Patel}
          />
        </div>

        <div className="col-span-full">
          <ScrollingTeam members={teamMembers} />
        </div>
      </div>
    </div>
  );
}