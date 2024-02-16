import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";

import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

export default function PostContent({ post }) {
  const customRenderers = {
    // img(image) {
    //   const postImg = JSON.parse(
    //     JSON.stringify(require(`@/public/images/posts/${post.image}`))
    //   );
    //   return <Image src={postImg} alt={image.alt} width={600} height={600} />;
    // },
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        console.log(image);
        const postImg = JSON.parse(
          JSON.stringify(
            require(`@/public/images/posts/${image.properties.src}`)
          )
        );
        return (
          <div className={classes.image}>
            <Image src={postImg} alt={image.alt} width={600} height={600} />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { className, children } = code;
      // className is something like language-js => We need the "js" part here
      const language = className.split("-")[1];
      return (
        <SyntaxHighlighter style={atomDark} language={language}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={post.image} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}
