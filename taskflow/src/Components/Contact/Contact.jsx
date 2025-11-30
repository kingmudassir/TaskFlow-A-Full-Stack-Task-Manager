import { useForm } from 'react-hook-form'
import object_contactUs from '../../appwrite/Contact Us/contact';

function ContactUs() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = async (data) => {
    try {
      await object_contactUs.AddMessage_contactUs(data)
      alert("Message Sent!")
      reset();
    } catch (error) {
      console.log("Error in onSubmit - Contact.jsx: ", error);
      alert("Something went wrong!")
    }
  }

  return (
    <div 
    id='contact'
    className="bg-gray-50 px-6 py-16">

      <section className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions, feedback, or just want to get in touch? Fill out the form below and we'll respond as soon as possible.
        </p>
      </section>


      <section className="max-w-2xl mx-auto">
        <form 
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-xl shadow-lg space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="font-semibold text-gray-700 mb-2">Name</label>
            <input
              {...register("Name", {required: "Name is required",})}
              type="text"
              id="name"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
            />
            {errors.Name && <span className="text-red-500 text-sm">{errors.Name.message}</span>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold text-gray-700 mb-2">Email</label>
            <input
              {...register("Email", {required: "Email is required", pattern: {value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, message: "Enter a valid email address"}})}
              type="email"
              id="email"
              placeholder="your@email.com"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
            />
            {errors.Email && (
            <span className="text-red-500 text-sm">{errors.Email.message}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="font-semibold text-gray-700 mb-2">Message</label>
            <textarea
              {...register("Message", {required: "Message is required"})}
              id="message"
              rows="5"
              placeholder="Your Message"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
            />
            {errors.Message && (
            <span className="text-red-500 text-sm mt-1">{errors.Message.message}</span>
            )}
          </div>

          <button
            type="submit"
            className="bg-teal-400 hover:bg-cyan-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

export default ContactUs;
