import GetInTouch from "@/components/about/get-In-touch";
import ProcessRepeatableSection from "@/components/process/process-repeatable-section";
import CompanyBenefit from "@/components/process/company-benefit";
import ProcessHeader from "@/components/process/process-header";

const data = [
  {
    title: "Discovery",
    heading: "We're crafting the project planning tool",
    description: "Use AI to streamline processes, improve decision-making, and create new efficiencies. From machine learning models to AI-powered automation, we help businesses integrate intelligence into their workflows in a simple manner.",
    firstButtonLable:'7 Day',
    SecondButtonLabel:'2 Mettings',
    processSlutions:[
      'AI solutions that make impact that make impact',
      'AI solutions that make impact that make impact',
      'AI solutions that make impact that make impact',
      'AI solutions that make impact that make impact',
      'AI solutions that make impact that make impact',
    
    ]
  },
  {
    title: "Strategy & Planning",
    heading: "We're crafting the project planning tool",
    description: "Leveraging the latest technologies to create responsive, user-friendly web applications. We specialize in building scalable and dynamic solutions that meet the needs of modern businesses.",
    firstButtonLable:'7 Day',
    SecondButtonLabel:'2 Mettings',
    processSlutions:[
      'AI solutions that make an impact make an impact',
      'AI solutions that make an impact make an impact',
      'AI solutions that make an impact make an impact',
      'AI solutions that make an impact make an impact',
      'AI solutions that make an impact make an impact',
    ]
  },
  {
    title: "Design & Development",
    heading: "We're crafting the project planning tool",
    description: "Utilizing AI-driven analytics to optimize marketing campaigns and increase engagement. We provide data-driven insights to refine targeting, maximize conversions, and improve ROI.",
    firstButtonLable:'7 Day',
    SecondButtonLabel:'2 Mettings',
    processSlutions:[
      'AI solutions that make an impact make an impact',
      'AI solutions that make an impact make an impact',
      'AI solutions that make an impact make an impact',
      'AI solutions that make an impact make an impact',
      'AI solutions that make an impact make an impact',
    ]
  },
  {
    title: "3.Testing & Quality Assurance",
    heading: "We're crafting the project planning tool",
    description: "Our team works closely with businesses to develop innovative strategies that drive growth and success. From market analysis to competitive positioning, we help create sustainable advantages.",
    firstButtonLable:'7 Day',
    SecondButtonLabel:'2 Mettings',
    processSlutions:[
      'AI solutions that make an impact make an impact',
      'AI solutions that make an impact make an impact',
      'AI solutions that make an impact make an impact',
      'AI solutions that make an impact make an impact',
      'AI solutions that make an impact make an impact',
    ]
  },
  {
    title: "Launch & SEO Optimization",
    heading: "We're crafting the project planning tool",
    description: "We create visually stunning, intuitive, and user-centered designs that enhance the user experience. Our design philosophy centers around usability and aesthetic appeal.",
    firstButtonLable:'7 Day',
    SecondButtonLabel:'2 Mettings',
    processSlutions:[
      'AI solutions that make an impact make an impact',
      'AI solutions that make an impact make an impact',
      'AI solutions that make an impact make an impact',
      'AI solutions that make an impact make an impact',
      'AI solutions that make an impact make an impact',
    ]
  },
  {
    title: "Ongoing Support & Optimization",
    heading: "We're crafting the project planning tool",
    description: "Using advanced analytics and machine learning to provide actionable insights. We help businesses turn data into strategic decisions that improve performance and drive results.",
    firstButtonLable:'7 Day',
    SecondButtonLabel:'2 Mettings',
    processSlutions:[
      'AI solutions that make an impact make an impact',
      'AI solutions that make an impact make an impact',
      'AI solutions that make an impact make an impact',
      'AI solutions that make an impact make an impact',
      'AI solutions that make an impact make an impact',
    ]
  }
];


export default function Process(){
  return(
  <div>
   <ProcessHeader/>
   {
    data.map((item, index) => (
       <ProcessRepeatableSection key={index}
       title={`${index + 1}. ${item.title}`}
       heading={item.heading}
       description={item.description}
       firstButtonLable={item.firstButtonLable}
       SecondButtonLabel={item.SecondButtonLabel}
        processSlutions={item.processSlutions}
        />
    ))
   }
   <CompanyBenefit/>
   <GetInTouch />
  </div>
  );
}