import React, { useRef } from "react";
import { motion, useAnimationFrame, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/utils/cn";

export function Button({
    borderRadius = "1.75rem",
    children,
    as: Component = "button",
    containerClassName,
    borderClassName,
    duration,
    className,
    ...otherProps
}) {
    return (
        React.createElement(Component, Object.assign({}, otherProps, {
            className: cn("bg-transparent relative text-xl  h-full w-full p-[1px] overflow-hidden ", containerClassName),
            style: {
                borderRadius: borderRadius
            }
        }), React.createElement("div", {
            className: "absolute inset-0",
            style: {
                borderRadius: `calc(${borderRadius} * 0.96)`
            }
        }, React.createElement(MovingBorder, {
            duration: duration,
            rx: "30%",
            ry: "30%"
        }, React.createElement("div", {
            className: cn("h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]", borderClassName)
        }))), React.createElement("div", {
            className: cn("relative bg-gradient-to-r from-blue-500 to-purple-500/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased", className),
            style: {
                borderRadius: `calc(${borderRadius} * 0.96)`
            }
        }, children))
    );
}

export const MovingBorder = ({
    children,
    duration = 2000,
    rx,
    ry,
    ...otherProps
}) => {
    const pathRef = useRef();
    const progress = useMotionValue(0);

    useAnimationFrame(time => {
        const length = pathRef.current?.getTotalLength();

        if (length) {
            const pxPerMillisecond = length / duration;
            progress.set(time * pxPerMillisecond % length);
        }
    });

    const x = useTransform(progress, val => pathRef.current?.getPointAtLength(val).x);
    const y = useTransform(progress, val => pathRef.current?.getPointAtLength(val).y);
    const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;
    return React.createElement(React.Fragment, null, React.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: "absolute h-full w-full",
        width: "100%",
        height: "100%"
    }, otherProps), React.createElement("rect", {
        fill: "none",
        width: "100%",
        height: "100%",
        rx: rx,
        ry: ry,
        ref: pathRef
    })), React.createElement(motion.div, {
        style: {
            position: "absolute",
            top: 0,
            left: 0,
            display: "inline-block",
            transform
        }
    }, children));
};
