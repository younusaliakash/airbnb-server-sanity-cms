export default {
    name: "discoverImageType",
    title: "Discover Image",
    type: "image",
    fields: [
        {
            name: "discoverText",
            title: "Discover Text",
            type: "string",
            validation: Rule => [
                Rule.required().min(10).error('A title of min. 10 characters is required'),
                Rule.max(50).warning('Shorter titles are usually better')
              ]
        },
        {
            name: "buttonName",
            title: "Button Name",
            type: "string"
        },
        {
            name: "path",
            title: "Path",
            type: "string",
            description: "please use '/' before add path name"
        },
    ],
    options: {
        hotspot : true
    }
}