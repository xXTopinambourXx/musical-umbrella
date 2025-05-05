import Feature from "./Feature";

const features = [
    {
      title: "Built for players",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: undefined,
    },
    {
      title: "Instant cashback",
      description:
        "It's as easy as using an Apple, and as expensive as buying one.",
      icon: undefined,
    },
    {
      title: "Pricing like no other",
      description:
        "Our prices are best in the market. No cap, no lock, no credit card required.",
      icon: undefined,
    },
    {
      title: "100% Uptime guarantee",
      description: "We just cannot be taken down by anyone.",
      icon: undefined,
    },
    {
      title: "Multi-tenant Architecture",
      description: "You can simply share passwords instead of buying new seats",
      icon: undefined,
    },
    {
      title: "24/7 Customer Support",
      description:
        "We are available a 100% of the time. Atleast our AI Agents are.",
      icon: undefined,
    },
    {
      title: "Money back guarantee",
      description:
        "If you donot like EveryAI, we will convince you to like us.",
      icon: undefined,
    },
    {
      title: "And everything else",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: undefined,
    }
];

const FeatureSection = () => {
    return (
        <>
            {features.map((feature, index) => (
                <Feature title={feature.title} index={index} description={feature.description} icon={undefined} />
            ))}
        </>
    );
};

export default FeatureSection;