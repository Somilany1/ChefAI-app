import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

export function AppCarousel() {
  return (
    <Carousel className="h-0">
      <CarouselContent>
        <CarouselItem className="basis-1/4">First Recipe</CarouselItem>
        <CarouselItem className="basis-1/4">Second Recipe</CarouselItem>
        <CarouselItem className="basis-1/4">Third Recipe</CarouselItem>
        <CarouselItem className="basis-1/4">Fourth Recipe</CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
