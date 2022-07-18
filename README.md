# NextJS Page Rendering SSR vs SSG vs ISR

A simple demo to showcase different rendering options in NextJS.

- There are pros and cons in each approach. Some of the top citerieas are captured in the simple chart below. 
- These rendering / data fetching options can be a mix within the same project. 

![8onh7r5sxmss9f87k726](https://user-images.githubusercontent.com/2689410/179026796-141da097-58e1-45fc-b9df-a98429e06cf6.png)


```
yarn install
yarn build
yarn start
```

Note: if yo do ```yarn dev``` you will not see the differences :) between SSR vs SSG vs ISR.


##  Rendering examples:

SSR - http://localhost:3000/ssr

SSG - http://localhost:3000/ssg

ISR - http://localhost:3000/isr

CSR - http://localhost:3000/csr


Read more: https://nextjs.org/docs/basic-features/data-fetching/overview

##  Slug / Dynamic routing example:
http://localhost:3000/slug-example/hello-world

Read more: https://nextjs.org/docs/routing/dynamic-routes

## References: 

https://dev.to/pahanperera/visual-explanation-and-comparison-of-csr-ssr-ssg-and-isr-34ea

https://morioh.com/p/27c75dc881bb
