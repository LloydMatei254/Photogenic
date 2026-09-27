import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About | Lloyd Matsi Photography',
  description: 'My journey as a photographer, developing skills and building a portfolio focused on people, places, and meaningful moments.',
};

export default function AboutPage() {
  const journeyStages = [
    {
      number: '01',
      title: 'Discovering Photography',
      description: 'The moment I picked up a camera and saw the world differently',
    },
    {
      number: '02',
      title: 'Learning the Fundamentals',
      description: 'Understanding composition, light, and the technical foundations',
    },
    {
      number: '03',
      title: 'Practicing & Experimenting',
      description: 'Exploring different styles, subjects, and creative approaches',
    },
    {
      number: '04',
      title: 'Building My Portfolio',
      description: 'Developing a body of work that represents my vision',
    },
    {
      number: '05',
      title: 'Developing My Own Style',
      description: 'Finding my voice and perspective as a photographer',
    },
  ];

  const skills = [
    'Portrait Photography',
    'Street Photography',
    'Documentary Photography',
    'Event Photography',
    'Landscape Photography',
    'Composition',
    'Natural Lighting',
    'Camera Settings',
    'Photo Editing',
    'Visual Storytelling',
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=1920&q=80"
          alt="Lloyd Matsi looking out over landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">About Me</h1>
          <p className="text-xl md:text-2xl text-warm-gray max-w-2xl mx-auto">
            My journey, my passion, my story.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80"
              alt="Lloyd Matsi portrait"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Hi, I&apos;m Lloyd Matsi
            </h2>
            <div className="space-y-4 text-warm-gray leading-relaxed">
              <p>
                I&apos;m a photographer and visual storyteller based in Kenya. I&apos;m passionate about capturing real moments, real people, and the world as I experience it—one photograph at a time.
              </p>
              <p>
                Photography started as a way to see the world differently and has become a practice of observing, connecting, and preserving moments that matter.
              </p>
              <p>
                I focus on people, places, and everyday moments that tell stories—whether that's the quiet confidence in a portrait, the energy of the streets, or the stillness hidden in plain sight.
              </p>
              <p>
                I&apos;m still learning, still experimenting, and committed to creating meaningful and thoughtful photography.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
              <div className="text-center">
                <p className="text-3xl font-serif mb-2">100+</p>
                <p className="text-xs uppercase tracking-wider text-warm-gray">Photos Taken</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-serif mb-2">7</p>
                <p className="text-xs uppercase tracking-wider text-warm-gray">Categories Explored</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-serif mb-2">1</p>
                <p className="text-xs uppercase tracking-wider text-warm-gray">Big Dream</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-3xl md:text-4xl font-serif leading-relaxed mb-8">
            "Not just a photographer,
            <br />
            but a lifelong learner."
          </blockquote>
          <p className="text-warm-gray">
            Every photograph is a chance to see better, think deeper, and tell a story worth sharing.
          </p>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center">
            My Photography Journey
          </h2>

          <div className="space-y-12">
            {journeyStages.map((stage) => (
              <div
                key={stage.number}
                className="flex gap-8 items-start group"
              >
                <div className="text-5xl font-serif text-warm-gray/30 group-hover:text-warm-gray transition-colors">
                  {stage.number}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-serif mb-2">{stage.title}</h3>
                  <p className="text-warm-gray">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-center">
            Skills I&apos;m Developing
          </h2>
          <p className="text-warm-gray text-center mb-16 max-w-2xl mx-auto">
            Photography is a continuous learning process. These are the areas I&apos;m actively exploring and improving.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill) => (
              <div
                key={skill}
                className="p-6 border border-white/10 hover:border-white/30 transition-colors text-center"
              >
                <p className="text-sm">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center">
            Photography Philosophy
          </h2>

          <div className="space-y-8 text-lg text-warm-gray leading-relaxed">
            <p className="text-2xl font-serif text-white text-center">
              "Every photograph should have a reason to exist."
            </p>

            <p>
              I believe that good photography isn&apos;t just about technical perfection—it&apos;s about intention, observation, and storytelling.
            </p>

            <p>
              Photography allows me to slow down, see the world differently, and create something that preserves a moment, a feeling, or a story that might otherwise be forgotten.
            </p>

            <p>
              I&apos;m drawn to authentic moments—the quiet, the in-between, the unposed. The photographs I value most are the ones that feel honest.
            </p>

            <p>
              I&apos;m not chasing perfection. I&apos;m chasing connection, meaning, and the chance to create work that matters—to me, and hopefully to others.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Want to work together?
          </h2>
          <p className="text-warm-gray mb-8 max-w-2xl mx-auto">
            I&apos;m available for portrait sessions, event photography, and creative projects. Let&apos;s create something meaningful.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-warm-gray transition-colors uppercase tracking-wider text-sm font-medium"
          >
            Get In Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
