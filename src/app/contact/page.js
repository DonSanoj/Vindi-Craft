'use client';

import BackToTop from "@/components/layout/BackToTop";
import {
    Button,
    Center,
    Container,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Textarea
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function Contact() {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "3990a67d-2dc9-447e-ae92-f561606674bb");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <>
            <section className="mt-8 sm:mt-10 max-w-6xl mx-auto p-4 border-gray-600 sm:mb-16 scroll-smooth flex h-screen">
                <div className="flex justify-center items-center flex-col w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative">
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

                    <h1 className="mt-0 text-5xl sm:text-4xl lg:text-6xl bg-gradient-to-r from-blue-500 via-purple-500 to-purple-500 bg-clip-text text-transparent text-center">
                        Contact Us
                    </h1>

                    <h3 className="mt-3 sm:mt-5 lg:mt-10 text-lg lg:text-xl text-gray-400 sm:text-gray-500 text-center">
                        We love hearing from our community! Whether you have questions about our resin crafts, need assistance with an order, or simply want to share your thoughts, we're here to help. Reach out to us through any of the methods below, and we'll get back to you as soon as possible.
                    </h3>
                </div>
            </section>

            <section>
                <Container maxW={'580px'} mb={14} borderColor={"white"}>
                    <Heading fontSize={25} paddingBottom={8}>Send us an Email</Heading>

                    <form onSubmit={onSubmit}>
                        <FormControl isRequired mb={5}>
                            <FormLabel>Name</FormLabel>
                            <Input
                                type="text"
                                name="name"
                                errorBorderColor="red.300"
                            />
                            <FormErrorMessage>Required</FormErrorMessage>
                        </FormControl>

                        <FormControl isRequired mb={5}>
                            <FormLabel>Email</FormLabel>
                            <Input
                                type="email"
                                name="email"
                                errorBorderColor="red.300"
                            />
                            <FormErrorMessage>Required</FormErrorMessage>
                        </FormControl>

                        <FormControl isRequired mb={5}>
                            <FormLabel>Message</FormLabel>
                            <Textarea
                                type="text"
                                name="message"
                                errorBorderColor="red.300"
                                rows={4}
                            />
                            <FormErrorMessage>Required</FormErrorMessage>
                        </FormControl>

                        <Center height="30px">
                            <Button
                                variant="outline"
                                colorScheme="blue"
                                textColor="white"
                                width={320}
                                _hover={{ textColor: "white", bgGradient: "linear(to-r, blue.500, purple.500)" }}
                                type="submit"
                            >
                                Send Email
                            </Button>
                        </Center>
                    </form>

                    {result && (
                        <Center mt={4}>
                            <p>{result}</p>
                        </Center>
                    )}
                </Container>
            </section>

            <BackToTop />

        </>
    );
}
