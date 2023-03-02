import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'github',
      title: 'Github',
      type: 'string',
    }),
    defineField({
      name: 'linkedin',
      title: 'Linkedin',
      type: 'string',
    }),
    defineField({
      name: 'curriculum',
      title: 'Curriculum',
      type: 'string',
    }),
    defineField({
      name: 'info',
      title: 'Info',
      type: 'string',
    }),
    defineField({
      name: "typewriterWords",
      title: "Typewriter Words",
      type: "array",
      of: [{ type: "string" }]
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),]
})
