import * as React from "react"

import { cn } from "@/lib/utils"
import PropTypes from "prop-types";

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
    {...props} />
))
Card.displayName = "Card"



const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
    {...props} />
))
CardTitle.displayName = "CardTitle";


const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col items-center p-6 pt-0", className)} {...props} />
));
CardHeader.displayName = "CardHeader";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

Card.propTypes = {
  className: PropTypes.string,
}

CardTitle.propTypes = { 
  className: PropTypes.string,
};

CardContent.propTypes = {
  className: PropTypes.string,
};

CardFooter.propTypes = {
  className: PropTypes.string,
};

CardHeader.propTypes = {
  className: PropTypes.string,
};

CardDescription.propTypes = {
  className: PropTypes.string,
};

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
