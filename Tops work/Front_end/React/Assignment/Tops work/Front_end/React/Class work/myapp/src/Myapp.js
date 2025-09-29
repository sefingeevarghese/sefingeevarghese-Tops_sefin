import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Index from "./Pages/Index"
import About from "./Pages/About"
import Treatment from "./Pages/Treatment"
import Doctors from "./Pages/Doctors"
import Testimonial from "./Pages/Testimonial"
import ContactUs from "./Pages/ContactUs"


function Myapp() {
	return (
		<>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Index/>}></Route>
				<Route path="/about" element={<About/>}></Route>
				<Route path="/treatment" element={<Treatment/>}></Route>
				<Route path="/doctors" element={<Doctors/>}></Route>
				<Route path="/testimonial" element={<Testimonial/>}></Route>
				<Route path="/contact" element={<ContactUs/>}></Route>
			</Routes>
		</BrowserRouter>
			

		</>
	)

}


export default Myapp