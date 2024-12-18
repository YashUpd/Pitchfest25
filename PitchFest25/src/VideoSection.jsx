import React from 'react';
import { Info } from 'lucide-react';

const VideoSection = () => {
  const videos = [
    {
      id: 1,
      thumbnail: "/public/5cf6e655db2448599a49a84be7525f34.jpg",
      title: "ACIC-BMU | Propel Pitchfest23",
      date: "27th - 28th April"
    },
    {
      id: 2,
      thumbnail: "/public/1e72f6ac40c3c77747ff7a499c9a554d.jpg",
      title: "ACIC-BMU | Propel Pitchfest24",
      date: "Feb. 15-16, 2024"
    }
  ];

  return (
    <div className="bg-white p-4 rounded-[2.5rem] w-full max-w-7xl mx-auto shadow-lg">
      <div className="grid md:grid-cols-2 gap-4">
        {videos.map((video) => (
          <div key={video.id} className="relative group">
            {/* Video Card */}
            <div className="relative bg-[#1B3444] rounded-2xl overflow-hidden">
              {/* Info Icon */}
              <button className="absolute top-2 right-2 z-10 text-white/80 hover:text-white">
                <Info className="w-6 h-6" />
              </button>
              
              {/* Thumbnail */}
              <div className="relative aspect-video">
                <img
                  src={video.thumbnail}
                  alt={`PitchFest Thumbnail`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Video Info */}
              <div className="p-3 flex items-center gap-3">
                {/* Channel Icon */}
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </div>
                {/* Video Title and Date */}
                <div>
                  <h3 className="text-white font-medium">{video.title}</h3>
                  <p className="text-white/70 text-sm">{video.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSection;









