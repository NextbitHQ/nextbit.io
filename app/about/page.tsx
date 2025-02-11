import AboutUs from '@/components/about/AboutUs';
import GetInTouch from '@/components/about/GetInTouch';
import AboutRepeatableSection from '@/components/about/AboutRepeatableSection';
import ourStoryImage from '@/asset/images/about/our-story.png';
import team from '@/asset/images/about/team.png';



export default function About() {

  return (
    <div>
      <AboutUs />
      <AboutRepeatableSection 
      title='Our Story'
       imageSrc={ourStoryImage} 
      imageAlt='Our Story'
       heading='Innovation, Simplicity, and Impact'
       descriptions={[
        'What started as a mission to enhance eCommerce functionality soon evolved into a full-fledged tech powerhouse.',
        'Today, we stand as a force of innovation, committed to reshaping the digital commerce experience and ensuring businesses have the tools they need to succeed.',
      ]}
       
      />
      <AboutRepeatableSection 
      title='Our Team'
       imageSrc={team} 
      imageAlt='Our Story'
       heading='Passion. Expertise. Innovation. '
      descriptions={[
        'We believe in fostering a culture of creativity, adaptability, and relentless innovation, ensuring that every solution we create is impactful and future-proof.',
        'At Nextbit, our strength lies in our people—a team of forward-thinkers, creators, and industry disruptors dedicated to building world-class technology.',
      ]}
       
      />
      <GetInTouch />
    </div>
  );
}
