import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'companyName', title: 'Company Name', type: 'string', description: 'e.g. Arctic Air HVAC' }),
    defineField({ name: 'badgeText', title: 'Badge Text', type: 'string', description: 'e.g. 24/7 Emergency Service Available' }),
    defineField({ name: 'heroTitle', title: 'Hero Title', type: 'string' }),
    defineField({ name: 'heroSubtitle', title: 'Hero Subtitle', type: 'text', rows: 2 }),
    defineField({ name: 'phone', title: 'Phone Number', type: 'string' }),
    defineField({ name: 'address', title: 'Address', type: 'string' }),
  ],
})
