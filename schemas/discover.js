export default {
    name: "discover",
    title: "Discover",
    type: "document",
    fields: [
        {
            name: 'discoverImage',
            title: "Discover Image",
            type: "array",
            of: [{type: "discoverImageType"}]
        },

    ]
}