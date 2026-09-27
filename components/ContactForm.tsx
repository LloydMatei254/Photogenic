'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    photoType: '',
    preferredDate: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Connect to email service (Resend, SendGrid, etc.)
    // For now, just simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setSubmitStatus('success');

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      photoType: '',
      preferredDate: '',
      message: '',
    });

    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm uppercase tracking-wider mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-neutral-900 border border-white/10 focus:border-white/30 focus:outline-none transition-colors"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm uppercase tracking-wider mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-neutral-900 border border-white/10 focus:border-white/30 focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm uppercase tracking-wider mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 bg-neutral-900 border border-white/10 focus:border-white/30 focus:outline-none transition-colors"
          />
        </div>

        {/* Photo Type */}
        <div>
          <label htmlFor="photoType" className="block text-sm uppercase tracking-wider mb-2">
            Type of Photography *
          </label>
          <select
            id="photoType"
            required
            value={formData.photoType}
            onChange={(e) => setFormData({ ...formData, photoType: e.target.value })}
            className="w-full px-4 py-3 bg-neutral-900 border border-white/10 focus:border-white/30 focus:outline-none transition-colors"
          >
            <option value="">Select a type</option>
            <option value="portrait">Portrait</option>
            <option value="event">Event</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="corporate">Corporate</option>
            <option value="product">Product</option>
            <option value="street">Street/Documentary</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* Preferred Date */}
      <div>
        <label htmlFor="preferredDate" className="block text-sm uppercase tracking-wider mb-2">
          Preferred Date
        </label>
        <input
          type="date"
          id="preferredDate"
          value={formData.preferredDate}
          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
          className="w-full px-4 py-3 bg-neutral-900 border border-white/10 focus:border-white/30 focus:outline-none transition-colors"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm uppercase tracking-wider mb-2">
          Message *
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 bg-neutral-900 border border-white/10 focus:border-white/30 focus:outline-none transition-colors resize-none"
          placeholder="Tell me about your project, vision, or any specific requirements..."
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto px-12 py-4 bg-white text-black hover:bg-warm-gray transition-colors uppercase tracking-wider text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Inquiry'}
        </button>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-900/30 border border-green-500/30 text-green-200 text-sm">
          Thank you for your message! I&apos;ll get back to you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-900/30 border border-red-500/30 text-red-200 text-sm">
          Something went wrong. Please try again or email me directly.
        </div>
      )}
    </form>
  );
}
