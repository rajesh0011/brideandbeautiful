'use client';
import { useState } from 'react';
import styles from "./about.module.css";
import Image from 'next/image';

const AboutSec = () => {
  const [expanded, setExpanded] = useState(false);
  const fullText = ` With our excellent customer service, we will guide you through the process of choosing the perfect gown for your special day.`;

  const shortText = fullText.slice(0, 70) + "...";

  return (
    <div className="h-full flex items-center justify-center position-relative">
      <div className={`${styles.about} py-5`}>
        <Image src="/img/flower.png" height={300} width={300} alt="images for" className={styles.left_flower} />
        <Image src="/img/flower-1.png" height={300} width={300} alt="images for" className={styles.right_flower} />
        <div className={`${styles.about_main_box} container`}>
          <div className="row g-5 justify-content-center">
            <div className="col-lg-11 text-center">
              <h1 className="about-sec-title mb-4 global-heading italic">journey-Bride & Beautiful</h1>
              <p className='italic'>
                At Bride and Beautiful, we believe that every bride deserves to feel comfortable and confident in her wedding dress. Our boutique offers a variety of western-inspired gowns in different styles and sizes. We pride ourselves on our well-curated collection of bridal gowns that are both elegant and affordable.
              </p>
              <p className='italic'>
                {fullText.length > 70 ? (
                  <>
                    {expanded ? fullText : shortText}
                    <span
                      onClick={() => setExpanded(!expanded)}
                      style={{ cursor: 'pointer', color: '#000', fontWeight: '600' }}
                    >
                      {expanded ? ' Read less' : ' Read more'}
                      {/* {expanded ? ' ❮❮' : ' ❯❯'} */}
                    </span>
                  </>
                ) : (
                  fullText
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSec;
