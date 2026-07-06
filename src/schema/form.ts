import * as Yup from 'yup'

const formSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
  .email("Please enter a valid email")
  .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email")
  .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

export type FormData = Yup.InferType<typeof formSchema>;
export default formSchema;