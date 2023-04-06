import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "yup-phone";



const SimpleForm = () => {
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phoneNo:""
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Min 3 characters or greater")
        .max(15, "Must be 15 characters or less")
        .required("Required"),

      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(
          8,
          "password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special"
        )
        .matches(passwordRules, {
          message:
            "min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit",
        })
        .required("Required"),
        phoneNo:Yup.string()
        // .phone("IN", true,"Phone No is Invalid")
        .required("Required")
    }),
    onSubmit: () => {
      const obj = {
        name:formik.values.name,
        email:formik.values.email,
        password:formik.values.password,
        phone:formik.values.phone
      }
      console.log("Data",obj);
       // initialValues: {
      //     name: "",
      //     email: "",
      //     password: "",
      //   },
      // console.log(mobile.isValidSync("+919876543210"));
      toast('🦄 Form Submitted SuccessFully..!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
        formik.resetForm();
      },
  });
  return (
    <div className="bg-[#19376D] min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold text-white text-center my-4">
        Simple Form
      </h1>
      <div className="bg-[#B2A4FF] rounded-lg">
        <form onSubmit={formik.handleSubmit} className="flex flex-col py-4 ">
          <label htmlFor="name" className="text-white m-4 font-bold">
            Name :&nbsp;
            <input
              type="text"
              name="name"
              className="text-black p-1 rounded-sm font-semibold outline-none"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <h1 className="text-[red]">{formik.errors.name}</h1>
            )}
          </label>

          <label htmlFor="name" className="text-white m-4 font-bold">
            Email :&nbsp;
            <input
              type="email"
              name="email"
              className="text-black p-1 rounded-sm font-semibold outline-none"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <h1 className="text-[red]">{formik.errors.email}</h1>
            )}
          </label>

          <label htmlFor="Password" className="text-white m-4 font-bold">
            Password :&nbsp;
            <input
              type="text"
              name="password"
              className="text-black p-1 rounded-sm font-semibold outline-none"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
         
            {formik.touched.password && formik.errors.password && (
              <h1 className="text-[red]">{formik.errors.password}</h1>
            )}
          </label>
          <label htmlFor="Password" className="text-white m-4 font-bold">
            Phone No :&nbsp;
            <input
              type="number"
              name="phoneNo"
              className="text-black p-1 rounded-sm font-semibold outline-none"
              onChange={formik.handleChange}
              value={formik.values.phoneNo}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phoneNo && formik.errors.phoneNo && (
              <h1 className="text-[red]">{formik.errors.phoneNo}</h1>
            )}
          </label>

          <button
            type="submit"
            className="bg-[#0B2447] p-2 font-bold rounded-lg text-white mx-16 hover:bg-[#576CBC]"
          >
            Sumbit Form
          </button>
        </form>
      </div>
    </div>
  );
};

export default SimpleForm;
