export default{
    name: "homeHero",
    title : "Home Hero",
    type: "document",
    fields: [
        {
            name: "heroText",
            title : "Hero Text",
            type: "string",
            validation: Rule => Rule.max(50).warning(`A title shouldn't be more than 50 characters.`)
        },
        {
            name: "buttonName",
            title : "Button Name",
            type: "string",
            validation: Rule => Rule.max(15).warning(`A title shouldn't be more than 15 characters.`)
        },
        {
            name: "pathName",
            title : "Path Name",
            type: "string",
            description: "please use '/' before type path name"
        },
        {
            name: "image",
            title : "Hero Image",
            type: "image",
        },
    ]
}