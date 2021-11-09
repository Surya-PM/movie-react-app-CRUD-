import React from 'react';
import {Formik} from "formik";

export function BasicForm() {
  return (
      <h1>hello</h1>
//     <div>

//      <Formik
//        initialValues={{ email: 'surya@gmail.com', password: '' }}
//        onSubmit={(values)=>{
//         console.log("onsubmit",values);
//     }}
//      >
//       {(formik)=> {
//          <form onSubmit={formik.handleSubmit}>
//             <input
//             type="email"
//             id="email"
//             name="email"
//             value={formik.values.email}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             placeholder="Enter your email"
//             />
//             <input
//             type="password"
//             id="password"
//             name="password"
//             value={formik.values.password}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             placeholder="Enter your password"
//             />
//            <button type="submit">
//              Submit
//            </button>
//          </form>
// }}
//      </Formik>
    
//     </div>
  );
}



{/* <Formik 
initialValues={{email:"surya@gmail.com",password:""}}
onSubmit={(values)=>{
    console.log("onsubmit",values);
}}
>
    {(formik)=>{
        <form onSubmit={formik.handleSubmit}>
            <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your email"
            />
            <input
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your password"
            />
            <button type="submit">Submit</button>
        </form>
    }}

</Formik> */}