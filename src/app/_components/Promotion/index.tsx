'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import classes from './index.module.scss'
import { Button } from 'payload/components'

const Promotion = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const TimeBox = ({ lable, value }: { lable: string; value: number }) => (
    <li className={classes.timeBox}>
      <h3>{value}</h3>
      <p>{lable}</p>
    </li>
  )

  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 3)

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const currentTime = new Date()
      const timeDifference = Math.max(Number(targetDate) - Number(currentTime), 0)

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

      setTime({ days, hours, minutes, seconds })

      if (timeDifference === 0) {
        clearInterval(timerInterval)
        // You can add code here to handle what happens when the target date is reached.
      }
    }, 1000)

    return () => {
      clearInterval(timerInterval) // Cleanup the interval when the component unmounts.
    }
  }, [])

  return (
    <section className={classes.promotionSection}>
      <div className={classes.titlewapper}>
        <h3>Deals of the Month</h3>
      </div>
      <div className={classes.promoCon}>
        <div className={classes.promoText}>
          <p>
            Unbeatable Deals of the Month: Save Big on Top Picks! Limited Time Offers, Huge
            Discounts, and Exclusive Savings. Shop Now and Don't Miss Out!
          </p>
          <Link href="/products" className={classes.showAllLink}>
            Show All
          </Link>
        </div>
        <div className={classes.promoTimeCard}>
          <ul className={classes.promoCardList}>
            <TimeBox lable="Day" value={time.days} />
            <TimeBox lable="Hour" value={time.hours} />
            <TimeBox lable="Minute" value={time.minutes} />
            <TimeBox lable="Second" value={time.seconds} />
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Promotion
