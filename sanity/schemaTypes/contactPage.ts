import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Number',
      type: 'string',
      description: 'Used for the chat link, e.g., 923214429007',
    }),
    defineField({
      name: 'emailSupport',
      title: 'Email Support',
      type: 'string',
    }),
    defineField({
      name: 'operatingHours',
      title: 'Operating Hours',
      type: 'string',
    }),
    defineField({
      name: 'officeLocation',
      title: 'Office Location',
      type: 'string',
    }),
    defineField({
      name: 'googleMapsEmbedUrl',
      title: 'Google Maps Embed URL',
      type: 'url',
    }),
  ],
})
