import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export function AppCarousel() {
  return (
    <Carousel className="flex-1 mx-8 my-4">
      <CarouselContent className="h-full gap-4">
        <CarouselItem className="basis-1/4 h-full bg-gray-200 rounded-sm">First Recipe</CarouselItem>
        <CarouselItem className="basis-1/4 h-full bg-gray-200 rounded-sm">Second Recipe</CarouselItem>
        <CarouselItem className="basis-1/4 h-full bg-gray-200 rounded-sm">Third Recipe</CarouselItem>
        <CarouselItem className="basis-1/4 h-full bg-gray-200 rounded-sm">Fourth Recipe</CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
