export default{
    name: "city",
    title : "City",
    type: "document",
    fields: [
        {
            name: "cityName",
            title : "City Name",
            type: "string",
            validation: Rule => Rule.max(15).warning(`A title shouldn't be more than 15 characters.`)
        },
        {
            name: "distance",
            title : "Distance",
            type: "string",
            validation: Rule => Rule.max(25).warning(`A title shouldn't be more than 25 characters.`)
        },
        {
            name: "slug",
            title : "Slug",
            type: "slug",
            options : {
                source: "cityName",
                maxLength: 100
            }
        },
        {
            name: "cityImage",
            title : "City Image",
            type: "image",
        },
    ]
}