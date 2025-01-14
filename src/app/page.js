"use client";
import { Oswald } from 'next/font/google';
import dynamic from 'next/dynamic';
import Hero from '../../components/Hero';
import VideoComponent from '../../components/VideoComponent';

const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700'],
});

// Dynamically imported components
const Work = dynamic(() => import('../../components/Work'), { ssr: false });
const WorkDetails = dynamic(() => import('../../components/WorkDetails'), { ssr: false });
const Mission = dynamic(() => import('../../components/Mission'), { ssr: false });
const WhoWeAre = dynamic(() => import('../../components/WhoWeAre'), { ssr: false });

export default function Home() {
  return (
    <div className={`${oswald.variable} dark:bg-primary font-sans overflow-hidden`}>
      {/* Main Content */}
      <Hero />
      <VideoComponent />
      <Work />
      <WorkDetails />
      <Mission />
      <WhoWeAre />
    </div>
  );
}
