import React from "react";
import { Link } from "gatsby";
import data from "../../content/learn/docs-list.yaml";

export default function SidePanel() {
  const content = buildSidePanel();
  return <aside>{content}</aside>;
}

function buildSidePanel() {
  const sidePanelContent = data.map((doc) => {
    return (
      <>
        <h2>{doc.title}</h2>
        <ul>
          {doc.items.map((docItem) => {
            return (
              <li>
                <Link to={docItem.link}>{docItem.title}</Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  });

  return sidePanelContent;
}
