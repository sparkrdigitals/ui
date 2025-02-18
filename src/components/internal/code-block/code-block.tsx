/* eslint-disable react/no-array-index-key */
/* eslint-disable prettier/prettier */
import { Highlight, themes } from 'prism-react-renderer';

export const CodeBlock = ({
  codeBlock,
  language,
}: {
  codeBlock: string;
  language: string;
}) => {
  return (
    <Highlight
      theme={themes.vsDark}
      code={codeBlock}
      language={language}
    >
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre
          style={{
            ...style,
            borderRadius: '24px',
            width: '100%',
            maxWidth: '768px',
            overflowX: 'auto',
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
