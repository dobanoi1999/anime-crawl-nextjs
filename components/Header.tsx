import Link from "next/link";
import React from "react";
import styles from "../styles/header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" passHref>
        <p className={styles.logo}>Anime Online.</p>
      </Link>

      <div className="flex">
        <ul className={styles.nav}>
          <Link href="/" passHref>
            <li className={`${styles.navItem} ${styles.active}`}>Trang chủ</li>
          </Link>
          <li className={`${styles.navItem}  menu-hover`}>
            <p>Thể Loại </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>{" "}
            <ul className={`${styles.menu} menu`}>
              <li className={styles.menuItem}>Hành Động</li>
              <li className={styles.menuItem}>Viễn tưởng</li>
              <li className={styles.menuItem}>Lãng Mạn</li>
              <li className={styles.menuItem}>Kinh Dị</li>
              <li className={styles.menuItem}>Võ Thuật</li>
              <li className={styles.menuItem}>Hài Hước</li>
              <li className={styles.menuItem}>Trường Học</li>
              <li className={styles.menuItem}>Trinh Thám</li>
              <li className={styles.menuItem}>Âm Nhạc </li>
              <li className={styles.menuItem}>Phiêu Lưu</li>
              <li className={styles.menuItem}>Siêu Nhiên</li>
              <li className={styles.menuItem}>Đời Thưởng</li>
              <li className={styles.menuItem}>Giả Tưởng</li>
              <li className={styles.menuItem}>Robot</li>
              <li className={styles.menuItem}>Game</li>
              <li className={styles.menuItem}>Thể Thao</li>
              <li className={styles.menuItem}>Kịch Tính</li>
            </ul>
          </li>
          {/* <li className={`${styles.navItem} menu-hover`}>
            <p>Bảng Xếp Hạng</p>
            <ul
              className={`${styles.menu2} ${
                isScroll ? styles.menuScroll : ""
              } menu`}
            >
              <Link href="/">
                <li className={styles.menuItem}>Top Hôm này</li>
              </Link>
              <Link href="/">
                <li className={styles.menuItem}>Top Tuần này</li>
              </Link>
              <Link href="/">
                <li className={styles.menuItem}>Top Tháng này</li>
              </Link>
              <Link href="/">
                <li className={styles.menuItem}>Top năm này</li>
              </Link>
            </ul>
          </li> */}
        </ul>
        <div className={styles.search}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-1 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <button className={styles.btnSignUp}>Sign up</button>
        <button className={styles.btnSignIn}>Sign in</button>
      </div>
    </header>
  );
}

export default Header;
