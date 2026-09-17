import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Info, CheckCircle2 } from 'lucide-react';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className = '' }) => {
  return (
    <div className={`prose prose-slate max-w-none dark:prose-invert ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 border-b-2 border-orange-500 pb-3 mb-6 flex items-center gap-3">
              <span className="w-3 h-8 bg-orange-500 rounded-sm inline-block"></span>
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mt-8 mb-4 border-l-4 border-blue-900 pl-3">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg font-semibold text-slate-800 mt-6 mb-3 flex items-center gap-2">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="space-y-2 mb-6 ml-2 list-none">
              {children}
            </ul>
          ),
          li: ({ children }) => (
            <li className="flex items-start gap-2 text-slate-700 text-sm sm:text-base">
              <CheckCircle2 className="w-4 h-4 text-orange-500 mt-1 shrink-0" />
              <span>{children}</span>
            </li>
          ),
          blockquote: ({ children }) => (
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg my-6 flex items-start gap-3 shadow-xs">
              <Info className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
              <div className="text-amber-900 text-sm italic">{children}</div>
            </div>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-6 rounded-xl border border-slate-200 shadow-xs bg-white">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-slate-900 text-white font-semibold uppercase tracking-wider text-[11px] sm:text-xs">
              {children}
            </thead>
          ),
          th: ({ children }) => (
            <th className="py-3.5 px-4 border-b border-slate-700 font-bold text-slate-100">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="py-3 px-4 border-b border-slate-100 text-slate-700 hover:bg-slate-50 transition-colors">
              {children}
            </td>
          ),
          code: ({ className, children }) => {
            const isBlock = className?.includes('language-');
            if (isBlock) {
              return (
                <div className="my-4 rounded-xl overflow-hidden bg-slate-950 text-emerald-400 p-4 font-mono text-xs sm:text-sm border border-slate-800 shadow-inner overflow-x-auto">
                  <pre><code>{children}</code></pre>
                </div>
              );
            }
            return (
              <code className="bg-slate-100 text-orange-600 px-1.5 py-0.5 rounded font-mono text-xs border border-slate-200">
                {children}
              </code>
            );
          },
          strong: ({ children }) => (
            <strong className="font-semibold text-slate-900 bg-orange-50 px-1 rounded">
              {children}
            </strong>
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
