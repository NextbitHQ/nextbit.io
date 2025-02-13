import TeamFeature from "./team-feature"

const teamFeatures = [
    {
        title: 'Our Team',
        heading: 'We believe in taking care of our team',
        descripiton: 'You can’t be creative if you’re not comfortable. We take care of comprehensive benefits for all our portfolio companies, right down to picking up the tab on your commute.'
    },
    {
        title: 'Our Team',
        heading: 'Our everyday mission',
        descripiton: 'We tend to think the best solutions are the ones that haven’t been thought of yet. Sometimes, that type of thinking just happens to make waves—or a new company.'

    },
    {
        title: 'Our Team',
        heading: 'We believe in potential',
        descripiton: 'With our resources and strategic expertise, we invest in long-term growth, expand product innovation, and provide companies with the support they need to scale comfortably.'

    },
    {
        title: 'Our Team',
        heading: 'Creating a pathway for the next generation of tech',
        descripiton: 'Nextbit Studio is home to passionate innovators with a mission to build, acquire, and scale companies that empower digital entrepreneurs.'
    },
]


export default function TeamRepeatableSection() {
    return (
        <div className="pt-12 md:pt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
           {
            teamFeatures.map((feature,index)=>
                <TeamFeature
                key={index}
             title={feature.title}
             heading={feature.heading}
             description={feature.descripiton}
             />
            )
           }
        </div>
    )
}