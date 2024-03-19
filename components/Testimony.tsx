import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Image from "next/image";

const data = [
  {
    name: "Md Rabiul Islam",
    image: "/rabiul.jpeg",
    quote:
      "Inkam has given me the opportunity to earn more very easily. Now I have more digital products to sell and work as a supervisor to handle team under me.",
  },
  {
    name: "MD Minhaz Torafder Fahim",
    image: "/taraf.jpeg",
    quote:
      "Transitioning from a full-time job to freelancing with Inkam has allowed me to delve into the dynamic field of digital activation. It's an exciting change that offers flexibility and the chance to work on innovative projects.",
  },
];

const Testimony = () => {
  return (
    <div className="py-6 container mx-auto">
      <h2 className="text-3xl md:text-center font-bold uppercase pb-4 ">
        What our agents say
      </h2>
      <Carousel>
        <CarouselContent>
          {data.map((item) => (
            <CarouselItem className=" sm:basis-1/2 pointer-events-none">
              <Card className="px-6 py-8 text-sm space-y-2">
                <p className="font-base text-sm pb-4">{item.quote}</p>
                <Image
                  src={item.image}
                  height={100}
                  width={100}
                  className="rounded-full aspect-square object-cover"
                  alt={item.name}
                />
                <p className="font-bold pt-4">{item.name}</p>
                <Badge variant={"default"}>Uddogta</Badge>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Testimony;
