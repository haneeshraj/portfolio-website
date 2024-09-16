// import { useNavigate } from "react-router-dom";

import clsx from "clsx";
import Button from "../../components/Button";
import styles from "../../styles/section/home/intro.module.scss";

const Intro = () => {
  // const navigate = useNavigate();

  return (
    <div className={styles["container"]}>
      <div className={styles["background"]}>
        <div className={clsx(styles["circle"], styles["circle--1"])}>
          <div className={clsx(styles["ball"], styles["ball--1"])}></div>
          <div className={clsx(styles["ball"], styles["ball--2"])}></div>
        </div>
        <div className={clsx(styles["circle"], styles["circle--2"])}>
          <div className={clsx(styles["ball"], styles["ball--3"])}></div>
        </div>
        <div className={clsx(styles["circle"], styles["circle--3"])}>
          <div className={clsx(styles["ball"], styles["ball--4"])}></div>
        </div>
        <div className={clsx(styles["circle"], styles["circle--4"])}>
          <div className={clsx(styles["ball"], styles["ball--5"])}></div>
        </div>
        <div className={clsx(styles["circle"], styles["circle--5"])}>
          <div className={clsx(styles["ball"], styles["ball--5"])}></div>
        </div>
      </div>
      <div className={styles["content"]}>
        <h1 className={styles["main-title"]}>
          <span>Hi. My name is</span>
          <span> Haneesh Raj</span>
        </h1>
        <p className={styles["bio"]}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
          soluta, autem odit ipsam atque iure officia veritatis nobis cupiditate
          ducimus.
        </p>
        <Button
          text="About me"
          action={() => {
            // navigate("/about");
            console.log("about me");
          }}
          icon={
            <svg
              width="24"
              height="24"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.3639 9.63604H15.2932M22.3639 9.63604L22.3635 16.7071M22.3639 9.63604L9.63599 22.364"
                stroke="var(--text)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default Intro;
