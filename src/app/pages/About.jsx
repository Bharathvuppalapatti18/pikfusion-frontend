// export const About = () => (
//     <section className="py-5 container classic-font">
//       <h2>About Us</h2>
//       <p>
//         At PikFusion, creativity meets strategy. We are a passionate team of designers, developers, and brand experts committed
//         to delivering innovative digital experiences. Our mission is to empower businesses by fusing design excellence with
//         powerful technology.
//       </p>
//     </section>
//   );
import React from 'react';
import '../../assets/style.css';
import system from '../../assets/system_2.jpeg';

export const About = () => (
    <div className="classic-font">
        {/* Hero Heading */}
        <section className="py-5 text-center bg-light">
            <div className="container">
                <h1 className="fw-bold">"Innovating IT Solutions, Empowering Your Growth!"</h1>
            </div>
        </section>

        {/* Intro Paragraph */}
        <section className="py-5">
            <div className="container">
                <h3 className="fw-bold mb-4">
                    For this part, we will write an additional introduction of yourself or your business.
                </h3>
                <p className="mb-3">
                    This can be about your company history, success stories, or the product or services you offer. It can also tell
                    about how you helped clients achieve their desired results.
                </p>
                <div className="row mt-4 gx-4"> {/* gx-4 adds horizontal spacing between columns */}
                    <div className="col-md-6">
                        <div className="p-3 bg-light rounded-3">
                            <h6 className='fw-bold'>Pikfusion was founded to merge spiritual values with modern tech.</h6>
                            <p className='fst-italic'>

                                Inspired by Krishna-conscious principles, we help startups and organizations build purposeful digital solutions rooted in mindfulness and integrity.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="p-3 bg-light rounded-3">
                            <h6 className='fw-bold'>We go beyond websites—we build meaningful digital journeys.</h6>
                            <p className='fst-italic'>

                                From empowering NGOs to scaling ethical startups, our tailored solutions help clients grow while staying true to their mission and values.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        {/* Image */}
        <section className="text-center">
            <img src={system} alt="About Visual" className="img-fluid rounded" style={{ width: '80%', height: 'auto', maxHeight: '600px', objectFit: 'cover' }} />
        </section>

        {/* Benefits */}
        <section className="py-5">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-4">
                        <p className="text-primary fw-semibold">01</p>
                        <h5 className="fw-bold">Purpose-Driven Innovation</h5>
                        <p>
                            Our solutions aren’t just about tech - they’re about aligning your business with a deeper mission that resonates with your audience.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <p className="text-primary fw-semibold">02</p>
                        <h5 className="fw-bold">Tailored Tech Experiences</h5>
                        <p>
                            We design and develop digital platforms specifically crafted to meet your unique vision, industry, and goals - no cookie-cutter stuff.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <p className="text-primary fw-semibold">03</p>
                        <h5 className="fw-bold">Long-Term Value Creation</h5>
                        <p>
                            Beyond project delivery, we focus on building sustainable systems and nurturing lasting partnerships that grow with you.
                        </p>
                    </div>
                </div>
            </div>
        </section>


        {/* Vision & Mission */}
        <section className="py-5 bg-light">
            <div className="container">
                <div className="mb-4">
                    <h5 className="fw-bold">Our Vision</h5>
                    <p>
                        At Pikfusion, we envision a future where mindful living and modern innovation come together to drive meaningful change.
                        We aim to lead a new wave of purpose-driven tech—where success uplifts not just businesses, but society as a whole.
                    </p>
                </div>
                <hr />
                <div className="mt-4">
                    <h5 className="fw-bold">Our Mission</h5>
                    <p>
                        Our mission is to build conscious digital solutions that reflect values, purpose, and impact. By aligning technology
                        with intention, we empower leaders to create platforms that inspire growth, connection, and positive transformation.
                    </p>
                </div>
            </div>
        </section>



        {/* Call to Action */}
        <section className="py-5 text-center text-white" style={{ backgroundColor: '#3c3c4e' }}>
            <div className="container">
                <h2 className="fw-bold mb-3">We Will Write a Convincing Call To Action to Engage Your Audience Here</h2>
                <p className="mb-4">
                    We will write a sub-headline that introduces your call to action to website visitors here
                </p>
                <a href="/contact" className="btn btn-primary px-4">Call To Action</a>
            </div>
        </section>
    </div>
);
