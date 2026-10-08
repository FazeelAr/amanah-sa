import { groq } from 'next-sanity'

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    brandName,
    "logoUrl": logo.asset->url,
    contactEmail,
    contactPhone,
    officeAddress,
    socialLinks,
    footerText
  }
`

export const heroQuery = groq`
  *[_type == "hero"][0] {
    heading,
    subheading,
    ctaText,
    ctaLink,
    "backgroundImageUrl": backgroundImage.asset->url,
    "frontImageUrl": frontImage.asset->url
  }
`

export const featuredServicesQuery = groq`
  *[_type == "service" && isFeatured == true] | order(order asc) {
    title,
    "slug": slug.current,
    description,
    iconName,
    "imageUrl": image.asset->url,
    isFeatured
  }
`

export const allServicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    title,
    "slug": slug.current,
    description,
    iconName,
    "imageUrl": image.asset->url,
    isFeatured
  }
`

export const destinationsQuery = groq`
  *[_type == "destination"] | order(order asc) {
    name,
    description,
    tag,
    "imageUrl": image.asset->url
  }
`

export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(order asc) {
    clientName,
    role,
    location,
    quote,
    "imageUrl": image.asset->url,
    stars
  }
`

export const teamMembersQuery = groq`
  *[_type == "teamMember"] | order(order asc) {
    name,
    role,
    responsibilities
  }
`

export const aboutPageQuery = groq`
  *[_type == "aboutPage"][0] {
    legacyHeading,
    legacySubheading,
    storyHeading,
    storyText,
    ceoQuote,
    "teamImageUrl": teamImage.asset->url
  }
`

export const contactPageQuery = groq`
  *[_type == "contactPage"][0] {
    heading,
    subheading,
    whatsappNumber,
    emailSupport,
    operatingHours,
    officeLocation,
    googleMapsEmbedUrl
  }
`
