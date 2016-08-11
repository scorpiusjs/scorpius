# MaterialNote for Scorpiusjs

This package is a bundling of the Materialnote from https://github.com/Cerealkillerway/materialNote


It works just like summernote as an attribute.

```
Posts.attachSchema(new SimpleSchema({
        title: {
            type: String
        },
    
        content: scorpius.attribute("materialnote",{
            label: "Blog Post"
        }),
    
        author: scorpius.attribute("createdBy"),
        createdAt: scorpius.attribute("createdAt"),
        updatedAt: scorpius.attribute("updatedAt"),
        image: scorpius.attribute("image", {
            label: "Top Image(Optional)",
            optional: true
        }),
    }));
    
```

BUGS

Seems taht some of the summernote features like font changing