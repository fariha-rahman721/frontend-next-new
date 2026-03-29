'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface HeadlineProps {
items?: string[];
speed?: number;
}

const defaultItems = [
"🔥 20% OFF on all Jewellery Sets!",
"💎 New Kundan Collection Available Now",
"🚚 Free Delivery on orders above ৳5000",
"✨ Limited Time Offer, Grab Now!",
];

export const Headline: React.FC<HeadlineProps> = ({
items = defaultItems,
speed = 20,
}) => {
return ( <div className="w-full mt-12 overflow-hidden bg-black  text-white py-2 ">
<motion.div
className="flex gap-10 whitespace-nowrap"
animate={{ x: ['0%', '-100%'] }}
transition={{
repeat: Infinity,
duration: speed,
ease: 'linear',
}}
>
{/* Duplicate content for smooth infinite loop */}
{[...items, ...items].map((text, index) => ( <span
         key={index}
         className="text-sm md:text-base font-medium tracking-wide"
       >
{text} </span>
))}
</motion.div> </div>
);
};
