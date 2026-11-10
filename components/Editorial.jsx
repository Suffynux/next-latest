import { Fragment } from "react";

export function Arrow() {
  return <span className="arrow-chip" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M7 17 17 7M9 7h8v8" /></svg></span>;
}

export function ButtonContent({ children }) {
  return <><span className="button-label">{children}</span><Arrow /></>;
}

// Splits a headline into words (for motion) and marks one accent phrase.
export function Headline({ text, accent, as: Tag = "h1", motion, annotate, ...props }) {
  const phrase = accent || text.split(" ").slice(-2).join(" ");
  const start = text.indexOf(phrase);
  const parts = start < 0 ? [text] : [text.slice(0, start), phrase, text.slice(start + phrase.length)];
  let word = 0;
  return (
    <Tag {...props} className={[props.className, motion ? `word-heading ${motion}` : ""].filter(Boolean).join(" ") || undefined}>
      {parts.map((part, index) => {
        const words = part.split(/(\s+)/).map((token, i) => /\s/.test(token) || !token ? token : <span className={motion ? "word" : undefined} style={motion ? { "--word": word++ } : undefined} key={i}>{token}</span>);
        return index === 1 ? <em key={index}>{words}</em> : <Fragment key={index}>{words}</Fragment>;
      })}
    </Tag>
  );
}

export function PullLine({ text }) {
  const end = text.search(/\.\s/);
  return end < 0 ? <em className="pull-line">{text}</em> : <><em className="pull-line">{text.slice(0, end + 1)}</em>{text.slice(end + 1)}</>;
}
