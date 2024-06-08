import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {

    const [showPopup, setShowPopup] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setShowPopup(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowPopup(true);
            } else {
                setShowPopup(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {showPopup && (
                <Box
                    position="fixed"
                    bottom="100px"
                    right="20px"
                    bgGradient="linear(to-b, blue.500, purple.500)"
                    color="white"
                    p={4}
                    borderRadius="md"
                    boxShadow="lg"
                    cursor="pointer"
                    onClick={scrollToTop}
                    zIndex={1000}
                >
                    <FaArrowUp className=" size-4" />
                </Box>
            )}
        </>
    );
}