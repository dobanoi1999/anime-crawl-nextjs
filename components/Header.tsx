import Link from "next/link";
import React from "react";
import styles from "../styles/header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.logo}>Anime Online.</p>

      <div className="flex">
        <ul className={styles.nav}>
          <li className={`${styles.navItem} mr-14 menu-hover`}>
            <p>Thể Loại</p>
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
          <li className={`${styles.navItem} menu-hover`}>
            <p>Bảng Xếp Hạng</p>
            <ul className={`${styles.menu2} menu`}>
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
          </li>
        </ul>
        <div className={styles.search}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-1"
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
          <input
            placeholder="Search"
            className=" bg-search  outline-none"
            type="search"
            name="search"
            id=""
          />
        </div>
        <button className={`${styles.btnSignUp} mr-6`}>Sign up</button>
        <button className={styles.btnSignIn}>Sign in</button>
      </div>
    </header>
  );
}

export default Header;
