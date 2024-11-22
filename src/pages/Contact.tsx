import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [submitted, setSubmitted] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const whatsappNumber = "6281316195586"; // Ganti dengan nomor WhatsApp Anda (tanpa +)
      const whatsappMessage = `Name: ${data.name}%0AEmail: ${data.email}%0AMessage: ${data.message}`;
      
      // Redirect ke WhatsApp
      window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
      
      setSubmitted(true);
      reset();
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div className="mt-10 max-w-lg mx-auto">
      <motion.div
        className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8 rounded-lg shadow-xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-extrabold text-white text-center mb-6">
          Contact Me
        </h2>
        {submitted && (
          <motion.div
            className="text-center bg-green-100 border border-green-300 text-green-600 px-4 py-3 rounded mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p>Your message has been sent successfully!</p>
          </motion.div>
        )}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div>
            <label className="block text-white font-semibold mb-2">Name</label>
            <input
              type="text"
              {...register('name', { required: true })}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.name ? 'border-red-500' : 'border-transparent'
              } focus:outline-none focus:ring-2 focus:ring-purple-300`}
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
          </div>
          <div>
            <label className="block text-white font-semibold mb-2">Email</label>
            <input
              type="email"
              {...register('email', { required: true })}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.email ? 'border-red-500' : 'border-transparent'
              } focus:outline-none focus:ring-2 focus:ring-purple-300`}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
          </div>
          <div>
            <label className="block text-white font-semibold mb-2">Message</label>
            <textarea
              {...register('message', { required: true })}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.message ? 'border-red-500' : 'border-transparent'
              } focus:outline-none focus:ring-2 focus:ring-purple-300`}
              placeholder="Enter your message"
              rows={4}
            />
            {errors.message && <p className="text-red-500 text-sm">Message is required</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;
