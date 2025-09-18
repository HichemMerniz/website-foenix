'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import heroImage from '../assets/HERO.png';

export default function Hero() {
  const t = useTranslations('hero');
  
  return (
    <section className="relative w-full min-h-screen flex items-center justify-start overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={heroImage}
          alt="Hero Background"
          fill
          className="object-cover w-full h-full"
          priority
          sizes="100vw"
        />
        {/* Sophisticated gradient overlay for optimal text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
        
        {/* Floating animated elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-4 h-4 bg-foenix-orange/30 rounded-full animate-float animate-delay-200"></div>
          <div className="absolute top-40 right-32 w-2 h-2 bg-foenix-red/40 rounded-full animate-float animate-delay-500"></div>
          <div className="absolute bottom-40 left-40 w-3 h-3 bg-foenix-orange/20 rounded-full animate-float animate-delay-800"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-foenix-red/30 rounded-full animate-float animate-delay-300"></div>
          <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white/50 rounded-full animate-pulse animate-delay-600"></div>
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-foenix-orange/25 rounded-full animate-float animate-delay-700"></div>
        </div>
      </div>

      <div className="relative w-full min-h-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start min-h-full pt-20 pb-20">
          <div className="max-w-2xl ml-8 lg:ml-16">
            {/* Hero Content */}
            <div className="space-y-10 relative z-10">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
                  {t('title')}
                </span>
                <span className="block text-foenix-gradient drop-shadow-2xl mt-2 animate-slideInLeft" style={{ animationDelay: '0.4s' }}>
                  {t('subtitle')}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 leading-relaxed font-light tracking-wide animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                {t('description')}
              </p>
            </div>

            {/* Value Proposition */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
              <div className="group flex items-start space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-8 h-8 bg-foenix-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg drop-shadow-md group-hover:text-foenix-orange transition-colors duration-300">{t('features.networkInfrastructure.title')}</h3>
                  <p className="text-gray-200 text-sm drop-shadow-sm mt-1">{t('features.networkInfrastructure.description')}</p>
                </div>
              </div>
              
              <div className="group flex items-start space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-8 h-8 bg-foenix-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg drop-shadow-md group-hover:text-foenix-orange transition-colors duration-300">{t('features.softwareSolutions.title')}</h3>
                  <p className="text-gray-200 text-sm drop-shadow-sm mt-1">{t('features.softwareSolutions.description')}</p>
                </div>
              </div>
              
              <div className="group flex items-start space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-8 h-8 bg-foenix-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg drop-shadow-md group-hover:text-foenix-orange transition-colors duration-300">{t('features.devOpsExcellence.title')}</h3>
                  <p className="text-gray-200 text-sm drop-shadow-sm mt-1">{t('features.devOpsExcellence.description')}</p>
                </div>
              </div>
              
              <div className="group flex items-start space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-8 h-8 bg-foenix-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg drop-shadow-md group-hover:text-foenix-orange transition-colors duration-300">{t('features.support.title')}</h3>
                  <p className="text-gray-200 text-sm drop-shadow-sm mt-1">{t('features.support.description')}</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4 animate-fadeInUp" style={{ animationDelay: '1s' }}>
              <Link
                href="#contact"
                className="group bg-foenix-gradient text-white px-10 py-5 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center relative overflow-hidden animate-pulse-glow"
              >
                <span className="relative z-10">{t('cta.startTransformation')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 animate-shimmer"></div>
              </Link>
              <Link
                href="#case-studies"
                className="group border-2 border-white/30 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 text-center backdrop-blur-sm bg-white/10 hover:border-white hover:shadow-lg transform hover:scale-105"
              >
                {t('cta.viewSuccessStories')}
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
