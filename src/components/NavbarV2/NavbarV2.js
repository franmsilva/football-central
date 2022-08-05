import React from "react";
import Link from "next/link";
import styles from "./NavbarV2.module.css";

// My Components
import Logo from "../Logo/Logo";

const NavbarV2 = () => {
  return (
    <header className={[styles.main_h, styles.sticky]}>
      <div className={styles.row}>
        <Link href="/">
          <Logo />
        </Link>
        <div className="container borderXwidth">
          <Link href="/league/524/Premier-League">Premier League</Link>
          <Link href="/league/775/La-Liga">La Liga</Link>
          <Link href="/league/754/Bundesliga">Bundesliga</Link>
          <Link href="/league/891/Serie-A">Serie A</Link>
          <Link href="/league/525/Ligue-1">Ligue 1</Link>
          <Link href="/league/766/Primeira-Liga">Primeira Liga</Link>
        </div>
      </div>
    </header>
  );
};

export default NavbarV2;
