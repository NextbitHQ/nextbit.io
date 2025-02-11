import GetInTouch from "@/components/about/GetInTouch";
import workImage from '@/asset/images/work/work.png';
import HeroProcess from "@/components/process/HeroProcess";
import ProcessRepeatableSection from "@/components/process/ProcessRepeatableSection";
import Opportunities from "@/components/process/Opportunities";

const data = [
  {
    title: "Discovery",
    heading: "We're crafting the project planning tool",
    description: "Use AI to streamline processes, improve decision-making, and create new efficiencies. From machine learning models to AI-powered automation, we help businesses integrate intelligence into their workflows in a simple manner.",
    imageSrc: workImage,
    imageAlt: "discovery"
  },
  {
    title: "Strategy & Planning",
    heading: "We're crafting the project planning tool",
    description: "Leveraging the latest technologies to create responsive, user-friendly web applications. We specialize in building scalable and dynamic solutions that meet the needs of modern businesses.",
    imageSrc: workImage,
    imageAlt: "development"
  },
  {
    title: "Design & Development",
    heading: "We're crafting the project planning tool",
    description: "Utilizing AI-driven analytics to optimize marketing campaigns and increase engagement. We provide data-driven insights to refine targeting, maximize conversions, and improve ROI.",
    imageSrc: workImage,
    imageAlt: "marketing"
  },
  {
    title: "3.Testing & Quality Assurance",
    heading: "We're crafting the project planning tool",
    description: "Our team works closely with businesses to develop innovative strategies that drive growth and success. From market analysis to competitive positioning, we help create sustainable advantages.",
    imageSrc: workImage,
    imageAlt: "strategy"
  },
  {
    title: "Launch & SEO Optimization",
    heading: "We're crafting the project planning tool",
    description: "We create visually stunning, intuitive, and user-centered designs that enhance the user experience. Our design philosophy centers around usability and aesthetic appeal.",
    imageSrc: workImage,
    imageAlt: "design"
  },
  {
    title: "Ongoing Support & Optimization",
    heading: "We're crafting the project planning tool",
    description: "Using advanced analytics and machine learning to provide actionable insights. We help businesses turn data into strategic decisions that improve performance and drive results.",
    imageSrc: workImage,
    imageAlt: "analytics"
  }
];


export default function Process(){
  return(
  <div>
   <HeroProcess />
   {
    data.map((item, index) => (
       <ProcessRepeatableSection key={index}
       title={`${index + 1}. ${item.title}`}
       heading={item.heading}
       description={item.description}
       imageSrc={item.imageSrc}
       imageAlt={item.imageAlt}
        />
    ))
   }
   <Opportunities/>
   <GetInTouch />
  </div>
  );
}