import React from "react";
import styles from "./child.module.scss";

import avatar_1 from "../../src/userpofileimgs/avatar_1.webp";
import avatar_2 from "../../src/userpofileimgs/avatar_2.webp";
import avatar_3 from "../../src/userpofileimgs/avatar_3.webp";
import avatar_4 from "../../src/userpofileimgs/avatar_4.webp";
import avatart_5 from "../../src/userpofileimgs/avatar_5.webp";
import chess_img from "../../src/userpofileimgs/chess_img.webp";
import avatar_6 from "../../src/userpofileimgs/avatar_6.webp";
import avatar_7 from "../../src/userpofileimgs/avatar_7.webp";

export default function Child() {
  return (
    <>
      <section className={styles.sub_notification}>
        <div className={styles.box_notification_first}>
          <div className={styles.headline_page}>
            <h1>Notifications</h1>
            <span className={styles.not_number}>3</span>
          </div>
          <div className={styles.headline_marks}>
            <p>Mark all as read</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.profile_user}>
            <img src={avatar_1} alt="avatar 1" />
          </div>
          <div className={styles.user_acitivity}>
            <p>
              <span className={styles.user_name}>Mark Webber</span> reacted to
              your recent post{" "}
              <span className={styles.mark_quote}>
                My first tournament today!
              </span>
            </p>
            <p className={styles.time_posted}>1m ago</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.profile_user}>
            <img src={avatar_2} alt="avatar 2" />
          </div>
          <div className={styles.user_acitivity}>
            <p>
              <span className={styles.user_name}>Angela Gray</span> followed you{" "}
              <span className={styles.mark_quote}>
                My first tournament today!
              </span>
            </p>
            <p className={styles.time_posted}>5m ago</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.profile_user}>
            <img src={avatar_3} alt="avatar 3" />
          </div>
          <div className={styles.user_acitivity}>
            <p>
              <span className={styles.user_name}>Jacob Thompson</span> has
              joined your group{" "}
              <span className={styles.chess_game}>Chess Club</span>{" "}
            </p>
            <p className={styles.time_posted}>1 day ago</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.profile_user}>
            <img src={avatar_4} alt="avatar 4" />
          </div>
          <div className={styles.user_acitivity}>
            <p>
              <span className={styles.user_name}>Rizky Hasanuddin</span> sent
              you a private message
            </p>
            <p className={styles.time_posted}>5 day ago</p>
            <div className={styles.private_meesage}>
              <p className={styles.para_message}>
                Hello, thanks for setting up the Chess Club, I've been a member
                for a few weeks now and I'm already having slots of fun and
                imporving my <br />
                game.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.box_Kimberly}>
          <div className={styles.profile_user_Kimberly}>
            <img src={avatart_5} alt="avatar 5" />
          </div>
          <div className={styles.user_acitivity_Kimberly}>
            <p>
              <span className={styles.user_name}>Kimberly Smith</span> commented
              on your pricture{" "}
            </p>
            <p className={styles.time_posted}>1 Weeks ago</p>
          </div>
          {/* IMG FOR POST */}
          <div className={styles.img_post}>
            <img src={chess_img} alt="chess img" />
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.profile_user}>
            <img src={avatar_6} alt="avatar 6" />
          </div>
          <div className={styles.user_acitivity}>
            <p>
              <span className={styles.user_name}>Nathan Peterson</span> reacted
              to your recent post{" "}
              <span className={styles.nanthan_starts}>
                5 end-game strategies to <br />
                increase you win{" "}
              </span>
            </p>
            <p className={styles.time_posted}>2 Weeks ago</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.profile_user}>
            <img src={avatar_7} alt="avatar 7" />
          </div>
          <div className={styles.user_acitivity}>
            <p>
              <span className={styles.user_name}>Anna Kim</span> left the group{" "}
              <span className={styles.chess_game}>Chess Club</span>{" "}
            </p>
            <p className={styles.time_posted}>2 Weeks ago</p>
          </div>
        </div>
      </section>
    </>
  );
}
