export default {
    name: "homeBottomBanner",
    title: "Home Bottom Banner",
    type: "document",
    fields: [
        {
            name: "bannerImage",
            title: "Banner Image",
            type: "image"
        },
        {
            name: "bannerText",
            title: "Banner Text",
            type: "string"
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
            description: "please use '/' before path name"
        },
    ]
}