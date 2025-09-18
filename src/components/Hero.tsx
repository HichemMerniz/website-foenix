'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import heroImage from '../assets/HERO.png';
import heroMobileImage from '../assets/Hero_mobile.png';

export default function Hero() {
  const t = useTranslations('hero');
  
  return (
    <section className="relative w-full min-h-screen flex items-center justify-start overflow-hidden">
      {/* Hero Background Image - Desktop */}
      <div className="absolute inset-0 w-full h-full hidden md:block">
        <Image
          src={heroImage}
          alt="Hero Background"
          fill
          className="object-cover w-full h-full"
          priority
          sizes="100vw"
        />
           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
      </div>
      
      {/* Hero Background Image - Mobile */}
      <div className="absolute inset-0 w-full h-full block md:hidden">
        <Image
          src={heroMobileImage}
          alt="Hero Background Mobile"
          fill
          className="object-cover w-full h-full"
          priority
          sizes="100vw"
        />
        
        {/* Advanced Multi-Directional Gradient System */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        
        {/* Floating animated elements - responsive sizing */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Mobile floating elements */}
          <div className="absolute top-20 left-20 w-3 h-3 md:w-4 md:h-4 bg-foenix-orange/30 rounded-full animate-float animate-delay-200"></div>
          <div className="absolute top-40 right-32 w-1.5 h-1.5 md:w-2 md:h-2 bg-foenix-red/40 rounded-full animate-float animate-delay-500"></div>
          <div className="absolute bottom-40 left-40 w-2 h-2 md:w-3 md:h-3 bg-foenix-orange/20 rounded-full animate-float animate-delay-800"></div>
          <div className="absolute bottom-20 right-20 w-1.5 h-1.5 md:w-2 md:h-2 bg-foenix-red/30 rounded-full animate-float animate-delay-300"></div>
          <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white/50 rounded-full animate-pulse animate-delay-600"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 md:w-1.5 md:h-1.5 bg-foenix-orange/25 rounded-full animate-float animate-delay-700"></div>
          
          {/* Desktop-only additional elements */}
          <div className="hidden lg:block absolute top-1/4 left-1/3 w-1 h-1 bg-white/30 rounded-full animate-float animate-delay-1000"></div>
          <div className="hidden lg:block absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-foenix-orange/15 rounded-full animate-float animate-delay-1200"></div>
        </div>
      </div>

      <div className="relative w-full min-h-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center md:justify-start min-h-full pt-16 pb-16 md:pt-20 md:pb-20">
          <div className="max-w-2xl mx-4 md:mx-0 md:ml-8 lg:ml-16 text-center md:text-left">
            {/* Hero Content */}
            <div className="space-y-10 relative z-10">
            <div className="space-y-6">
               <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                 <span className="block bg-gradient-to-r from-white via-gray-50 to-white bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
                   {t('title')}
                 </span>
                 <span className="block bg-gradient-to-r from-orange-300 via-red-400 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] mt-1 md:mt-2 animate-slideInLeft" style={{ animationDelay: '0.4s' }}>
                   {t('subtitle')}
                 </span>
               </h1>
               <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed font-light tracking-wide animate-fadeInUp max-w-3xl mx-auto md:mx-0 drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)]" style={{ animationDelay: '0.6s' }}>
                 {t('description')}
               </p>
            </div>

            {/* Value Proposition */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 animate-fadeInUp max-w-4xl mx-auto md:mx-0" style={{ animationDelay: '0.8s' }}>
              <div className="group flex items-start space-x-4 p-4 rounded-xl bg-black/20 md:bg-black/30 backdrop-blur-md border border-white/20 md:border-white/30 hover:bg-black/30 md:hover:bg-black/40 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="w-8 h-8 bg-foenix-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                   <h3 className="font-bold text-white text-lg drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] group-hover:text-orange-300 transition-colors duration-300">{t('features.networkInfrastructure.title')}</h3>
                   <p className="text-gray-100 text-sm drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] mt-1 leading-relaxed">{t('features.networkInfrastructure.description')}</p>
                </div>
              </div>
              
              <div className="group flex items-start space-x-4 p-4 rounded-xl bg-black/20 md:bg-black/30 backdrop-blur-md border border-white/20 md:border-white/30 hover:bg-black/30 md:hover:bg-black/40 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="w-8 h-8 bg-foenix-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                   <h3 className="font-bold text-white text-lg drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] group-hover:text-orange-300 transition-colors duration-300">{t('features.softwareSolutions.title')}</h3>
                   <p className="text-gray-100 text-sm drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] mt-1 leading-relaxed">{t('features.softwareSolutions.description')}</p>
                </div>
              </div>
              
              <div className="group flex items-start space-x-4 p-4 rounded-xl bg-black/20 md:bg-black/30 backdrop-blur-md border border-white/20 md:border-white/30 hover:bg-black/30 md:hover:bg-black/40 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="w-8 h-8 bg-foenix-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                   <h3 className="font-bold text-white text-lg drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] group-hover:text-orange-300 transition-colors duration-300">{t('features.devOpsExcellence.title')}</h3>
                   <p className="text-gray-100 text-sm drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] mt-1 leading-relaxed">{t('features.devOpsExcellence.description')}</p>
                </div>
              </div>
              
              <div className="group flex items-start space-x-4 p-4 rounded-xl bg-black/20 md:bg-black/30 backdrop-blur-md border border-white/20 md:border-white/30 hover:bg-black/30 md:hover:bg-black/40 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="w-8 h-8 bg-foenix-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                   <h3 className="font-bold text-white text-lg drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] group-hover:text-orange-300 transition-colors duration-300">{t('features.support.title')}</h3>
                   <p className="text-gray-100 text-sm drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] mt-1 leading-relaxed">{t('features.support.description')}</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4 animate-fadeInUp max-w-2xl mx-auto md:mx-0" style={{ animationDelay: '1s' }}>
               <Link
                 href="#contact"
                 className="group bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 text-white px-8 py-5 md:px-12 md:py-6 rounded-2xl font-bold text-lg md:text-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 text-center relative overflow-hidden shadow-lg"
               >
                 <span className="relative z-10 drop-shadow-lg">{t('cta.startTransformation')}</span>
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                 <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
               </Link>
               <Link
                 href="#case-studies"
                 className="group border-2 border-white/50 text-white px-8 py-5 md:px-12 md:py-6 rounded-2xl font-bold text-lg md:text-xl hover:bg-white hover:text-gray-900 transition-all duration-500 text-center backdrop-blur-md bg-black/20 hover:border-white hover:shadow-2xl transform hover:scale-105 shadow-lg"
               >
                 <span className="drop-shadow-lg">{t('cta.viewSuccessStories')}</span>
               </Link>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
