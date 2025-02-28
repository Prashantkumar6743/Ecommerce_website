import { defineField, defineType } from "sanity";

export const product =defineType({
    name:'product',
    title:"Products",
    type:"document",
    fields:[
        defineField({
            name:"name",
            title:"Name",
            type:"string",
        }),
        {
            name:"slug",
            title:"Slug",
            type:"slug",
            options:{source:"name"}
        },
        {
            name: "category",
            title: "Category",
            type: "reference",
            to: [{ type: "category" }],
          },
        {
            name:"images",
            title:"Images",
            type:"array",
            of:[{type:"image"}]
        },
        {
            name:"decrption",
            title:"Description",
            type:"string",
        },
        {
            name:"price",
            title:"Price",
            type:"number",
        },

    ]
})