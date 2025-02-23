import GetInTouch from "@/components/about/get-In-touch";
import ProcessRepeatableSection from "@/components/process/process-repeatable-section";
import CompanyBenefit from "@/components/process/company-benefit";
import ProcessHeader from "@/components/process/process-header";
import { Metadata } from 'next';

const data = [
  {
    title: "Discovery",
    heading: "Understanding Needs and Market Insights",
    description:
      "We start by diving deep into your business objectives, user expectations, and market trends. This phase helps us uncover opportunities, identify challenges, and define a strategic direction for your product.",
    firstButtonLable: "7 Day",
    SecondButtonLabel: "2 Mettings",
    processSlutions: [
      "Identify Core Business Goals",
      "Market Research & Competitor Analysis",
      "User Persona Development",
      "Problem Statement Definition",
      "Feature Prioritization",
    ],
  },
  {
    title: "Strategy & Planning",
    heading: "Structuring a Clear Plan for Execution",
    description:
      "After gaining a thorough grasp of your objectives, we create a roadmap that specifies the technological stack, establishes project milestones, and guarantees resource efficiency. This methodical approach reduces risks and lays the groundwork for efficient execution.",
    firstButtonLable: "7 Day",
    SecondButtonLabel: "2 Mettings",
    processSlutions: [
      "Define Project Scope & Roadmap",
      "Choose the Right Tech Stack",
      "Set Timelines & Milestones",
      "Resource Allocation",
      "Risk Assessment & Mitigation",
    ],
  },
  {
    title: "Design & Development",
    heading: "Designing an Intuitive and Scalable Solution",
    description:
      "Our design and development process focuses on creating user-friendly, visually appealing, and highly functional products. We prioritize seamless user experiences, performance optimization, and flexibility for future growth.",
    firstButtonLable: "7 Day",
    SecondButtonLabel: "2 Mettings",
    processSlutions: [
      "Wireframing & Prototyping",
      "UI/UX Design Optimization",
      "Agile & Iterative Development",
      "Backend & Frontend Integration",
      "Performance Optimization",
    ],
  },
  {
    title: "Testing & Quality Assurance",
    heading: "Ensuring Stability, Security, and Performance",
    description:
      "We conduct rigorous testing, including functionality, security, and performance checks. This step ensures that your product is free from bugs, operates efficiently, and delivers a seamless experience across all devices and platforms.",
    firstButtonLable: "7 Day",
    SecondButtonLabel: "2 Mettings",
    processSlutions: [
      "Automated & Manual Testing",
      "Security Audits & Compliance Checks",
      "Cross-Device & Browser Testing",
      "Performance & Load Testing",
      "Bug Tracking & Fixes",
    ],
  },
  {
    title: "Launch & SEO Optimization",
    heading: "Launching with Maximum Visibility and Performance",
    description:
      "Going live is just the beginning. We fine-tune performance, implement SEO best practices, and optimize speed to ensure your product gains traction, ranks well in search engines, and delivers an outstanding user experience.",
    firstButtonLable: "7 Day",
    SecondButtonLabel: "2 Mettings",
    processSlutions: [
      "SEO Optimization for Search Ranking",
      "Speed & Performance Enhancements",
      "Marketing & Outreach Strategies",
      "User Feedback Collection",
      "Monitoring & Performance Analysis",
    ],
  },
  {
    title: "Ongoing Support & Optimization",
    heading: "Providing Continuous Support for Long-Term Success",
    description:
      "We don’t just launch and leave. Our ongoing support includes performance monitoring, updates, feature enhancements, and scalability improvements, ensuring your product remains competitive and evolves with your business.",
    firstButtonLable: "7 Day",
    SecondButtonLabel: "2 Mettings",
    processSlutions: [
      "Regular Updates & Feature Enhancements",
      "Performance Monitoring & Troubleshooting",
      "User Support & Documentation",
      "Scaling & Infrastructure Optimization",
      "Data-Driven Iterations & Improvements",
    ],
  },
];
export const metadata: Metadata = {
  title: 'Process',
  description: 'This is the process page',
};
export default function Process() {
  return (
    <div>
      <ProcessHeader />
      {data.map((item, index) => (
        <ProcessRepeatableSection
          key={index}
          SecondButtonLabel={item.SecondButtonLabel}
          description={item.description}
          firstButtonLable={item.firstButtonLable}
          heading={item.heading}
          processSlutions={item.processSlutions}
          title={`${index + 1}. ${item.title}`}
        />
      ))}
      <CompanyBenefit />
      <GetInTouch />
    </div>
  );
}
