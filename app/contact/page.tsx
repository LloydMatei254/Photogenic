import { Metadata } from 'next';
import { Mail, Instagram, Linkedin, MapPin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact | Lloyd Matsi Photography',
  description: 'Get in touch for photography inquiries, bookings, and creative collaborations.',
};

export default function ContactPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Get In Touch</h1>
          <p className="text-xl md:text-2xl text-warm-gray">
            Let&apos;s work together to create something meaningful
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-6 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-serif mb-6">Let&apos;s Connect</h2>
                <p className="text-warm-gray leading-relaxed mb-8">
                  Whether you&apos;re looking for portrait photography, event coverage, or a creative collaboration, 
                  I&apos;d love to hear from you. Fill out the form or reach out directly.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-warm-gray mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm uppercase tracking-wider text-warm-gray mb-1">Email</p>
                    <a 
                      href="mailto:hello@lloydmatsi.com"
                      className="hover:text-warm-gray transition-colors"
                    >
                      hello@lloydmatsi.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-warm-gray mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm uppercase tracking-wider text-warm-gray mb-1">Location</p>
                    <p>Nairobi, Kenya</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm uppercase tracking-wider text-warm-gray mb-4">Follow</p>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-white/30 hover:border-white/60 flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-white/30 hover:border-white/60 flex items-center justify-center transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="pt-8 border-t border-white/10">
                <p className="text-sm uppercase tracking-wider text-warm-gray mb-2">Availability</p>
                <p className="text-warm-gray text-sm">
                  Currently accepting bookings for portrait sessions, events, and creative projects.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-black p-8 md:p-12 border border-white/10">
                <h3 className="text-2xl font-serif mb-8">Send me a message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ/Info Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">
            What to Expect
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-serif mb-3">Response Time</h3>
              <p className="text-warm-gray">
                I typically respond to inquiries within 24-48 hours. If you don&apos;t hear from me, 
                please check your spam folder or reach out again.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif mb-3">Booking Process</h3>
              <p className="text-warm-gray">
                After our initial conversation, we&apos;ll discuss your needs, set a date, and confirm the details. 
                I&apos;ll share more information about preparation and what to expect during the session.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif mb-3">Pricing</h3>
              <p className="text-warm-gray">
                Every project is unique. I&apos;ll provide transparent pricing based on your specific needs, 
                timeline, and deliverables. Reach out for a custom quote.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif mb-3">Travel</h3>
              <p className="text-warm-gray">
                I&apos;m based in Nairobi, Kenya, and available for shoots within the city. 
                For locations outside Nairobi, travel arrangements can be discussed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
