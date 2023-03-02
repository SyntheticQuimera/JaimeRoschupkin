import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'aboutMe',
  title: 'AboutMe',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'info',
      title: 'Info',
      type: 'string',
    }),
  ],
})
