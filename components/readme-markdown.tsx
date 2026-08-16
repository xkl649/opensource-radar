import Markdown, { defaultUrlTransform } from "react-markdown";
import type { Components, UrlTransform } from "react-markdown";
import remarkGfm from "remark-gfm";

/**
 * Renders a repository README.
 *
 * This is a server component on purpose: the markdown is turned into HTML once
 * at build time, so none of react-markdown ships to the browser and the string
 * itself never has to travel in the RSC payload.
 *
 * README content is untrusted third-party input. rehype-raw is deliberately not
 * installed, so the raw HTML that many READMEs embed is parsed and dropped
 * rather than executed; the only markup on the page is what the component map
 * below emits.
 */
export function ReadmeMarkdown({
  markdown,
  fullName,
  defaultBranch,
}: {
  markdown: string;
  fullName: string;
  defaultBranch: string;
}) {
  return (
    // break-words is inherited: bare URLs are everywhere in READMEs and would
    // otherwise push the layout wide on a phone. Code blocks scroll instead.
    <div className="break-words text-slate-300">
      <Markdown
        remarkPlugins={[remarkGfm]}
        urlTransform={repoUrlTransform(fullName, defaultBranch)}
        components={components}
        skipHtml
      >
        {markdown}
      </Markdown>
    </div>
  );
}

/**
 * READMEs address images and files by repository-relative path, which would
 * 404 against our own origin. Images are pointed at raw.githubusercontent.com
 * and everything else at the file view on github.com.
 */
function repoUrlTransform(fullName: string, defaultBranch: string): UrlTransform {
  return (url, key) => {
    if (!url) return "";

    // Headings carry no ids here, and jumping inside a collapsed panel would be
    // useless anyway, so in-page anchors go to the same section on GitHub.
    if (url.startsWith("#")) return `https://github.com/${fullName}${url}`;
    if (url.startsWith("//")) return defaultUrlTransform(`https:${url}`);
    // Absolute already, including the javascript: URLs defaultUrlTransform drops.
    if (/^[a-z][a-z0-9+.-]*:/i.test(url)) return defaultUrlTransform(url);

    const [rawPath, ...rest] = url.split("#");
    // The stored README is always the one at the repository root, so leading
    // "./", "../" and "/" all resolve to the same place.
    const path = rawPath.replace(/^\/+/, "").replace(/^(?:\.{1,2}\/)+/, "");
    if (!path) return "";

    const encoded = path.replace(/ /g, "%20");
    if (key === "src") {
      return `https://raw.githubusercontent.com/${fullName}/${defaultBranch}/${encoded}`;
    }
    const hash = rest.length ? `#${rest.join("#")}` : "";
    return `https://github.com/${fullName}/blob/${defaultBranch}/${encoded}${hash}`;
  };
}

/**
 * The page already owns the h1, so README headings are shifted down one level
 * and sized to sit inside a panel rather than to lead a document.
 */
const components: Components = {
  h1: ({ children }) => (
    <h2 className="mt-8 mb-3 border-b border-white/[0.08] pb-2 text-[19px] font-semibold tracking-tight text-white first:mt-0">
      {children}
    </h2>
  ),
  h2: ({ children }) => (
    <h3 className="mt-7 mb-3 border-b border-white/[0.06] pb-1.5 text-[17px] font-semibold tracking-tight text-slate-100 first:mt-0">
      {children}
    </h3>
  ),
  h3: ({ children }) => (
    <h4 className="mt-6 mb-2 text-[15px] font-semibold text-slate-100 first:mt-0">
      {children}
    </h4>
  ),
  h4: ({ children }) => (
    <h5 className="mt-5 mb-2 text-[14px] font-semibold text-slate-200 first:mt-0">
      {children}
    </h5>
  ),
  h5: ({ children }) => (
    <h6 className="mt-5 mb-2 text-[12px] font-semibold tracking-wide text-slate-400 uppercase first:mt-0">
      {children}
    </h6>
  ),
  h6: ({ children }) => (
    <h6 className="mt-5 mb-2 text-[12px] font-semibold tracking-wide text-slate-500 uppercase first:mt-0">
      {children}
    </h6>
  ),

  p: ({ children }) => (
    <p className="my-3 text-[13.5px] leading-[1.75] text-slate-300">{children}</p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer nofollow"
      className="text-violet-300 underline decoration-violet-400/30 underline-offset-2 transition hover:text-violet-200 hover:decoration-violet-300/70"
    >
      {children}
    </a>
  ),
  img: ({ src, alt, title }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={typeof src === "string" ? src : undefined}
      alt={alt ?? ""}
      title={title}
      loading="lazy"
      decoding="async"
      className="my-1 inline-block h-auto max-w-full rounded-lg align-middle"
    />
  ),

  ul: ({ children }) => (
    <ul className="my-3 list-disc space-y-1.5 pl-5 text-[13.5px] leading-[1.7] text-slate-300 marker:text-slate-600">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-3 list-decimal space-y-1.5 pl-5 text-[13.5px] leading-[1.7] text-slate-300 marker:text-slate-500">
      {children}
    </ol>
  ),
  li: ({ children, className }) => (
    // Task-list items drop the bullet; remark-gfm marks them for us.
    <li
      className={`[&>ol]:my-1.5 [&>p]:my-1.5 [&>ul]:my-1.5 ${
        className?.includes("task-list-item") ? "list-none -ml-5 pl-0" : ""
      }`}
    >
      {children}
    </li>
  ),
  input: ({ checked, type }) =>
    type === "checkbox" ? (
      <input
        type="checkbox"
        checked={checked}
        readOnly
        disabled
        className="mr-1.5 size-3.5 translate-y-0.5 accent-violet-500"
      />
    ) : null,

  blockquote: ({ children }) => (
    <blockquote className="my-4 rounded-r-lg border-l-2 border-violet-400/40 bg-white/[0.02] py-1.5 pr-3 pl-4 text-slate-400 [&>p]:my-2 [&>p]:text-slate-400">
      {children}
    </blockquote>
  ),
  pre: ({ children }) => (
    <pre className="my-4 overflow-x-auto rounded-xl bg-ink-950 p-3.5 font-mono text-[12px] leading-relaxed text-slate-300 ring-1 ring-white/[0.06] [&>code]:bg-transparent [&>code]:p-0 [&>code]:text-inherit [&>code]:ring-0">
      {children}
    </pre>
  ),
  code: ({ children }) => (
    <code className="rounded bg-white/[0.07] px-1.5 py-0.5 font-mono text-[12px] break-words text-slate-200 ring-1 ring-white/[0.06]">
      {children}
    </code>
  ),

  table: ({ children }) => (
    <div className="my-4 overflow-x-auto rounded-xl ring-1 ring-white/[0.06]">
      <table className="w-full border-collapse text-[13px]">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-white/[0.04]">{children}</thead>,
  th: ({ children }) => (
    <th className="px-3 py-2 text-left text-[12px] font-semibold text-slate-200">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-t border-white/[0.06] px-3 py-2 align-top text-slate-300">
      {children}
    </td>
  ),

  hr: () => <hr className="my-6 border-white/[0.08]" />,
  strong: ({ children }) => (
    <strong className="font-semibold text-slate-100">{children}</strong>
  ),
  del: ({ children }) => (
    <del className="text-slate-500 line-through">{children}</del>
  ),
};
