import styles from './AboutMe.module.scss';

export default function AboutMe() {
  return (
    <div className={styles.AboutMe}>
      <h2>關於我 </h2>
      <p>
        大家好，我叫 Roan，是名前端工程師，主要以 HTML/ CSS / JavaScript / React
        製作網頁。
      </p>
      <p>
        曾擔任 DeFi (去中心化金融)線上課程助教，現為 WeXImpact 核心成員之一。
      </p>
      <h2>我的相關連結</h2>
      <span>
        <a
          href='https://medium.com/@roan6903'
          target='_blank'
          rel='noreferrer'>
          <h4>Medium 網誌</h4>
        </a>
      </span>
      <span>
        <a
          href='https://twitter.com/evoj_roan'
          target='_blank'
          rel='noreferrer'>
          <h4>Twitter</h4>
        </a>
      </span>
      <span>
        <a
          href='mailto:roan6903@gmail.com'
          target='_blank'
          rel='noreferrer'>
          <h4>Email</h4>
        </a>
      </span>
      <h2>關於 WeXImpact</h2>
      探索 Web 3 的大小事：生態、環境、創投、社群。
      <span>
        <a
          href='https://linktr.ee/weximpact'
          target='_blank'
          rel='noreferrer'>
          LinkTree
        </a>
      </span>
    </div>
  );
}
