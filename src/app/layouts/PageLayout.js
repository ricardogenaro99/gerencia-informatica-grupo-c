import React from "react";

function PageLayout({
  title,
  controllers,
  description,
  children,
  classNameContent,
}) {
  return (
    <div className="d-grid gap-4">
      <div className="d-grid gap-2">
        <div className="d-flex flex-wrap justify-content-between">
          <h2>{title}</h2>
          {controllers && <div>{controllers}</div>}
        </div>
        {description && <p className="lead">{description}</p>}
      </div>
      <div className={classNameContent}>{children}</div>
    </div>
  );
}

export default PageLayout;
