import styles from './Footer.module.scss'
import footerTopMobile from '@/assets/images/bg-footer-top-mobile.svg'
import { Logo, MailLogo, PhoneLogo } from '@/components/Footer/elements'
import SubscribeBtn from '@/components/interactive/SubscribeBtn'
import { FaTwitterSquare } from 'react-icons/fa'
import { GrFacebook, GrInstagram } from 'react-icons/gr'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <img
        src={footerTopMobile}
        alt=""
      />
      <div className={styles.content}>
        <h2>newsletter</h2>
        <p>
          To receive tips on how to grow your community, sign up to our weekly
          newsletter. We’ll never send you spam or pass on your email address
        </p>
        <input type="email" />
        <SubscribeBtn label="Subscribe" />

        <div className={styles.logo}>
          <Logo />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla
          quam, hendrerit lacinia vestibulum a, ultrices quis sem.
        </p>

        <ul className={styles.contact}>
          <li>
            <PhoneLogo />
            <div>Phone: +1-543-123-4567</div>
          </li>
          <li>
            <MailLogo />
            <div>example@company.com</div>
          </li>
        </ul>

        <ul className={styles.social}>
          <li>
            <GrFacebook size={23} />
          </li>
          <li>
            <GrInstagram size={23} />
          </li>
          <li>
            <FaTwitterSquare size={25.5} />
          </li>
        </ul>
      </div>
    </div>
  )
}
