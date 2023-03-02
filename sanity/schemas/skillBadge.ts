import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skillBadge',
  title: 'Skill Badge',
  type: 'document',
  fields: [
    defineField({
      name: 'badgeTitle',
      title: 'Badge Title',
      type: 'string',
    }),
    defineField({
      name: 'badgeImage',
      title: 'Badge Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
