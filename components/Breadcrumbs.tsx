import React from "react";

type BreadcrumbsProps = {
  isActive: boolean,
  page: string,
  product: string,
}

const Breadcrumbs = ({isActive, page, product}:BreadcrumbsProps)=>{
  return (
    <div className={isActive ? "core-breadcrumb container-fluid mt-2  muted-yeal-bg" : "core-breadcrumb container-fluid"}>
      <div className="container mt-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">All</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {page}
            </li>
            {product ? (
              <li className="breadcrumb-item active" aria-current="page">
                {product}
              </li>
            ) : null}
          </ol>
        </nav>
      </div>
    </div>
  );
}

export default Breadcrumbs;
