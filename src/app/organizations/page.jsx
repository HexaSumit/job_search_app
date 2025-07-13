import { HiArrowNarrowRight } from "react-icons/hi";
function page() {
    const companies = [
        {
            logo: "https://logo.clearbit.com/google.com",
            title: "Google",
            type: "Technology",
            description:
                "Google is a global technology leader offering internet-related services and products. It's known for its search engine, Android OS, YouTube, and cloud computing services. Google drives innovation in AI, digital ads, and productivity tools.",
            website: "https://www.google.com"
        },
        {
            logo: "https://logo.clearbit.com/microsoft.com",
            title: "Microsoft",
            type: "Software & Cloud",
            description:
                "Microsoft is a tech giant developing software like Windows and Office Suite. It offers cloud services via Azure and owns products like LinkedIn, GitHub, and Xbox. Microsoft continues to shape the future with its enterprise tools and AI initiatives.",
            website: "https://www.microsoft.com"
        },
        {
            logo: "https://logo.clearbit.com/amazon.com",
            title: "Amazon",
            type: "E-commerce & Cloud",
            description:
                "Amazon is the world’s largest online marketplace and a global leader in cloud services through AWS. It provides a wide range of products, from e-commerce to smart home devices. Amazon is known for customer-centric innovation and logistics.",
            website: "https://www.amazon.com"
        },
        {
            logo: "https://logo.clearbit.com/meta.com",
            title: "Meta",
            type: "Social Media & Technology",
            description:
                "Meta is the parent company of Facebook, Instagram, and WhatsApp. It focuses on social networking and is investing heavily in virtual reality, augmented reality, and the metaverse. Meta aims to create immersive digital social experiences.",
            website: "https://www.meta.com"
        },
        {
            logo: "https://logo.clearbit.com/apple.com",
            title: "Apple",
            type: "Consumer Electronics",
            description:
                "Apple designs premium electronics including the iPhone, iPad, and Mac. Its ecosystem includes iOS, iCloud, App Store, and Apple Music. With a strong brand identity, Apple leads in innovation, design, and seamless product experiences.",
            website: "https://www.apple.com"
        },
        {
            logo: "https://logo.clearbit.com/netflix.com",
            title: "Netflix",
            type: "Streaming & Entertainment",
            description:
                "Netflix is a subscription-based streaming service offering a vast collection of movies, TV shows, and original series. It produces globally successful content and uses data to personalize viewing. Netflix transformed how people consume entertainment.",
            website: "https://www.netflix.com"
        },
        {
            logo: "https://logo.clearbit.com/tesla.com",
            title: "Tesla",
            type: "Automotive & Energy",
            description:
                "Tesla is a pioneer in electric vehicles, clean energy, and autonomous driving. It produces electric cars, battery storage, and solar products. Tesla continues to disrupt traditional automotive norms with innovation in technology and sustainability.",
            website: "https://www.tesla.com"
        },
        {
            logo: "https://logo.clearbit.com/airbnb.com",
            title: "Airbnb",
            type: "Hospitality & Travel",
            description:
                "Airbnb enables people to rent out homes and unique stays to travelers worldwide. It connects hosts and guests, offering affordable and authentic lodging options. Airbnb transformed the travel industry with its peer-to-peer business model.",
            website: "https://www.airbnb.com"
        }
    ];


    return (
        <div className=" bg-gray-100 ">
            <div className=" pt-32 flex justify-center items-center">
                <h1 className=" auto-slide-in-top text-7xl text-blue-800 font-semibold pb-2 mb-6 w-fit">
                    Available Organizations
                </h1>
            </div>
            <div className=" z-10 auto-slide-in-left pt-10 pb-25">
                <div className=" grid grid-cols-2 gap-10 max-w-[900px] mx-auto  ">
                    {companies.map((company, index) => (
                        <div
                            key={index}
                            className=" h-[430px] bg-white  rounded-xl shadow-2xl p-6 flex flex-col items-center justify-center text-center"
                        >
                            {/* Logo */}
                            <img
                                src={company.logo}
                                alt={company.title}
                                className="w-24 h-24 object-contain mb-4" // ⬅️ logo size increased
                            />

                            {/* Company Name */}
                            <h3 className="text-3xl font-bold text-gray-800 mb-2"> {/* ⬅️ name size increased */}
                                {company.title}
                            </h3>

                            {/* Company Type */}
                            <p className="text-base text-blue-600 font-medium mb-3">{company.type}</p>

                            {/* Description */}
                            <p className="text-base text-gray-800 mb-6 px-4"> {/* ⬅️ description font increased */}
                                {company.description}
                            </p>

                            {/* Button */}
                            <a
                                href={company.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                            >
                                More Details
                                <HiArrowNarrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default page