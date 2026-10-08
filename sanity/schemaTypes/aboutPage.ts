import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'legacyHeading',
      title: 'Legacy Heading',
      type: 'string',
    }),
    defineField({
      name: 'legacySubheading',
      title: 'Legacy Subheading',
      type: 'string',
    }),
    defineField({
      name: 'storyHeading',
      title: 'Story Heading',
      type: 'string',
    }),
    defineField({
      name: 'storyText',
      title: 'Story Text',
      type: 'text',
    }),
    defineField({
      name: 'ceoQuote',
      title: 'CEO Quote',
      type: 'text',
    }),
    defineField({
      name: 'teamImage',
      title: 'Team Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})
