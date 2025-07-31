import Link from "next/link";
import style from "./footer.module.css";
import Image from "next/image";
import { MessageCircleCode, FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';
const Footer = () => {
  return (
    <>
      <footer className={`${style.footer} footer bg-lred`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-3 text-center">
              <div className={style.footerLogoD}>
                <Image src="/img/logo.png" alt="Amritara Logo" width={600} height={600} className={style.footerLogo} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 mb-3">
              <div className={style.footerContactData}>
                <div className={style.GetLatestUpdate}>
                  <h5 className={`${style.footerHeading2}`}>Inspire me with all the latest B&B news</h5>
                  <form className={style.footerForm}>
                    <div className={`{style.footerInputContainer} mb-1`}>
                      <input type="email" placeholder="Enter your Email ID" className={style.footerInput} />
                      <button type="submit" className={style.footerSButton}>Confirm</button>
                    </div>
                    <input type="checkbox" className={style.footerCheckbox} />
                    <span className={style.fCheckText}>Agree to Subscribe newsletter</span>
                  </form>
                </div>
                <div className={style.SocialLinkFooter}>
                  <Link href="#" target="_blank" className={style.socialLink} title="Facebook">
                    Follow us :
                  </Link>
                  <Link href="#" target="_blank" className={style.socialLink} title="Facebook">
                    Instagram |
                  </Link>
                  <Link href="#" target="_blank" className={style.socialLink} title="Whatsapp">
                    X |
                  </Link>
                  <Link href="#" target="_blank" className={style.socialLink} title="Twitter">
                    Facebook |
                  </Link>
                  <Link href="#" target="_blank" className={style.socialLink} title="Instagram">
                    Pinterest |
                  </Link>
                  <Link href="#" target="_blank" className={style.socialLink} title="Instagram">
                    Linkedin
                  </Link>
                </div>
              </div>
            </div>

            <div className="col mb-3">
              <p className={`${style.head} mb-0`}>Company</p>
              <p className={style.fcoldata}>
                <Link href="mailto:peter@brideandbeautiful.com" className={style.linkstyle2}>
                  Wedding
                </Link>
              </p>
              <p className={style.fcoldata}>
                <Link href="tel:8860139274" className={style.linkstyle2}>
                  Maya 2024
                </Link>
              </p>
              
            </div>
             <div className="col mb-3">
              <p className={`${style.head} mb-0`}>Client Services</p>
              <p className={style.fcoldata}>
                <Link href="mailto:peter@brideandbeautiful.com" className={style.linkstyle2}>
                  Terms & Conditions
                </Link>
              </p>
              <p className={style.fcoldata}>
                <Link href="tel:8860139274" className={style.linkstyle2}>
                  Privacy Policy
                </Link>
              </p>
              
            </div>

            <div className="col mb-3">
              <p className={`${style.head} mb-0`}>Contact us</p>
              <p className={style.fcoldata}>
                <Link href="mailto:peter@brideandbeautiful.com" className={style.linkstyle2}>
                  peter@brideandbeautiful.com
                </Link>
              </p>
              <p className={style.fcoldata}>
                <Link href="tel:8860139274" className={style.linkstyle2}>
                  +91-886-013-9274
                </Link>
              </p>
              <p className={style.fcoldata}>
                Shahpur Jat, New Delhi
              </p>
            </div>


          </div>
          <div className="text-center mt-5">
            Copyright &copy; {new Date().getFullYear()}, Bride & Beautyful. All rights reserved. Powered by&nbsp;
            <Link href="https://www.cinuniverse.com/" target="_blank">
              CIN Universe.
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
