'use client'
import ProSections from "@/component/sections";
import formSchema, { FormData } from "@/schema/form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnjkwjjw";

export default function Contact() {
  const [submitError, setSubmitError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({ resolver: yupResolver(formSchema) });

  const submitForm = async (data: FormData) => {
    setSubmitError(false);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to send");
      }
    } catch (err) {
      setSubmitError(true);
      throw err; // rethrow so react-hook-form knows submission failed
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      const timeout = setTimeout(() => reset(), 2000);
      return () => clearTimeout(timeout);
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <ProSections id="contact" title="Contact">
      <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-5 w-full max-w-lg">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-medium">Name</label>
          <input
            id="name"
            className={`border rounded-md px-3 py-2 outline-none focus:border-black transition-colors ${
              errors.name ? "border-red-600" : "border-gray-300"
            }`}
            {...register("name")}
          />
          {errors.name && <p className="text-red-600 text-xs">{errors.name.message}</p>}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <input
            id="email"
            className={`border rounded-md px-3 py-2 outline-none focus:border-black transition-colors ${
              errors.email ? "border-red-600" : "border-gray-300"
            }`}
            {...register("email")}
          />
          {errors.email && <p className="text-red-600 text-xs">{errors.email.message}</p>}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-sm font-medium">Message</label>
          <textarea
            id="message"
            rows={5}
            className={`border rounded-md px-3 py-2 outline-none focus:border-black transition-colors resize-none ${
              errors.message ? "border-red-600" : "border-gray-300"
            }`}
            {...register("message")}
          />
          {errors.message && <p className="text-red-600 text-xs">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-black text-white rounded-md px-5 py-2.5 font-medium disabled:opacity-50 self-start"
        >
          {isSubmitting ? "Sending..." : isSubmitSuccessful ? "Sent ✓" : "Contact Me!"}
        </button>

        {submitError && (
          <p className="text-red-600 text-sm">
            Something went wrong — please try again or email me directly.
          </p>
        )}
      </form>
    </ProSections>
  );
}