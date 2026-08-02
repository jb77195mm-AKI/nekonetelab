import type { ReactNode } from "react";

interface LegalDocumentProps {
  content: string;
}

interface LegalList {
  kind: "unordered" | "ordered";
  start?: number;
  items: string[];
}

function renderInlineText(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /\[([^\]]+)\]\((https?:\/\/[^)\s]+|mailto:[^)\s]+)\)|(https?:\/\/[^\s]+)/g;
  let cursor = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > cursor) {
      nodes.push(text.slice(cursor, match.index));
    }

    const label = match[1] ?? match[3];
    const href = match[2] ?? match[3];
    const external = href.startsWith("http");
    nodes.push(
      <a
        key={`${href}-${match.index}`}
        href={href}
        className="break-all font-medium text-navy-deep underline underline-offset-2"
        rel={external ? "noopener noreferrer" : undefined}
        target={external ? "_blank" : undefined}
      >
        {label}
      </a>,
    );
    cursor = pattern.lastIndex;
  }

  if (cursor < text.length) {
    nodes.push(text.slice(cursor));
  }

  return nodes;
}

export function LegalDocument({ content }: LegalDocumentProps) {
  const lines = content.replace(/\r\n/g, "\n").split("\n");
  const nodes: ReactNode[] = [];
  let paragraph: string[] = [];
  let list: LegalList | null = null;
  let key = 0;

  function flushParagraph() {
    if (paragraph.length === 0) return;
    const text = paragraph.join(" ");
    nodes.push(
      <p key={`paragraph-${key++}`} className="text-sm leading-8 text-slate-700">
        {renderInlineText(text)}
      </p>,
    );
    paragraph = [];
  }

  function flushList() {
    if (!list) return;
    const className =
      "space-y-2 pl-6 text-sm leading-7 text-slate-700 marker:font-bold marker:text-slate-900";
    if (list.kind === "ordered") {
      nodes.push(
        <ol
          key={`list-${key++}`}
          start={list.start}
          className={`list-decimal ${className}`}
        >
          {list.items.map((item, index) => (
            <li key={`${item}-${index}`}>{renderInlineText(item)}</li>
          ))}
        </ol>,
      );
    } else {
      nodes.push(
        <ul key={`list-${key++}`} className={`list-disc ${className}`}>
          {list.items.map((item, index) => (
            <li key={`${item}-${index}`}>{renderInlineText(item)}</li>
          ))}
        </ul>,
      );
    }
    list = null;
  }

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    if (line.startsWith("# ")) {
      continue;
    }

    const heading = /^(##|###)\s+(.+)$/.exec(line);
    if (heading) {
      flushParagraph();
      flushList();
      const isSection = heading[1] === "##";
      nodes.push(
        isSection ? (
          <h2
            key={`heading-${key++}`}
            className="border-t border-slate-200 pt-8 text-xl font-black leading-8 text-slate-950 first:border-0 first:pt-0 sm:text-2xl"
          >
            {heading[2]}
          </h2>
        ) : (
          <h3
            key={`heading-${key++}`}
            className="pt-2 text-base font-black leading-7 text-slate-900 sm:text-lg"
          >
            {heading[2]}
          </h3>
        ),
      );
      continue;
    }

    const ordered = /^(\d+)\.\s+(.+)$/.exec(line);
    if (ordered) {
      flushParagraph();
      const itemNumber = Number(ordered[1]);
      if (
        !list ||
        list.kind !== "ordered" ||
        (list.start ?? 1) + list.items.length !== itemNumber
      ) {
        flushList();
        list = { kind: "ordered", start: itemNumber, items: [] };
      }
      list.items.push(ordered[2]);
      continue;
    }

    const unordered = /^(?:[*-]|・)\s*(.+)$/.exec(line);
    if (unordered) {
      flushParagraph();
      if (!list || list.kind !== "unordered") {
        flushList();
        list = { kind: "unordered", items: [] };
      }
      list.items.push(unordered[1]);
      continue;
    }

    flushList();
    paragraph.push(line);
  }

  flushParagraph();
  flushList();

  return <div className="space-y-5">{nodes}</div>;
}
