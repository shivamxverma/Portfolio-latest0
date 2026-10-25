import React from "react";

const Layout = ({ children, showHeader, title, subtitle }) => {
  return (
    <div className="container">
      {showHeader && (
        <header className="page-header">
          <h1 className="page-title">{title}</h1>
          {subtitle && <p className="page-subtitle">{subtitle}</p>}
        </header>
      )}
      {children}
    </div>
  );
};

export default Layout;
