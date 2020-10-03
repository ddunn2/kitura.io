import React, { useState } from "react";
import { Link } from "gatsby";
import data from "../../content/learn/docs-list.yaml";

export default function SidePanel({ location }) {
  return (
    <aside>
      {data.map((doc, index) => {
        return (
          <SidePanelSection
            key={`${doc.title}-${index}`}
            doc={doc}
            location={location}
          />
        );
      })}
    </aside>
  );
}

function SidePanelSection({ doc, location }) {
  let initialState;
  if (location.pathname.includes(doc.id)) {
    initialState = true;
  } else {
    initialState = false;
  }
  const [isExpanded, setIsExpanded] = useState(initialState);

  return (
    <section>
      <h2 onClick={() => setIsExpanded(!isExpanded)}>{doc.title}</h2>
      <ul
        style={{ overflow: "hidden", height: isExpanded ? "min-content" : 0 }}
      >
        {doc.items.map((docItem, index) => {
          return (
            <li key={`${docItem.title}-${index}`}>
              <Link state={{ isExpanded: isExpanded }} to={docItem.link}>
                {docItem.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
