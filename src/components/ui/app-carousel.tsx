import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export function AppCarousel() {
  return (
    <Carousel className="flex-1 mx-8 my-4">
      <CarouselContent className="h-full gap-4">
        <CarouselItem className="lg:basis-1/5 sm:basis-1/3 basis-1/2 h-full bg-gray-200 rounded-sm"></CarouselItem>
        <CarouselItem className="lg:basis-1/5 sm:basis-1/3 basis-1/2 h-full bg-gray-200 rounded-sm"></CarouselItem>
        <CarouselItem className="lg:basis-1/5 sm:basis-1/3 basis-1/2 h-full bg-gray-200 rounded-sm"></CarouselItem>
        <CarouselItem className="lg:basis-1/5 sm:basis-1/3 basis-1/2 h-full bg-gray-200 rounded-sm"></CarouselItem>
        <CarouselItem className="lg:basis-1/5 sm:basis-1/3 basis-1/2 h-full bg-gray-200 rounded-sm"></CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
