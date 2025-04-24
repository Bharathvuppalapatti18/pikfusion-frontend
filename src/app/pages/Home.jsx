// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { Carousel } from 'react-bootstrap';
// import flower_1 from '../../assets/flower_1.jpg'
// import flower_2 from '../../assets/flower_2.jpeg'
// import flower_3 from '../../assets/flower_3.avif'

// export default function Home() {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <div className="container mt-5 classic-font">
//       <section data-aos="fade-up" className="text-center">
//         <h1>Fusing Pixels, Igniting Brands</h1>
//         <p>We blend creativity with technology to empower businesses.</p>
//         <button className="btn btn-primary m-2">Get Started</button>
//         <button className="btn btn-outline-primary">Our Services</button>
//       </section>

//       <section className="mt-5" data-aos="fade-up">
//         <Carousel>
//           <Carousel.Item>
//             <img className="d-block w-100" src={flower_1} alt="Slide 1" />
//             <Carousel.Caption>
//               <h3>Creative Web Designs</h3>
//               <p>Modern, responsive, and pixel-perfect.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img className="d-block w-100" src={flower_2} alt="Slide 2" />
//             <Carousel.Caption>
//               <h3>Brand Strategy</h3>
//               <p>Crafting memorable identities.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img className="d-block w-100" src={flower_3} alt="Slide 3" />
//             <Carousel.Caption>
//               <h3>App Development</h3>
//               <p>Bringing your ideas to life with tech.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//       </section>
//     </div>
//   );
// }

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../assets/style.css';
import engineer_team from '../../assets/engineer_team.jpeg'
import lion from '../../assets/lion.jpeg'
import End_end from '../../assets/End_end.jpeg'
import tech_support from '../../assets/tech_support.jpeg'
import bulb from '../../assets/bulb.jpeg'

// ... (imports remain unchanged)

export default function Home() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="classic-font">
            {/* Hero Section */}
            <section className="text-center py-5 bg-white">
                <div className="container">
                    <h1 className="display-5 fw-bold text-dark">Transform Digital Visions with Pikfusion</h1>
                    <p className="lead mt-3 fw-light text-muted">We craft innovative digital solutions that bring your ideas to life. Pikfusion delivers cutting-edge technology and creative expertise.</p>
                    <a href="#contact" className="btn btn-primary mt-3 px-4 py-2">Get In Touch</a>
                </div>
            </section>

            {/* Services Section */}
            <section className="container my-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="fw-bold">Driving Business Growth with Tailored Solutions</h3>
                    <button className="btn btn-outline-primary">View All</button>
                </div>
                <div className="row">
                    {[
                        {
                            title: 'End-to-End Business Consultation',
                            desc: "Empowering enterprises from inception to sustained growth through integrated consultation. We deliver comprehensive, end-to-end solutions spanning...",
                            img: End_end,
                        },
                        {
                            title: 'Dedicated Engineering Team',
                            desc: 'Our expert engineering team excels at implementing complex business logic delivering tailored solutions that align precisely...',
                            img: engineer_team,
                        },
                        {
                            title: 'Long Term Technical Support',
                            desc: 'We forge lasting partnerships with our customers, ensuring their enduring success through proactive support and expert guidance...',
                            img: tech_support,
                        }
                    ].map((item, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card h-100 border-0 shadow-sm rounded-4">
                                <img src={item.img} className="card-img-top rounded-top-4" alt={item.title} />
                                <div className="card-body">
                                    <h5 className="card-title fw-semibold">{item.title}</h5>
                                    <p className="card-text text-muted">{item.desc}</p>
                                    <a href="#learn" className="btn btn-link text-primary px-0">Learn More →</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* About Section */}
            <section className="bg-light py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4 mb-md-0 pe-md-5">
                            <img src={lion} className="img-fluid rounded-4 shadow-sm" alt="About" />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fw-bold">Pikfusion is more than a startup - it is a purposeful endeavor born from a deeper vision.</h3>
                            <p className="text-muted">
                                Rooted in the principles of mindfulness and spiritual integrity, Pikfusion was established to harmonize modern enterprise with conscious living. Our journey began with a simple yet powerful idea: that Krishna Consciousness and corporate innovation can not only coexist, but elevate one another.</p>

                            <p className="text-muted">At Pikfusion, we are committed to creating workplaces that nurture both professional excellence and personal fulfillment. By integrating spiritual values into business strategy, we aspire to build a new paradigm—where success is measured not only by growth, but by the positive energy we cultivate and share.</p>

                            <p className="text-muted">From solving complex business challenges to empowering NGOs and mission-driven organizations, Pikfusion is setting a new standard—where technology, transformation, and transcendence come together with purpose......
                            </p>
                            <a href="#story" className="btn btn-link text-primary px-0">Read Our Story →</a>
                        </div>
                    </div>
                </div>
            </section >

            {/* Value Propositions */}
            <section className="container py-5">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <h3 className="fw-bold mb-5">Why Choose Pikfusion?</h3>

                        <div className="d-flex mb-3 align-items-start">
                            <div className="custom-icon me-3">
                                <span className="dot"></span>
                            </div>

                            <div>

                                <h6 className="fw-semibold mb-2 ">Spiritual Integrity in Business</h6>
                                <p className="mb-2 text-muted">
                                    We blend spiritual principles with enterprise strategy to create meaningful, conscious businesses.
                                </p>
                            </div>
                        </div>

                        <div className="d-flex mb-3 align-items-start">
                            <div className="custom-icon me-3">
                                <span className="dot"></span>
                            </div>
                            <div>
                                <h6 className="fw-semibold mb-2">Tailored Tech Solutions</h6>
                                <p className="mb-2 text-muted">
                                    Every solution we build is customized to your unique vision and operational needs.
                                </p>
                            </div>
                        </div>

                        <div className="d-flex mb-3 align-items-start">
                            <div className="custom-icon me-3">
                                <span className="dot"></span>
                            </div>
                            <div>
                                <h6 className="fw-semibold mb-2">Long-Term Partnership Focus</h6>
                                <p className="mb-2 text-muted">
                                    We’re here for the long run - providing continuous support, innovation, and improvement.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <img src={bulb} style={{ maxHeight: '500px', maxWidth: '600px', objectFit: 'cover' }} className="img-fluid rounded-4 shadow-sm" alt="Value Proposition" />
                    </div>
                </div>
            </section>


            {/* Testimonials */}
            <section className="bg-light py-5">
                <div className="container text-center">
                    <h4 className="mb-5 fw-bold">What Our Clients Say</h4>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="bg-white p-4 rounded-4 shadow-sm h-100">
                                <blockquote className="blockquote mb-0">
                                    <p className="fst-italic">
                                        "Working with Pikfusion was a game-changer. They didn’t just build us a website—they created a digital experience that reflects our mission and values. Their team understood our vision from day one, and the end result exceeded all expectations."
                                    </p>
                                    <footer className="blockquote-footer mt-3">Anjali Mehta, Founder, Conscious Living Collective</footer>
                                </blockquote>
                            </div>
                        </div>

                        <div className="col-md-6 mb-4">
                            <div className="bg-white p-4 rounded-4 shadow-sm h-100">
                                <blockquote className="blockquote mb-0">
                                    <p className="fst-italic">
                                        "Our website isn’t just beautiful—it’s meaningful. Pikfusion guided us through each phase with patience, creativity, and deep strategic insight. Their mindful approach brought clarity to our message and strength to our online presence."
                                    </p>
                                    <footer className="blockquote-footer mt-3">Leena Sharma, Director, Seva Impact Foundation</footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            < section className="bg-dark text-white py-5 text-center" >
                <div className="container">
                    <h4 className="fw-bold">Partner with Us to Unlock Scalable Solutions</h4>
                    <p className="text-light">Connect with the visionary experts driving innovation at PikFusion.</p>
                    <a href="#" className="btn btn-primary mt-3 px-4 py-2">Get In Touch</a>
                </div>
            </section >
        </div >
    );
}
