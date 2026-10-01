import type { CSSProperties } from 'react';

type Props = { text: string; letters?: boolean; start?: number };

// Splits text into masked words (or letters) for the data-reveal="words" animation.
// Put data-reveal="words" on the parent element.
export function Split({ text, letters = false, start = 0 }: Props) {
  const parts = letters ? [...text] : text.split(' ');
  return (
    <>
      {parts.map((p, i) => (
        <span key={i}>
          <span className="w" style={{ '--i': start + i } as CSSProperties}>
            <span>{p}</span>
          </span>
          {!letters && i < parts.length - 1 ? ' ' : null}
        </span>
      ))}
    </>
  );
}
