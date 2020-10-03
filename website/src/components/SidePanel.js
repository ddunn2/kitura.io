import React, { useState } from "react";
import { Link } from "gatsby";
import data from "../../content/learn/docs-list.yaml";

export default function SidePanel({ location }) {
  return (
    <aside className="sidepanel">
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
  let initialState = false;
  if (location && location.pathname.includes(`/${doc.id}/`)) {
    initialState = true;
  }
  const [isExpanded, setIsExpanded] = useState(initialState);

  return (
    <section className="sidepanel--section">
      <h2
        className="sidepanel--section_title"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {doc.title}
      </h2>
      <ul
        style={{ overflow: "hidden", height: isExpanded ? "min-content" : 0 }}
      >
        {doc.items.map((docItem, index) => {
          return (
            <li
              className="sidepanel--section_list_item"
              key={`${docItem.title}-${index}`}
            >
              <Link
                className="sidepanel--section_link"
                state={{ isExpanded: isExpanded }}
                to={docItem.link}
              >
                {docItem.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
