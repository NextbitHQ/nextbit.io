import { image } from "@heroui/react";
import Image from "next/image";
import teamImage from"@/asset/images/team/team-member.png"
const teamMembers = [
    {
      image: teamImage,
      name: "John Doe",
      designation: "Software Engineer"
    },
    {
      image: teamImage,
      name: "Jane Smith",
      designation: "UI/UX Designer"
    },
    {
      image: teamImage,
      name: "Mike Johnson",
      designation: "Project Manager"
    },
    {
      image: teamImage,
      name: "Emily Davis",
      designation: "Frontend Developer"
    },
    
  ];
  

export default function TeamMember() {
  return (
    <div className="pt-12 md:pt-16">
    <h2 className="border-b-1 border-default-200 pb-3 text-secondary dark:text-primary text-sm font-medium">Our Team</h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 py-5">
      {teamMembers.map((member, index) => (
        <div key={index}>
          <Image src={member.image} width={300} height={400} alt={member.name} />
          <h4 className="mt-3 text-base font-secondary text-secondary dark:text-primary  font-medium leading-[1.36] tracking-[-0.02em]">{member.name}</h4>
          <p className="mt-1 text-sm font-secondary text-secondary-light dark:text-primary-light font-normal leading-[1.36] tracking-[-0.02em]">{member.designation}</p>
        </div>
      ))}
    </div>
    </div>
  );
}