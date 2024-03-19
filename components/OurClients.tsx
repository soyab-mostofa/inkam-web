import Image from "next/image";
import Marquee from "react-fast-marquee";

const clients = [
  "/clients/Instagram post - 1.png",
  "/clients/Instagram post - 2.png",
  "/clients/Instagram post - 3.png",
  "/clients/Instagram post - 4.png",
  "/clients/Instagram post - 5.png",
  "/clients/Instagram post - 6.png",
  "/clients/Instagram post - 7.png",
  "/clients/Instagram post - 8.png",
  "/clients/Instagram post - 9.png",
];

const OurClients = () => {
  return (
    <div className="py-16 max-w-7xl mx-auto">
      <h2 className="text-3xl container mx-auto  font-bold uppercase md:text-center">
        Our Clients
      </h2>
      <Marquee>
        {clients.map((client) => (
          <div
            key={client}
            className="w-32 h-32 object-cover  bg-gray-300  relative left-1/2 -translate-x-1/2 ml-16"
          >
            <Image
              className="object-cover"
              src={client}
              alt="client image"
              fill
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default OurClients;
