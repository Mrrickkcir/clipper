const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "WAHL SENIOR",
        price: 250,
        img: "senior.webp",
        description: "The Wahl Cordless Senior Clipper is equipped with the most powerful engine of all wireless hair clippers and generates a higher cutting speed and cutting capacity of 6,500rpm. Combined with the Stagger Tooth technology, this powerful cordless clipper shaves even the thickest hair types with ease."
        },
    {
        id: 2,
        title: "WAHL 5 STAR DETAILER",
        price: 199,
        img: "wahl-5-star-detailer.jpg",
        description: "Precision trimming: The 5 Star Detailer is designed for extremely close trims, crisp clean lines, facial hair details, and detailed hair tattooing. Equipped with an adjustable T-Wide blade that is 1/4” wider than a standard Wahl T-blade, allowing for quicker and easier blending for all kinds of hairstyles."
        },
    {
        id: 3,
        title: "BABYLISS PRO SKELETON TRIMMER",
        price: 299,
        img: "babyliss-pro-skeleton-trimmer.webp",
        description: "With a motor designed by Ferrari engineers, BaBylissPRO Silver FX Skeleton Lithium Hair Trimmer features a 360 fully exposed, graphite deep-tooth 2.0 mm T blade for extraordinary precision."
    },    
    ]

    let choosenProduct = products[0]

    const currentProductImg = document.querySelector(".productImg");
    const currentProductPrice = document.querySelector(".productPrice");
    const currentProductTitle = document.querySelector(".productTitle");
    const currentProductDescription = document.querySelector(".productDescription");
   
    
    
    

menuItems.forEach((item,index)=>{
    item.addEventListener("click", () =>{
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        //change the choosen product
        choosenProduct = products[index]
        //change text of currentproduct
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = "$" + choosenProduct.price
        currentProductImg.src = choosenProduct.img
        currentProductDescription.textContent = choosenProduct.description
        
    });
});


