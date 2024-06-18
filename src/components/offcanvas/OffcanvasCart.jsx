import React from "react";

const OffcanvasCart = ({id, ariaLabelledby}) => {
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id={id}
      aria-labelledby={ariaLabelledby}
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id={ariaLabelledby}>
          Offcanvas right
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">...</div>
    </div>
  );
};

export default OffcanvasCart;
