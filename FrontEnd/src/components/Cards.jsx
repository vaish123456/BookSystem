import React from 'react';


function Cards({item}) {
    console.log(item);

  
  return (
    <>
    
    <div className="mt-4 my-3 p-3">
    <div className="card w-96 bg-base-100 shadow-xl dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" 
   />
   </figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
</div>

    </>
  )
}
export default Cards;

{/*import React from 'react';


function Cards({ item }) {
  console.log('https://img.freepik.com/free-vector/books-stack-realistic_1284-4735.jpg?t=st=1718096481~exp=1718100081~hmac=bfae39ab1f45f0f9a691ea84447c23f0045f3521f0a63d031db2579320964d84&w=740:', item.images[0]);
    if (!item) {
        return null; // Or some fallback UI
    }
    return (
        <div className="mt-4 my-3 py-3">
            <div className="card w-96 bg-base-100 shadow-xl transition transform hover:scale-105 hover:shadow-2xl">
                <figure>
                    <img  src={item.image} alt={item.title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.title}
                        {item.isNew && <div className="badge badge-secondary">NEW</div>}
                    </h2>
                    <p>{item.description}</p>
                    <div className="card-actions justify-end">
                        {item.tags.map((tag, index) => (
                            <div className="hover:border-b-gray-400 cursor-pointer text-semibold bg-blue-300 text-black rounded-full"><div key={index} className="badge badge-outline">{tag}</div></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;*/}

{ /* True. import React from "react";

function Cards({ item }) {
  console.log(item);
  if (!item || !item.images ) {
    return null;
    // Or some fallback UI
  }
  return (
    < div className="mt-4 my-3 py-3">
<div className="min-w-[300px] flex-shrink-0 ">
      <div className="card w-96 bg-base-100 shadow-xl transition transform hover:scale-105 hover:shadow-2xl">
        <figure className="flex flex-col items-center">
         {/* Map over the images array and render each image 
          {item.images.map((image, index) => (
            <img key={index} src={image} alt={`${item.title} image ${index + 1}`} className="w-full h-48 object-cover" />
          ))}
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-lg font-bold">
            {item.title}
            {item.isNew && <div className="badge badge-secondary ml-2">NEW</div>}
          </h2>
          <p className="my-2">{item.description}</p>
          <div className="card-actions justify-end flex flex-wrap space-x-2">
            {item.tags.map((tag, index) => (
              <div key={index} className="badge badge-outline cursor-pointer hover:bg-blue-300 hover:text-black rounded-full px-2 py-1">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    
    </div>




  );
}

export default Cards;

*/}

