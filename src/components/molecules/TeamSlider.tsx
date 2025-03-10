"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getTeamMembers, TeamMember } from "@/lib/getTeamMember";

export default function TeamSlider() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    async function fetchData() {
      const members = await getTeamMembers();
      setTeamMembers(members);
    }
    fetchData();
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto text-center">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {teamMembers.map((member) => (
          <SwiperSlide key={member.id}>
            <div className="flex flex-col items-center mb-10">
              <div className="w-36 h-36 rounded-full overflow-hidden bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={144}
                  height={144}
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold mt-4">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
