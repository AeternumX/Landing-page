
import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = React.forwardRef(({ className, autoplay, ...props }, ref) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (autoplay && emblaApi) {
      const interval = setInterval(scrollNext, autoplay);
      return () => clearInterval(interval);
    }
  }, [autoplay, emblaApi, scrollNext]);

  return (
    <div ref={ref} className={cn("relative", className)} {...props}>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {props.children}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
        onClick={() => emblaApi?.scrollPrev()}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
        onClick={() => emblaApi?.scrollNext()}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
});
Carousel.displayName = "Carousel";

const CarouselSlide = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("min-w-0 flex-[0_0_33.33%] pl-4", className)}
      {...props}
    />
  );
});
CarouselSlide.displayName = "CarouselSlide";

export { Carousel, CarouselSlide };
