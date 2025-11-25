import HeroSection from '@/Components/HeroSection';
import Section2 from '@/Components/Section2';
import Section3 from '@/Components/Section3';
import Section4 from '@/Components/Section4';
import Section5 from '@/Components/Section5';
import React from 'react';

const page = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Section3></Section3>
            <Section4></Section4>
            <Section5></Section5>
            <Section2></Section2>
        </div>
    );
};

export default page;