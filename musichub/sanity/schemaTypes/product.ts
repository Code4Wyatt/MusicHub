export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Product Name'
        },
        {
            name: 'images',
            type: 'array',
            title: 'Images',
            of: [{ type: 'image' }]
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug'
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price'
        },
        {
            name: 'category',
            title: 'Product Category',
            type: 'reference',
            to: [
                {
                    type: 'category'
                }
             ]
        }
    ]
}