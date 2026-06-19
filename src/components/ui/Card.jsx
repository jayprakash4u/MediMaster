import { forwardRef } from "react";
import { cn } from "@/lib/cn";

/** Standard content card — icons, features, links */
export const Card = forwardRef(function Card({ as: Tag = "div", className, ...props }, ref) {
  return <Tag ref={ref} className={cn("card-surface", className)} {...props} />;
});

/** Compact card — stats, logos, list items */
export const CardCompact = forwardRef(function CardCompact(
  { as: Tag = "div", className, ...props },
  ref
) {
  return <Tag ref={ref} className={cn("card-surface-sm", className)} {...props} />;
});

/** Image + text card — services, portfolio, blog */
export const CardMedia = forwardRef(function CardMedia(
  { as: Tag = "article", className, ...props },
  ref
) {
  return <Tag ref={ref} className={cn("card-media type-card", className)} {...props} />;
});

export function CardMediaImage({ className, ...props }) {
  return <div className={cn("card-media__image", className)} {...props} />;
}

export function CardMediaBody({ className, ...props }) {
  return <div className={cn("card-media__body", className)} {...props} />;
}

/** Icon badge used inside standard cards */
export function CardIcon({ className, ...props }) {
  return <div className={cn("card-icon", className)} {...props} />;
}

/** Timeline / accent cards — left border highlight */
export const CardAccent = forwardRef(function CardAccent(
  { as: Tag = "article", className, accentClassName, ...props },
  ref
) {
  return (
    <Tag ref={ref} className={cn("card-surface-accent", accentClassName, className)} {...props} />
  );
});
