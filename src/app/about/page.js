'use client'

import React from "react";
import { SectionHeaders } from "@/components/layout/SectionHeaders";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/moving-border";

export default function About() {

    return (
        <>
            {/* 

                <div className=" mt-4">

                    <h2>What We Offer</h2>
                    <ul className=" list-disc">
                        <li><span>Handcrafted Treasures: </span>
                            Each piece at Vindi Craft is meticulously handcrafted with attention to detail,
                            making it a one-of-a-kind treasure.
                        </li>
                        <li><span>Custom Creations: </span>
                            We offer custom-made designs tailored to your preferences,
                            ensuring that every piece is as unique as you are.
                        </li>
                        <li><span>Wide Range of Products: </span>
                            From jewelry and home decor to gifts and personalized items,
                            we have a diverse range of products to suit every occasion and taste.
                        </li>
                    </ul>

                </div>

                <div>
                    <h2>Our Commitment</h2>
                    <ul className=" list-disc">
                        <li><span>Quality: </span>
                            We believe in using high-quality materials and techniques to
                            create durable and beautiful crafts that stand the test of time.
                        </li>
                        <li><span>Creativity: </span>
                            Innovation is at the heart of everything we do.
                            We constantly explore new ideas and techniques to bring fresh and exciting designs to life.
                        </li>
                        <li><span>Fast and Reliable Delivery: </span>
                            We are committed to ensuring that your orders are delivered promptly and efficiently.
                            Our streamlined processes and reliable shipping partners
                            enable us to offer fast delivery without compromising on quality.
                        </li>
                        <li><span>Customer Satisfaction: </span>
                            Your satisfaction is our top priority.
                            We strive to provide excellent customer service and ensure that every purchase exceeds your expectations.
                        </li>
                    </ul>
                </div>

                <div>
                    <h2>Get in Touch</h2>
                    <p>Experience the beauty of resin artistry with Vindi Craft! Explore our collection, discover unique creations,
                        and let us bring your artistic visions to life.

                        <Link href={'/contact'} className=" text-blue-700"> Contact us </Link>

                        today to learn more or discuss custom orders.
                    </p>
                </div> */}

            {/* </div>

            </section> */}

            <section id="hero" className="mt-10 sm:mt-14 max-w-6xl mx-auto p-4 border-gray-600 sm:mb-16 scroll-smooth flex h-screen">

                <div className="flex justify-center items-center flex-col w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative">

                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

                    <h1
                        className="mt-3 text-5xl sm:text-4xl lg:text-6xl text-gradient-to-r from-blue-500 via-purple-500 to-purple-500 text-center">
                        About Vindi Craft
                    </h1>

                    <h3 className="mt-3 sm:mt-5 lg:mt-10 text-lg lg:text-xl text-gray-400 sm:text-gray-500 text-center">
                        Welcome to Vindi Craft, your premier destination for exquisite resin crafts! <br /> At Vindi Craft,
                        we are passionate about turning ordinary materials into extraordinary works of art through the innovative use of resin.
                        Our mission is to inspire creativity and bring joy to every customer through our unique handmade creations.
                    </h3>

                </div>

            </section>

            <section className="mt-[-30px] sm:mt-[-70px] flex justify-center items-center">
                <div className="max-w-4xl px-4 mx-auto sm:text-left text-center">
                    <SectionHeaders mainHeader={'Our Story'} />

                    <Button className="cursor-default" borderRadius="1.75rem" duration={5000}>
                        <h2 className="p-10 text-lg text-gray-300">
                            Vindi Craft was founded with a vision to redefine artistry using resin as a medium.
                            Our journey began with a love for crafting and a desire to explore the endless possibilities that resin offers.
                            Over time, we have honed our skills, experimented with techniques, and developed a signature style that reflects our dedication to quality and craftsmanship.
                        </h2>
                    </Button>
                </div>
            </section>

        </>
    );
}