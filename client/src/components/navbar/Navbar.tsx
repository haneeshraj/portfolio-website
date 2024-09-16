import { useDispatch, useSelector } from "react-redux";

import styles from "../../styles/components/navbar.module.scss";
import { toggleTheme } from "../../store/slice/themeSlice";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(
    (state: { theme: { theme: string } }) => state.theme.theme
  );

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__logo}>HR</div>
      <div className={styles.navbar__nav}>
        <div className={styles.navbar__navitem}>Home</div>
        <div className={styles.navbar__navitem}>About</div>
        <div className={styles.navbar__navitem}>Work</div>
        <div className={styles.navbar__navitem}>Gallery</div>
        <div className={styles.navbar__navitem}>Contact</div>
      </div>
      <div className={styles.navbar__misc}>
        <div className={styles.navbar__search}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Interface / Search_Magnifying_Glass">
              <path
                id="Vector"
                d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z"
                stroke="var(--text)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>
        <div className={styles.navbar__resume}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="File / File_Document">
              <path
                id="Vector"
                d="M9 17H15M9 14H15M13.0004 3.00087C12.9048 3 12.7974 3 12.6747 3H8.2002C7.08009 3 6.51962 3 6.0918 3.21799C5.71547 3.40973 5.40973 3.71547 5.21799 4.0918C5 4.51962 5 5.08009 5 6.2002V17.8002C5 18.9203 5 19.4801 5.21799 19.9079C5.40973 20.2842 5.71547 20.5905 6.0918 20.7822C6.51921 21 7.079 21 8.19694 21L15.8031 21C16.921 21 17.48 21 17.9074 20.7822C18.2837 20.5905 18.5905 20.2842 18.7822 19.9079C19 19.4805 19 18.9215 19 17.8036V9.32568C19 9.20302 18.9999 9.09553 18.999 9M13.0004 3.00087C13.2858 3.00348 13.4657 3.01407 13.6382 3.05547C13.8423 3.10446 14.0379 3.18526 14.2168 3.29492C14.4186 3.41857 14.5918 3.59181 14.9375 3.9375L18.063 7.06298C18.4089 7.40889 18.5809 7.58136 18.7046 7.78319C18.8142 7.96214 18.8953 8.15726 18.9443 8.36133C18.9857 8.53379 18.9964 8.71454 18.999 9M13.0004 3.00087L13 5.80021C13 6.92031 13 7.48015 13.218 7.90797C13.4097 8.2843 13.7155 8.59048 14.0918 8.78223C14.5192 9 15.079 9 16.1969 9H18.999"
                stroke="var(--text)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>
        <div className={styles.navbar__theme} onClick={handleToggle}>
          {currentTheme === "light" ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                fill="var(--text)"
              />
              <path
                d="M11.7428 18.9954C11.8282 18.9984 11.9139 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C11.9139 5 11.8282 5.00155 11.7428 5.00464V18.9954Z"
                fill="var(--text)"
              />
            </svg>
          ) : (
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                fill="var(--text)"
              />
              <path
                d="M11.7428 18.9954C11.8282 18.9984 11.9139 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C11.9139 5 11.8282 5.00155 11.7428 5.00464V18.9954Z"
                fill="var(--text)"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
