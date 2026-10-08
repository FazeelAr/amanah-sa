import { type SchemaTypeDefinition } from 'sanity'

import siteSettings from './siteSettings'
import hero from './hero'
import service from './service'
import destination from './destination'
import testimonial from './testimonial'
import teamMember from './teamMember'
import aboutPage from './aboutPage'
import contactPage from './contactPage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,
    hero,
    service,
    destination,
    testimonial,
    teamMember,
    aboutPage,
    contactPage,
  ],
}
