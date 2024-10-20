const Solution = () => {
  return (
    <div>
      <section id="services" className="services section bg-gray-50 py-20">
        <div className="container mx-auto text-center  mb-10">
          <h2 className="text-5xl font-semibold text-gray-900  ">Solutions</h2>
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Partner in Patient Management",
                description:
                  "we are dedicated to transforming healthcare by offering innovative patient management solutions tailored to meet the unique needs of hospitals and healthcare providers. Our focus is on delivering reliable and efficient services.",
              },
              {
                title: "Champions of Patient Care",
                description:
                  "Our platform is designed to provide customized solutions that enhance patient care at every stage, from admission to recovery. We empower healthcare providers to deliver the highest quality of care.",
              },
              {
                title: "Committed to Healthcare Success",
                description:
                  "Our mission is straightforward: to simplify healthcare management for providers and patients alike. We work closely with you to streamline operations and improve patient outcomes.",
              },
              {
                title: "Advanced Healthcare Technology",
                description:
                  "We are at the forefront of healthcare technology, continuously evolving to provide the best tools and resources for healthcare professionals, ensuring they have what they need to succeed.",
              },
              {
                title: "Healthcare Community",
                description:
                  "Beyond just management solutions, we foster a community of healthcare professionals and experts. Our platform connects you to valuable resources, advice, and support to enhance your practice.",
              },
              {
                title: "Driven by Excellence",
                description:
                  " we are committed to delivering exceptional service with transparency and integrity. We believe in building long-term partnerships that drive better health outcomes for all.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center hover:bg-teal-900 transition-all duration-700 ease-in-out transform hover:scale-105 hover:shadow-2xl group"
              >
                <h3 className="mb-4 text-3xl transition-all duration-700 ease-in-out group-hover:text-white group-hover:scale-110 flex items-center justify-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 ">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solution;
