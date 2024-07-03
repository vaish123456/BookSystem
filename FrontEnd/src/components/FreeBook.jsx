/*import React from 'react';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";

 function FreeBook() {
    const filterData=list.filter((data)=>data.category==="Free");
    console.log(filterData);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    
  return (
    <>
    
    <div className="max-w-screen-2xl containermx-auto md:px-20 px-4">
        <div>
        <h1 className="text-xl font-semibold">
            Free courses available.
        </h1>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem aperiam deleniti velit. Corrupti velit ab commodi vero dolorum, eveniet sit?
        </p>
        </div>
    
    <div>
    <Slider {...settings}>
   <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
  </div>
  {/*filterData.map((item) => (
            <Cards item={item} key={item.id} />
          ))*/
         
     // </Slider>
    //</div>
    //</div>
    
   // </>
  //)
//}
//export default FreeBook;




{/* 2.import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Cards from './Cards';

function FreeBook() {
    const filterData = list.filter((data) => data.category === "Free");
    //console.log(filterData);
    console.log("Filtered Data: ", filterData);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div>
                <h1 className="text-xl font-semibold">
                    Free courses available.
                </h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem aperiam deleniti velit. Corrupti velit ab commodi vero dolorum, eveniet sit?
                </p>
            </div>
            <div>
                <Slider {...settings}>
                    {/*{filterData.map((item) => (
                        <Cards item={item} key={item.id} />
                    ))}*/}
                   // {filterData.map((item) => (
        //<div key={item.id}>
            //<Cards item={item} />
        //</div>
   // ))}
              //  </Slider>
          //  </div>
       // </div>
   // );
//}

//export default FreeBook;*/}
{/* 2. import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards'; // Import the Cards component

function FreeBook() {
    // Sample data
    const items = [
        { id: 1, title: "Item 1", description: "Description 1", tags: ["tag1", "tag2"], image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=740&t=st=1717756427~exp=1717757027~hmac=903fc3edb24254ceaebac6dd2f664389fefc004edfd0dc5921b9abf8233ebaa5" },
        { id: 2, title: "Item 2", description: "Description 2", tags: ["tag3", "tag4"], image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=740&t=st=1717756427~exp=1717757027~hmac=903fc3edb24254ceaebac6dd2f664389fefc004edfd0dc5921b9abf8233ebaa5" },
        { id: 3, title: "Item 3", description: "Description 3", tags: ["tag5", "tag6"], image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=740&t=st=1717756427~exp=1717757027~hmac=903fc3edb24254ceaebac6dd2f664389fefc004edfd0dc5921b9abf8233ebaa5" },
        // Add more items as needed
    ];

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            {items.map(item => (
                <div key={item.id}>
                    <Cards item={item} />
                </div>
            ))}
        </Slider>
    );
}

export default FreeBook;
*/}




import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards'; // Import the Cards component

function FreeBook() {
    // Sample data
    const items = [
        { id: 1, title: "Item 1", description: "Description 1", tags: ["tag1", "tag2"], image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=740&t=st=1717756427~exp=1717757027~hmac=903fc3edb24254ceaebac6dd2f664389fefc004edfd0dc5921b9abf8233ebaa5" },
        { id: 2, title: "Item 2", description: "Description 2", tags: ["tag3", "tag4"], image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=740&t=st=1717756427~exp=1717757027~hmac=903fc3edb24254ceaebac6dd2f664389fefc004edfd0dc5921b9abf8233ebaa5" },
        { id: 3, title: "Item 3", description: "Description 3", tags: ["tag5", "tag6"], image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=740&t=st=1717756427~exp=1717757027~hmac=903fc3edb24254ceaebac6dd2f664389fefc004edfd0dc5921b9abf8233ebaa5" },
        // Add more items as needed
    ];

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            {items.map(item => (
                <div key={item.id}>
                    <Cards item={item} />
                </div>
            ))}
        </Slider>
    );
}

export default FreeBook;

