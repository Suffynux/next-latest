import { Fragment } from "react";

export function Arrow() {
  return <span className="arrow-chip" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>;
}

export function ButtonContent({ children }) {
  return <><span className="button-label">{children}</span><Arrow /></>;
}

export function Headline({ text, accent, as: Tag = "h1", motion, annotate = false, ...props }) {
  const phrase = accent || text.split(" ").slice(-2).join(" ");
  const start = text.indexOf(phrase);
  const parts = start < 0 ? [text] : [text.slice(0, start), phrase, text.slice(start + phrase.length)];
  let word = 0;
  return (
    <Tag {...props} className={[props.className, motion ? `word-heading ${motion}` : ""].filter(Boolean).join(" ")}>
      {parts.map((part, index) => {
        const words = part.split(/(\s+)/).map((token, i) => /\s/.test(token) || !token ? token : <span className={motion ? "word" : undefined} style={motion ? { "--word": word++ } : undefined} key={i}>{token}</span>);
        return index === 1 ? <em key={index} className={annotate ? "annotation" : undefined}>{words}{annotate && <svg aria-hidden="true" viewBox="0 0 200 85" preserveAspectRatio="none"><path pathLength="1" d="M181 17C139-5 40 1 13 29S14 76 91 77s110-25 100-46C183 11 100 0 39 16" /></svg>}</em> : <Fragment key={index}>{words}</Fragment>;
      })}
    </Tag>
  );
}

export function PullLine({ text }) {
  const end = text.search(/\.\s/);
  return end < 0 ? <em className="pull-line">{text}</em> : <><em className="pull-line">{text.slice(0, end + 1)}</em>{text.slice(end + 1)}</>;
}

export function GhostNumber({ children }) {
  return <svg className="ghost-number" viewBox="0 0 210 150" aria-hidden="true" focusable="false"><text x="0" y="122" fill="currentColor">{children}</text></svg>;
}
