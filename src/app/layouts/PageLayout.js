import React from "react";

function PageLayout({ title, description, children, classNameContent }) {
  return (
    <div className="d-grid gap-4">
      <div className="d-grid gap-2">
        <h2>{title}</h2>
        {description && <p className="lead">{description}</p>}
      </div>
      <div className={classNameContent}>{children}</div>
    </div>
  );
}

export default PageLayout;
