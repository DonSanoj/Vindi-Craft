const clsx = require('clsx'); // Import clsx library in JavaScript
const { twMerge } = require('tailwind-merge'); // Import twMerge function from tailwind-merge in JavaScript

function cn(...inputs) {
    return twMerge(clsx(...inputs));
}

module.exports = { cn };