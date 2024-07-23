import Link from 'next/link'
import classes from './index.module.scss'

const ContinueShopping = () => {
  return (
    <section className={classes.ConShopSection}>
      <div className={classes.ConShopCon}>
        <div className={classes.ConShopCard}>
          <Link href="/products" className={classes.showAllLink}>
            Continue shopping
          </Link>
        </div>
        <div className={classes.ConShopText}>
          <p>
          Continue browsing our top tech products, including the latest laptops, computers, and accessories. Discover cutting-edge technology and unbeatable deals designed to enhance your digital experience. Keep shopping to find the perfect tech solutions for your needs.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContinueShopping
