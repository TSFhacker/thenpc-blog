import Link from "next/link";
import classes from "./main-navigation.module.css";
import Logo from "./logo";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link className={classes.link} href="/posts">
              Posts
            </Link>
          </li>
          <li>
            <Link className={classes.link} href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
