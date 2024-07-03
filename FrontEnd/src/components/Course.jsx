import React from 'react'
import Cards from './Cards';
//import list from '../../public/list.json';
import {Link} from "react-router-dom";

const list = [
    {
      id: 1,
      title: "Item 1",
      description: "Description for item 1",
      images: ["https://img.freepik.com/free-vector/books-stack-realistic_1284-4735.jpg?t=st=1718096481~exp=1718100081~hmac=bfae39ab1f45f0f9a691ea84447c23f0045f3521f0a63d031db2579320964d84&w=740"],
      tags: ["tag1", "tag2"],
      isNew: true,
    },
    {
        id: 2,
        title: "Item 2",
        description: "Description for item 2",
        images: ["https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=740&t=st=1717756427~exp=1717757027~hmac=903fc3edb24254ceaebac6dd2f664389fefc004edfd0dc5921b9abf8233ebaa5.jpg",],
        tags: ["tag3", "tag4"],
        isNew: true,
      },
      {
        id: 3,
        title: "Item 3",
        description: "Description for item 3",
        images: ["https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=740&t=st=1717756427~exp=1717757027~hmac=903fc3edb24254ceaebac6dd2f664389fefc004edfd0dc5921b9abf8233ebaa5.jpg", ],
        tags: ["tag5", "tag6"],
        isNew: true,
      },
      {
        id: 4,
        title: "Item 4",
        description: "Description for item 4",
        images: ["https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=740&t=st=1717756427~exp=1717757027~hmac=903fc3edb24254ceaebac6dd2f664389fefc004edfd0dc5921b9abf8233ebaa5.jpg"],
        tags: ["tag7", "tag8"],
        isNew: true,
      },
      {
        id: 5,
        title: "Item 5",
        description: "Description for item 5",
        images: ["https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=740&t=st=1717756427~exp=1717757027~hmac=903fc3edb24254ceaebac6dd2f664389fefc004edfd0dc5921b9abf8233ebaa5.jpg", ],
        tags: ["tag9", "tag10"],
        isNew: true,
      },
      {
        id: 6,
        title: "Item 6",
        description: "Description for item 6",
        images: ["https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=740&t=st=1717756427~exp=1717757027~hmac=903fc3edb24254ceaebac6dd2f664389fefc004edfd0dc5921b9abf8233ebaa5.jpg", ],
        tags: ["tag9", "tag10"],
        isNew: true,
      },
      {
        id: 7,
        title: "Item 7",
        description: "Description for item 7",
        images: ["https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=740&t=st=1717756427~exp=1717757027~hmac=903fc3edb24254ceaebac6dd2f664389fefc004edfd0dc5921b9abf8233ebaa5.jpg", ],
        tags: ["tag9", "tag10"],
        isNew: true,
      },
      {
        id: 8,
        title: "Item 8",
        description: "Description for item 8",
        images: ["https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=740&t=st=1717756427~exp=1717757027~hmac=903fc3edb24254ceaebac6dd2f664389fefc004edfd0dc5921b9abf8233ebaa5.jpg", ],
        tags: ["tag9", "tag10"],
        isNew: true,
      },
      {
        id: 9,
        title: "Item 9",
        description: "Description for item 9",
        images: ["https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=740&t=st=1717756427~exp=1717757027~hmac=903fc3edb24254ceaebac6dd2f664389fefc004edfd0dc5921b9abf8233ebaa5.jpg", ],
        tags: ["tag9", "tag10"],
        isNew: true,
      },
    // Add more items as needed
  ];
  



function Course() {
  return (
    <>
    <div className="max-w-screen-2xl container  mx-auto md:px-20 px-4  top-0 left-0 right-0 selection z-50 ">
<div className="mt-28 items-center justify-center text-center">
    <h1 className="text-2xl font-semibold md:text-4xl">We are Delighted to have you ! <span className="text-pink-500">Here :)</span></h1>
    <p className="mt-12">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur totam rem ducimus reprehenderit laboriosam eveniet deserunt, dicta sapiente molestiae nulla impedit, optio numquam? Quia ab eligendi beatae, corporis asperiores nobis?
    </p>
    <Link>
    <button className="bg-pink-500 text-500 px-4 py-3 rounded-md hover:bg-pink-700 mt-6">
        Back
    </button></Link>
</div>

{/*<div className=" grid grid-cols-1 md:grid-cols-4  overflow-x-auto mt-10 space-x-4">*/}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8 mt-14">
{list.map((item)=>(
<Cards key={item.id} item={item}/>
))}
    

    
</div>

    </div>
    </>
  )
}

export default Course  
{/*import React from 'react';
import Cards from './Cards';

const list = [
  {
    id: 1,
    title: "Item 1",
    description: "Description for item 1",
    images: ["url1.jpg", "url2.jpg", "url3.jpg"],
    tags: ["tag1", "tag2"],
    isNew: true,
  },
  {
    id: 2,
    title: "Item 2",
    description: "Description for item 2",
    images: ["url1.jpg", "url2.jpg", "url3.jpg"],
    tags: ["tag3", "tag4"],
    isNew: true,
  },
  {
    id: 3,
    title: "Item 3",
    description: "Description for item 3",
    images: ["url1.jpg", "url2.jpg", "url3.jpg"],
    tags: ["tag5", "tag6"],
    isNew: true,
  },
  {
    id: 4,
    title: "Item 4",
    description: "Description for item 4",
    images: ["url1.jpg", "url2.jpg", "url3.jpg"],
    tags: ["tag7", "tag8"],
    isNew: true,
  },
  {
    id: 5,
    title: "Item 5",
    description: "Description for item 5",
    images: ["url1.jpg", "url2.jpg", "url3.jpg"],
    tags: ["tag9", "tag10"],
    isNew: true,
  },
];

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 selection z-50">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">We are Delighted to have you! <span className="text-pink-500">Here :)</span></h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur totam rem ducimus reprehenderit laboriosam eveniet deserunt, dicta sapiente molestiae nulla impedit, optio numquam? Quia ab eligendi beatae, corporis asperiores nobis?
          </p>
          <button className="bg-pink-500 text-500 px-4 py-3 rounded-md hover:bg-pink-700 mt-6">
            Back
          </button>
        </div>
        <div>
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Course;
*/}