import Image from "next/image";

import classes from "./post-header.module.css";

export default function PostHeader(props) {
  const { title, image } = props;
  const postImg = JSON.parse(
    JSON.stringify(require(`@/public/images/posts/${image}`))
  );
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={postImg} alt={title} width={200} height={200} priority />
    </header>
  );
}
