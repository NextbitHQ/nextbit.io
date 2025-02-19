import AboutUs from "@/components/about/about-us";
import GetInTouch from "@/components/about/get-In-touch";
import AboutRepeatableSection from "@/components/about/about-repeatable-section";
import ourStoryImage from "@/asset/images/about/our-story.png";
import team from "@/asset/images/about/team.png";

export default function About() {
  return (
    <div>
      <AboutUs />
      <AboutRepeatableSection
        descriptions={[
          "What started as a mission to enhance eCommerce functionality soon evolved into a full-fledged tech powerhouse.",
          "Today, we stand as a force of innovation, committed to reshaping the digital commerce experience and ensuring businesses have the tools they need to succeed.",
        ]}
        heading="Innovation, Simplicity, and Impact."
        imageAlt="Our Story"
        imageSrc={ourStoryImage}
        title="Our Story"
      />
      <AboutRepeatableSection
        button={true}
        buttonLabel="More About Our Team"
        descriptions={[
          "We believe in fostering a culture of creativity, adaptability, and relentless innovation, ensuring that every solution we create is impactful and future-proof.",
          "At Nextbit, our strength lies in our people—a team of forward-thinkers, creators, and industry disruptors dedicated to building world-class technology.",
        ]}
        heading="Passion. Expertise. Innovation."
        imageAlt="Our Story"
        imageSrc={team}
        title="Our Team"
      />
      <GetInTouch />
    </div>
  );
}
