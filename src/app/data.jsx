import { GiWeightLiftingUp, GiRunningShoe, GiMeditation } from "react-icons/gi";

export const Services = [
  {
    title: "Personalized Coaching",
    icon: <GiWeightLiftingUp />,
    description:
      "Tailored fitness programs designed to meet individual goals, ensuring effective and safe progress.",
    features: ["Customized Workouts", "One-on-One Sessions", "Progress Tracking"],
  },
  {
    title: "Group Fitness Classes",
    icon: <GiRunningShoe />,
    description:
      "Engaging group sessions that foster community and motivation, suitable for all fitness levels.",
    features: ["Variety of Classes", "Community Support", "Certified Instructors"],
  },
  {
    title: "Wellness Programs",
    icon: <GiMeditation />,
    description:
      "Holistic approaches to health, including nutrition guidance and stress management techniques.",
    features: ["Nutritional Advice", "Mindfulness Practices", "Lifestyle Coaching"],
  },
];




export const Testimonials = [
  {
    "name": "Mike Johnson",
    "review": "I've been getting my hair cut at PMC Barbershop for over 2 years now. The attention to detail is unmatched, and the atmosphere is always welcoming."
  },
  {
    "name": "David Martinez",
    "review": "As someone who's particular about their haircut, I was nervous trying a new place. The team at PMC took their time to understand what I wanted and delivered exactly that. Will definitely be coming back!"
  },
  {
    "name": "Chris Taylor",
    "review": "The hot towel shave experience at PMC Barbershop is phenomenal! It's the perfect blend of old-school barbering with modern techniques. My beard has never looked better."
  }
]

import { IoLocationOutline } from "react-icons/io5";
import { FiClock } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";

export  const Info = [
    {name:"Address", content:'Robertsdale, AL, United States', icon:<IoLocationOutline/>},
    {name:"Status", content:'Open 8 am ⋅ Closes 7 pm', icon:<FiClock/>},
    {name:"Phone", content:'+1 251-419-1698', icon:<FiPhone/>},
  ]
