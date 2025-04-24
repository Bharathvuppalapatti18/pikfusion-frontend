import React from 'react';
import '../../assets/style.css';

import de from '../../assets/de.jpeg';
import seo from '../../assets/seo.jpeg';
import cd from '../../assets/cd.jpeg';
import si from '../../assets/si.jpeg';

const offerings = [
    {
        id: 1,
        title: 'DIGITAL ENGINEERING',
        description:
            'We deliver innovative web solutions meticulously crafted with precision, creativity, and a deep understanding of modern digital trends. From sleek, responsive designs to powerful backend systems.',
        image: de
    },
    {
        id: 2,
        title: 'SEO OPTIMIZATION',
        description:
            'Enhance your online presence and attract the right audience with data-driven SEO strategies tailored to your brand. By leveraging in-depth analytics, keyword research, and performance tracking. uses it to help users achieve their desired goals.',
        image: seo
    },
    {
        id: 3,
        title: 'CREATIVE DESIGN',
        description:
            'We create stunning visual experiences designed to captivate your audience and drive meaningful engagement. Every element—from layout and color to motion and interactivity is thoughtfully crafted to not only grab attention but also guide users seamlessly toward action.',
        image: cd
    },
    {
        id: 4,
        title: 'STRAGETIC INNOVATION',
        description:
            'We develop transformative digital strategies designed to propel your business forward, combining data-driven insights, cutting-edge technology, and tailored solutions to unlock new opportunities, enhance customer engagement, and drive sustained growth in an ever-evolving digital landscape.',
        image: si
    },
];

export const Services = () => (
    <div className="classic-font">
        {/* Header */}
        <section className="py-5 text-center bg-light">
            <div className="container">
                <h1 className="fw-bold">Headline for the Offerings Page Will Be Here</h1>
            </div>
        </section>

        {/* Offerings List */}
        <section className="py-5">
            <div className="container">
                {offerings.map((offering, index) => {
                    const isEven = index % 2 !== 0;
                    return (
                        <React.Fragment key={offering.id}>
                            <div className="row align-items-center mb-5">
                                {/* Image - Left for odd, Right for even */}
                                <div className={`col-md-6 ${isEven ? 'order-md-2' : ''} d-flex justify-content-${isEven ? 'end' : 'start'}`}>
                                    <img
                                        src={offering.image}
                                        alt={offering.title}
                                        className="img-fluid rounded"
                                        style={{ maxWidth: '90%', objectFit: 'cover' }}
                                    />
                                </div>

                                {/* Text */}
                                <div className={`col-md-6 ${isEven ? 'order-md-1' : ''}`}>
                                    <p className="text-primary fw-semibold">0{offering.id}</p>
                                    <h4 className="fw-bold">{offering.title}</h4>
                                    <p>{offering.description}</p>
                                </div>
                            </div>
                            {/* Horizontal line after every item */}
                            <hr className="my-4" />
                        </React.Fragment>
                    );
                })}
            </div>
        </section>

        {/* Call to Action */}
        <section className="py-5 text-center text-white" style={{ backgroundColor: '#3c3c4e' }}>
            <div className="container">
                <h2 className="fw-bold mb-3">We Will Write a Convincing Call To Action to Engage Your Audience Here</h2>
                <p className="mb-4">We will write a sub-headline that introduces your call to action to website visitors here</p>
                <a href="/contact" className="btn btn-primary px-4">Call To Action</a>
            </div>
        </section>
    </div>
);
