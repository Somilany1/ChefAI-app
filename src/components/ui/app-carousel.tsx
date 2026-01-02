import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export function AppCarousel() {
  return (
    <Carousel className="mx-8 my-4">
      <CarouselContent className="gap-4">
        <CarouselItem className="basis-1/4 bg-gray-200 rounded-sm">First Recipe</CarouselItem>
        <CarouselItem className="basis-1/4 bg-gray-200 rounded-sm">Second Recipe</CarouselItem>
        <CarouselItem className="basis-1/4 bg-gray-200 rounded-sm">Third Recipe</CarouselItem>
        <CarouselItem className="basis-1/4 bg-gray-200 rounded-sm">Fourth Recipe</CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
