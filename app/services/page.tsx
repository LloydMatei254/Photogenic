import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { User, Camera, Heart, BookOpen, ArrowRight } from 'lucide-react';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Services | Lloyd Matsi Photography',
  description: 'Photography services including portraits, events, lifestyle, and documentary projects.',
};

const iconMap = {
  User,
  Camera,
  Heart,
  BookOpen,
};

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=1920&q=80"
          alt="Photography services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Services</h1>
          <p className="text-xl md:text-2xl text-warm-gray">
            Photography that tells your story
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-warm-gray leading-relaxed">
            I&apos;m an emerging photographer committed to creating thoughtful, authentic photography. 
            Whether you need portraits, event coverage, or creative documentation, I approach every project 
            with care, intention, and a focus on storytelling.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              
              return (
                <div
                  key={service.id}
                  className="group p-8 md:p-12 border border-white/10 hover:border-white/30 transition-all"
                >
                  <div className="mb-6">
                    {Icon && <Icon size={40} className="text-warm-gray" />}
                  </div>
                  
                  <h2 className="text-3xl font-serif mb-4">{service.title}</h2>
                  
                  <p className="text-warm-gray leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {service.details.map((detail, index) => (
                      <li key={index} className="text-sm text-warm-gray flex items-start gap-2">
                        <span className="text-white mt-1">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center">
            How I Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center mx-auto mb-6">
                <span className="font-serif text-xl">1</span>
              </div>
              <h3 className="text-xl font-serif mb-3">Consultation</h3>
              <p className="text-warm-gray text-sm leading-relaxed">
                We discuss your needs, vision, and what you want to achieve with the photography.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center mx-auto mb-6">
                <span className="font-serif text-xl">2</span>
              </div>
              <h3 className="text-xl font-serif mb-3">The Session</h3>
              <p className="text-warm-gray text-sm leading-relaxed">
                I create a comfortable environment and focus on capturing authentic, meaningful moments.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center mx-auto mb-6">
                <span className="font-serif text-xl">3</span>
              </div>
              <h3 className="text-xl font-serif mb-3">Delivery</h3>
              <p className="text-warm-gray text-sm leading-relaxed">
                You receive professionally edited photographs that tell your story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-center">
            My Approach
          </h2>
          
          <div className="space-y-6 text-warm-gray leading-relaxed">
            <p className="text-lg">
              I believe that the best photography happens when people feel comfortable and authentic. 
              My goal is to create images that feel natural, honest, and meaningful—not forced or overly staged.
            </p>

            <p className="text-lg">
              I&apos;m still developing my skills and growing as a photographer, but I approach every project 
              with professionalism, preparation, and genuine care for the work.
            </p>

            <p className="text-lg">
              Whether it&apos;s a portrait session, an event, or a creative project, I&apos;m committed to 
              delivering photography that you&apos;ll value and that tells your story in a thoughtful way.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">
            Interested in working together?
          </h2>
          <p className="text-warm-gray mb-8 text-lg">
            Let&apos;s discuss your project and create something meaningful.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-warm-gray transition-colors uppercase tracking-wider text-sm font-medium"
          >
            Contact Me
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
