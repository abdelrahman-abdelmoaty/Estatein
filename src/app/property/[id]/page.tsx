import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";
import { getPropertyById, getRelatedProperties } from "@/data/properties";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import CustomLink from "@/components/ui/CustomLink";
import SectionHeader from "@/components/ui/SectionHeader";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const property = getPropertyById(params.id);
  
  if (!property) {
    return {
      title: "Property Not Found - Estatein",
    };
  }

  return {
    title: `${property.title} - Estatein | ${property.location}`,
    description: `${property.desc} Located in ${property.location}. ${property.type} for $${property.price.toLocaleString()}. Contact our expert agents for more information.`,
  };
}

export default function PropertyPage({ params }: Props) {
  const property = getPropertyById(params.id);

  if (!property) {
    notFound();
  }

  const relatedProperties = getRelatedProperties(params.id);

  return (
    <>
      {/* Hero Section */}
      <div className="mt-[-50px] bg-[linear-gradient(96deg,#262626_-26.82%,rgba(38,38,38,0.00)_40.46%)] py-[50px] xl:mt-[-70px] xl:py-[100px] dt:mt-[-100px] dt:py-[150px]">
        <div className="container">
          <div className="mb-4 flex items-center gap-2 text-sm text-grey-60">
            <CustomLink href="/" variant="footer">Home</CustomLink>
            <span>/</span>
            <CustomLink href="/properties" variant="footer">Properties</CustomLink>
            <span>/</span>
            <span>{property.title}</span>
          </div>
          <Heading>{property.title}</Heading>
          <Paragraph className="xl:max-w-[80%]">
            {property.desc}
          </Paragraph>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="rounded-lg bg-grey-10 px-4 py-2">
              <span className="text-sm text-grey-60">Location:</span>
              <span className="ml-2 font-medium">{property.location}</span>
            </div>
            <div className="rounded-lg bg-grey-10 px-4 py-2">
              <span className="text-sm text-grey-60">Type:</span>
              <span className="ml-2 font-medium">{property.type}</span>
            </div>
            <div className="rounded-lg bg-purple-60 px-4 py-2">
              <span className="text-sm">Price:</span>
              <span className="ml-2 text-lg font-semibold">${property.price.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container flex flex-col gap-[80px] py-[80px]">
        {/* Property Image and Features */}
        <div className="grid gap-[40px] lg:grid-cols-2">
          <div>
            <Image
              src={property.img}
              alt={property.title}
              width={600}
              height={400}
              className="w-full rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-[30px]">
            <div>
              <Heading variant="medium">Property Features</Heading>
              <div className="mt-4 flex flex-wrap gap-2">
                {property.features.map((feature, index) => (
                  <div
                    key={index}
                    className="rounded-full border border-grey-15 px-4 py-2 text-sm"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            
            {property.specifications && (
              <div>
                <Heading variant="small">Specifications</Heading>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="rounded-lg border border-grey-15 p-4">
                    <span className="text-sm text-grey-60">Bedrooms</span>
                    <p className="text-lg font-semibold">{property.specifications.bedrooms}</p>
                  </div>
                  <div className="rounded-lg border border-grey-15 p-4">
                    <span className="text-sm text-grey-60">Bathrooms</span>
                    <p className="text-lg font-semibold">{property.specifications.bathrooms}</p>
                  </div>
                  <div className="rounded-lg border border-grey-15 p-4">
                    <span className="text-sm text-grey-60">Square Feet</span>
                    <p className="text-lg font-semibold">{property.specifications.sqft.toLocaleString()}</p>
                  </div>
                  <div className="rounded-lg border border-grey-15 p-4">
                    <span className="text-sm text-grey-60">Year Built</span>
                    <p className="text-lg font-semibold">{property.specifications.yearBuilt}</p>
                  </div>
                  <div className="rounded-lg border border-grey-15 p-4 col-span-2">
                    <span className="text-sm text-grey-60">Parking</span>
                    <p className="text-lg font-semibold">{property.specifications.parking}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Full Description */}
        {property.fullDescription && (
          <div>
            <Heading variant="medium">About This Property</Heading>
            <Paragraph className="mt-4">{property.fullDescription}</Paragraph>
          </div>
        )}

        {/* Amenities */}
        {property.amenities && (
          <div>
            <Heading variant="medium">Amenities & Features</Heading>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {property.amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-lg border border-grey-15 p-4"
                >
                  <div className="h-2 w-2 rounded-full bg-purple-60"></div>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Agent */}
        {property.agent && (
          <div className="rounded-xl border border-grey-15 bg-grey-10 p-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <Heading variant="medium">Contact Our Expert Agent</Heading>
                <Paragraph className="mt-4">
                  Get in touch with our experienced agent to learn more about this property
                  or schedule a viewing.
                </Paragraph>
                <div className="mt-6 space-y-4">
                  <div>
                    <span className="text-sm text-grey-60">Agent Name</span>
                    <p className="font-semibold">{property.agent.name}</p>
                  </div>
                  <div>
                    <span className="text-sm text-grey-60">Phone</span>
                    <p className="font-semibold">{property.agent.phone}</p>
                  </div>
                  <div>
                    <span className="text-sm text-grey-60">Email</span>
                    <p className="font-semibold">{property.agent.email}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <CustomLink href="/contact-us" variant="purple" className="w-full text-center">
                  Schedule a Viewing
                </CustomLink>
                <CustomLink href="/contact-us" variant="dark" className="w-full text-center">
                  Request More Information
                </CustomLink>
                <CustomLink href={`tel:${property.agent.phone}`} variant="default" className="w-full text-center">
                  Call Agent
                </CustomLink>
              </div>
            </div>
          </div>
        )}

        {/* Related Properties */}
        {relatedProperties.length > 0 && (
          <div>
            <SectionHeader
              heading="Similar Properties"
              paragraph="Explore other properties that might interest you in similar locations and price ranges."
            />
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedProperties.map((relatedProperty) => (
                <div
                  key={relatedProperty.id}
                  className="rounded-xl border border-grey-15 p-6"
                >
                  <Image
                    src={relatedProperty.img}
                    alt={relatedProperty.title}
                    width={300}
                    height={200}
                    className="w-full rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">{relatedProperty.title}</h3>
                  <Paragraph className="mb-4">{relatedProperty.desc}</Paragraph>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-purple-60">
                      ${relatedProperty.price.toLocaleString()}
                    </span>
                    <CustomLink href={`/property/${relatedProperty.id}`} variant="purple">
                      View Details
                    </CustomLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}