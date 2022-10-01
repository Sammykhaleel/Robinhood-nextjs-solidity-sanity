//Icons
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { AiOutlinePlus } from 'react-icons/ai'

const styles = {
  wrapper: 'w-screen h-screen flex flex-col',
  mainContainer: 'w-2/3 h-full m-auto flex mt-16',
  leftMain: 'flex flex-col w-3/4 h-full  p-6 overflow-y-scroll',
}

export default function Home() {
  return (
    <div className={styles.wrapper}>
      {/* <Header/> */}
      <div className={styles.mainContainer}>

        <div className={styles.leftMain}>
          <div className={styles.portfolioAmountContainer}>
            <div className={styles.porfolioAmount}>23 ETH</div>
            <div className={styles.porfolioPercent}>+0.005(+0.57%)</div>
            <div className={styles.pastHour}>past hour</div>
          </div>
          <div>
            <div className={styles.chartContainer}>
              {/* portfolio chart */}
            </div>
          </div>
          <div className={styles.buyingPowerContainer}>
            <div className={styles.buyingPowerTitle}> Buying Power</div>
            <div className={styles.buyingPowerAmount}>12 ETH</div>
          </div>
           
          {/* Notice componenet] */}
        </div>  

        <div className={styles.rightMain}>
          <div className={styles.rightMainItem}>
            <div className={styles.ItemTitle}>
              Crypto Currencies
            </div>
            <BiDotsHorizontalRounded className={styles.moreOptions}/>
          </div>
          {/* map through coins */}
          {/* Assets */}
          <div className={styles.rightMainItem}>
            <div className={styles.ItemTitle}>
              List
            </div>
            <AiOutlinePlus className={styles.moreOptions}/>
          </div>
        </div>

      </div>  
    </div>
  )
}
