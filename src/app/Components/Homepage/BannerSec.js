import React from 'react'
import Image from 'next/image'

const BannerSec = () => {
  return (
    <>

      <section className="hero-section position-relative vh-100 overflow-hidden h-full flex items-center justify-center">
        <div className="video-background position-absolute w-100 h-100">
          <Image src="/img/banner-image.png" alt="alt" width={1800} height={1000}
         className="w-100 h-100 object-fit-cover" />
        </div>
      </section>

    </>
  )
}

export default BannerSec
