import Image from "next/image";

const topServices = [
  {
    title: "Corporate Events",
    description:
      "We manage corporate events such as product launches, seminars, and team-building activities with professional precision.",
    img: "/st1.png",
  },
  {
    title: "Weddings & Engagements",
    description:
      "We design and execute stunning weddings and engagement parties tailored to your culture, traditions, and style.",
    img: "/st2.png",
  },
  {
    title: "Birthday & Private Parties",
    description:
      "We create unforgettable birthday celebrations, anniversaries, and private parties with unique themes and decor.",
    img: "/st3.png",
  },
];

const EventAgenda = () => {
  return (
    <div>
      <div className="text-center">
        <p className="text-pink-600 font-medium">Our services</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          We provide the best services
        </h2>
      </div>

      {/* Top 6 Service Cards */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {topServices?.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-md hover:shadow-sm hover:cursor-pointer border-primary transition overflow-hidden"
            >
              <Image
                src={service.img}
                alt={service.title}
                width={400}
                height={300}
                className="object-cover w-full h-56"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold hover:text-primary text-gray-900 mb-2 hover:cursor-pointer">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm ">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventAgenda;
