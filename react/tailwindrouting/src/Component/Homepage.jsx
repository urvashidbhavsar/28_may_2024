import React from 'react'

const Homepage = () => {
  let imgdata = [
    { img: "https://www.shutterstock.com/image-photo/calm-weather-on-sea-ocean-600nw-2212935531.jpg", title: "Image 1" },
    { img: "https://i0.wp.com/picjumbo.com/wp-content/uploads/mysterious-fantasy-forest-with-old-bridges-free-image.jpg?w=600&quality=80", title: "Image 2" },
    { img: "https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=", title: "Image 3" },
  ]

  return (
    <>
      <div className='grid gap-2 px-8 py-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {
          imgdata.map((items, key) =>
            <div key={key}>
              <img src={items.img} alt="" className='max-w-full' />
              <h3>{items.title}</h3>
            </div>
          )
        }
      </div>
    </>
  )
}

export default Homepage
