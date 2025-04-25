"use client"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Gallery: React.FC = () => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const element = wrapperRef.current;
        const sections = gsap.utils.toArray(".card");

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: element,
                pin: true,
                scrub: 1,
                end: () => `+=${element?.scrollWidth}`,
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="gallery-container">
            <div className="wrapper-image" ref={wrapperRef}>
                <h1 className="gallery-title">Gallery</h1>
                <div className="card" id="card-1">
                    <img src="/item1.jpg" alt="Item 1" />
                </div>
                <div className="card" id="card-2">
                    <img src="/item2.jpg" alt="Item 2" />
                </div>
                <div className="card" id="card-3">
                    <img src="/item3.jpg" alt="Item 3" />
                </div>
                <div className="card" id="card-4">
                    <img src="/item4.jpg" alt="Item 4" />
                </div>
                <div className="card" id="card-5">
                    <img src="/item5.jpg" alt="Item 5" />
                </div>
                <div className="card" id="card-6">
                    <img src="/item6.jpg" alt="Item 6" />
                </div>
                <div className="card" id="card-7">
                    <img src="/item7.jpg" alt="Item 7" />
                </div>
                <div className="card" id="card-8">
                    <img src="/item8.jpg" alt="Item 8" />
                </div>
            </div>
            {/* <div className="outro">
                <img src="/portrait5.jpg" />
            </div>
            <div className="outro2">
                <img src="/portrait4.jpg" />
            </div> */}
            <div className="outro3">
                <img src="/item6.jpg" />
                <h1>Contact Us</h1>
                <div className="contact-form-section">
                    <form className="contact-form">
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <textarea name="message" placeholder="Your Message" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default Gallery;
