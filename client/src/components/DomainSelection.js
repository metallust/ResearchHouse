import React from 'react';


const DomainSelection = () => {
  return (
    <section className="cd-h-timeline js-cd-h-timeline margin-bottom-md">
      <div className="cd-h-timeline__container container">
        <div className="cd-h-timeline__dates">
          <div className="cd-h-timeline__line">
            <ol>
              <li>
                <a href="#0" className="cd-h-timeline__date cd-h-timeline__date--selected">
                  16 Jan
                </a>
                <span className="cd-h-timeline__circle"></span> {/* Circle for event */}
              </li>
              <li>
                <a href="#0" className="cd-h-timeline__date">
                  28 Feb
                </a>
                <span className="cd-h-timeline__circle"></span> {/* Circle for event */}
              </li>
              {/* Other dates with circles here */}
            </ol>
            <span className="cd-h-timeline__filling-line" aria-hidden="true"></span>
          </div>
        </div>
        <ul>
          <li>
            <a href="#0" className="text-replace cd-h-timeline__navigation cd-h-timeline__navigation--prev cd-h-timeline__navigation--inactive">
              Prev
            </a>
          </li>
          <li>
            <a href="#0" className="text-replace cd-h-timeline__navigation cd-h-timeline__navigation--next">
              Next
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default DomainSelection;
