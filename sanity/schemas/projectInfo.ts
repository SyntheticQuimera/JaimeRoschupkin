import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
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
        defineField({
            name: 'demo',
            title: 'Demo URL',
            type: 'string',
        }),
        defineField({
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{ type: "reference", to: { type: "skillBadge" } }]
        }),
    ],
})
