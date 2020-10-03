import React, { useState } from "react";
import { Link } from "gatsby";
import data from "../../content/learn/docs-list.yaml";

export default function SidePanel() {
  return (
    <aside>
      {data.map((doc, index) => {
        return (
          <SidePanelSection
            key={`${doc.title}-${index}`}
            title={doc.title}
            docItems={doc.items}
          />
        );
      })}
    </aside>
  );
}

function SidePanelSection({ title, docItems }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section>
      <h2 onClick={() => setIsExpanded(!isExpanded)}>{title}</h2>
      <ul
        style={{ overflow: "hidden", height: isExpanded ? "min-content" : 0 }}
      >
        {docItems.map((docItem, index) => {
          return (
            <li key={`${docItem.title}-${index}`}>
              <Link to={docItem.link}>{docItem.title}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
