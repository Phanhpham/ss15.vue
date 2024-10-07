import HomeView from "@/views/bai6/HomeView.vue";
import ContactView from "@/views/bai6/ContactView.vue";
import AboutView from "@/views/bai6/AboutView.vue";
import { createRouter,createWebHistory } from "vue-router";
import ProductDetail from "@/views/ProductDetail.vue";
import ProductView from "@/views/ProductView.vue";
import ProductReview from "@/views/ProductReview.vue";
import Bai1 from "@/views/Bai1.vue";
import Bai2 from "@/views/Bai2.vue";
import Bai3 from "@/views/Bai3.vue";
import Bai4 from "@/views/Bai4.vue";
// dinh nghia cac route
const routes = [

    {
        path: "/",
        name:"home",
        component:HomeView
    },
    {
        path:"/contact",
        name:"contact",
        component:ContactView,
    },
    {
        path:"/about",
        name:"about",
        component:AboutView,
    },
    // {
    //     path:"/product-detail/:id",
    //     name:"productDetail",
    //     component:ProductDetail,
    // },
    // // {
    // //     path:"profile/:name",
    // //     name:"profile",
    // //     component: Profile,
    // // },
    // {
    //     path:"/product",
    //     name:"product",
    //     component:ProductView,
    //     children:[
    //         {
    //             path:"detail/:id",
    //             name:"product-detail",
    //             component:ProductDetail,
    //         }
    //     ]
    // },
    // {
        
    //         path:"/review",
    //         name:"product-review",
    //         component: ProductReview,
        
    // },
    {
            path:"/bai1",
            name:"bai1",
            component: Bai1,
        
    },
    {
        path:"/bai2",
        name:"bai2",
        component: Bai2,
    },
    {
        path:"/bai3",
        name:"bai3",
        component: Bai3,
    },
    {
        path:"/bai4",
        name:"bai4",
        component: Bai4,
    },
  
];

// Tao co che dinh tuyen cho ung dung 
const router=createRouter({
    history: createWebHistory(),
    routes,
});

//Day ra ben ngoai cho ung dung su dung 
export default router;