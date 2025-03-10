'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { getTeamMembers, TeamMember } from '@/lib/getTeamMember';

export const Teams: React.FC = () => {
  const [users, setUsers] = useState<TeamMember[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getTeamMembers().then(setUsers);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden p-6">
      <h2 className="text-2xl font-semibold text-center mb-6">Our Team</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={3} 
        centeredSlides={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full"
      >
        {users.map((user, index) => (
          <SwiperSlide key={user.id}>
            <div
              className={`relative flex flex-col items-center transition-all duration-300 pt-20 h-[400px] ${
                index === activeIndex
                  ? 'scale-120 z-10' 
                  : 'scale-90 opacity-60'
              }`}
            >
              <div
                className={`p-4 bg-white rounded-lg shadow-lg transition-all ${
                  index === activeIndex ? 'scale-125' : ''
                }`}
              >
                <Image
                  src={user.image}
                  width={100}
                  height={100}
                  alt={user.name}
                  className="rounded-full w-24 h-24 object-cover"
                />
                <h3 className="mt-3 text-lg font-semibold">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
