import React from 'react'
import Button from '@/component/Button'
import { ArrowRight, ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { AnimatedBorderButton } from '../component/AnimatedButton';
import Skills from '../component/Skills'

// Inset-0 :- cover mobile view
// bg-gradient-to-b :- image goes from top to bottom
function Hero() {
  return (
    <section className='text-white relative min-h-screen flex items-center overflow-hidden'>
      <div className="absolute inset-0">
        <img src="/hero-bg.jpg" alt="Hero Image" className='w-full h-full object-cover opacity-40'/>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_,i) => (
          <div 
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: '#20B2A6',
              left: `${Math.random()*100}%`,
              top: `${Math.random()*100}%`,
              animation: `slow-drift ${15+Math.random()*20}s ease-out infinite`,
              animationDelay: `${Math.random()*5}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left Column - Text Content */}
          <div className="space-y-8">
            <div className="">

              <div className="animate-fade-in inline-flex items-center gap-2.5 mb-6 md:mb-8 px-3 md:px-4 py-2 border border-white/10 rounded-full text-xs font-mono text-green-400 bg-green-900/10 uppercase tracking-widest animate-fade-up cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>

                <span className="hidden inline">Web Developer • React Specialist</span>
                {/* <span className="sm:hidden">Available Now</span> */}
              </div>

              {/* Heading */}
              <div className="py-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                  Turning <span className="text-primary glow-text">digital</span>
                  <br />
                  ideas into
                  <br />
                  <span className="font-serif italic font-normal text-white">
                    impact.
                  </span>
                </h1>
                <p className="my-1.5 text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                  Hi, I'm Adhar Gupta — a full stack developer who enjoys turning complex problems
                  into simple, elegant interfaces. I work with React, modern JavaScript, and a
                  strong focus on performance and usability.
                </p>
              </div>
            </div>

            {/* CTA something */}

            <div className="flex items-center flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button className="hover:animate-pulse hover:animation-delay-100" size="default">
              <a href="mailto:adhargpt@gmail.com" className='flex gap-2'>
                Contact Me<ArrowRight/>
              </a>
              </Button>

              {/* <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton> */}
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className='text-sm text-muted-foreground'>Follow Me: </span>
              {[
                {
                icon: Github, href: "https://github.com/Adhargupta"
                },
                {
                icon: Linkedin, href: "https://www.linkedin.com/in/adhar-gupta-15a9a334b"
                },
                {
                icon: Mail, href: "mailto:adhargpt@gmail.com"
                }
              ].map((item,key)=>(
                <a key={key} href={item.href} className='p-2 rounded-full glass hover:bg-primary/10 hover:text-primary hover:translate-y-[-3px] transition-all duration-300'>
                  {<item.icon className='w-5 h-5'/>}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column -Image */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
            {/* Profile Picture */}
            <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />

              <div className="relative glass rounded-2xl p-2 glow-border">
                <img src="/profile-photo3.png" alt="Adhar Gupta" className='w-full aspect-[4/5] object-cover rounded-2xl'/>

                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-xs text-muted-foreground">
                    Projects Built
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* skills */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className='default mb-6 text-center cursor-default text-muted-foreground'>
            Technologies I work with 
          </p>
          <Skills/>
        </div>
      </div>
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-[30px]
        animate-fade-in animation-delay-800 z-50"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  )
}

export default Hero
