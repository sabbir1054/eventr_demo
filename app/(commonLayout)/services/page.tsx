import CommonBanner from "@/components/shared/CommonBanner";
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
  {
    title: "Concerts & Live Shows",
    description:
      "From stage setup to sound and lighting, we organize large-scale concerts and live entertainment shows across Egypt.",
    img: "/st4.png",
  },
  {
    title: "Festivals & Cultural Events",
    description:
      "We manage cultural festivals, exhibitions, and public events that highlight Egypt's heritage and modern trends.",
    img: "/st5.png",
  },
  {
    title: "Exhibitions & Trade Fairs",
    description:
      "We handle all aspects of exhibitions and trade fairs, from booth design to full event coordination.",
    img: "/st6.png",
  },
  {
    title: "Corporate Gala Dinners",
    description:
      "Our team arranges elegant gala dinners and award ceremonies for corporate clients and VIP gatherings.",
    img: "/st7.png",
  },
  {
    title: "Destination Events",
    description:
      "We plan destination weddings and luxury events at Egypt’s most iconic locations such as the Red Sea and Nile resorts.",
    img: "/st8.png",
  },
  {
    title: "Event Design & Decoration",
    description:
      "Our creative team handles all event themes, stage designs, floral arrangements, and complete decoration services.",
    img: "/st9.png",
  },
];

const detailedServices = [
  {
    title: "Invitation card",
    description:
      "We design elegant and personalized invitation cards that leave a lasting first impression on your guests.",
    icon: "/icn1.png",
  },
  {
    title: "Decoration",
    description:
      "Our creative team transforms event venues with modern, vibrant, and theme-based decoration services.",
    icon: "/icn2.png",
  },
  {
    title: "Photo, Video, Audio",
    description:
      "Capture every moment with our professional photo, video, and audio services, creating timeless memories.",
    icon: "/icn3.png",
  },
  {
    title: "Party cakes",
    description:
      "We provide custom-designed party cakes that match your theme and make celebrations extra special.",
    icon: "/icn4.png",
  },
  {
    title: "Premium food",
    description:
      "Our premium catering services bring gourmet dishes and exceptional flavors to your event.",
    icon: "/icn5.png",
  },
  {
    title: "Full safety",
    description:
      "We ensure complete event safety by implementing advanced security measures and crowd management.",
    icon: "/icn6.png",
  },
];

const ServicesPage = () => {
  return (
    <>
      <div className="flex flex-col">
        {/* Banner Section */}
        <CommonBanner page={"Services"} />
      </div>

      <div className="w-full min-h-screen">
        {/* Top Section with Background (Covers Heading + 6 Cards) */}
        <div
          className="bg-cover bg-center bg-no-repeat py-16"
          style={{
            backgroundImage: "url('/pattern_bg.png')",
          }}
        >
          <div className="text-center">
            <p className="text-pink-600 font-medium">Our services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              We provide the best services
            </h2>
          </div>

          {/* Top 6 Service Cards */}
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {topServices.map((service, index) => (
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
                    <p className="text-gray-600 text-md">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Services */}
        <div className="max-w-7xl mx-auto px-4 pb-16 mb-20 md:mb-30">
          <p className="text-center text-pink-600 font-medium mb-2">
            We are best
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            All services in one place
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {detailedServices.map((service, index) => {
              const isLastRow = index >= detailedServices.length - 3;
              const isLastColumn = (index + 1) % 3 === 0;

              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-10"
                  style={{
                    borderRight: isLastColumn ? "none" : "1px solid #e5e7eb", // Tailwind gray-200
                    borderBottom: isLastRow ? "none" : "1px solid #e5e7eb",
                  }}
                >
                  <div className="mb-4 flex items-center justify-center bg-pink-50 border border-pink-100 rounded-md">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={70}
                      height={70}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-md">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
