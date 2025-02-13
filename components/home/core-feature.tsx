import { Aperture } from 'lucide-react';
const coreFeatures = [
    {
        icon: <Aperture />,
        title: 'Corss-time Project',
        description: 'Use AI to processes, improve decision-making.'
    },
    {
        icon: <Aperture />,
        title: 'Corss-time Project',
        description: 'Use AI to processes, improve decision-making.'
    },
    {
        icon: <Aperture />,
        title: 'Corss-time Project',
        description: 'Use AI to processes, improve decision-making.'
    },
    {
        icon: <Aperture />,
        title: 'Corss-time Project',
        description: 'Use AI to processes, improve decision-making.'
    },
]
export default function CoreFeature() {
    return (
        <div className="bg-inherit pt-12 md:pt-24">
            <h3 className="text-secondary dark:text-primary text-4xl md:text-[48px] leading-[1.2] tracking-[-0.02em] font-semibold font-primary">Core Features for Maximum Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
                {
                    coreFeatures.map((feature, index) =>
                        <div key={index}>
                            <div className="flex text-secondary dark:text-primary gap-5">
                                <span className="h-3 w-3 font-semibold" >{feature.icon}</span>
                                <h4 className="text-sm md:text-base font-semibold">{feature.title}</h4>
                            </div>
                            <p className="mt-4 text-secondary-light dark:text-primary-light text-sm md:text-base leading-[1.36] tracking-[-0.04em]">{feature.description}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}