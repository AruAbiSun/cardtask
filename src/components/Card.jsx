import React from "react";
import { TiTick } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";

const Card = ({ arrObj }) => {
  return (
    <div>
      <div class="row row-cols-1 row-cols-md-3 g-4 p-3 bg-primary">
        {arrObj.map((item, index) => {
          return (
            <>
              <div key={index}>
                <div class="col">
                  <div class="card h-100">
                    <div class="card-body">
                      <p className="text-center">{item.title}</p>
                      <h5 class="card-title text-center">{item.price}</h5>
                      <p class="card-text">
                        <TiTick />
                        {item.user}
                      </p>
                      <p class="card-text">
                        <TiTick />
                        {item.storage}
                      </p>
                      <p class="card-text">
                        <TiTick />
                        {item.projects}
                      </p>
                      <p class="card-text">
                        <TiTick />
                        {item.access}
                      </p>
                      <p class="card-text">
                        {" "}
                        {item.title === "FREE" ? <RxCross1 /> : <TiTick />}
                        {item.private}
                      </p>
                      <p class="card-text">
                        {" "}
                        {item.title === "FREE" ? <RxCross1 /> : <TiTick />}
                        {item.phone}
                      </p>
                      <p class="card-text">
                        {" "}
                        {item.title === "FREE" ? <RxCross1 /> : <TiTick />}
                        {item.domain}
                      </p>
                      <p class="card-text">
                        {" "}
                        {item.title === "FREE" || item.title === "PLUS" ? (
                          <RxCross1 />
                        ) : (
                          <TiTick />
                        )}
                        {item.status}
                      </p>
                    </div>

                    <div class="d-grid gap-2 col-6 mx-auto">
                      <button
                        class="btn btn-primary rounded-pill m-3"
                        type="button"
                      >
                        Button
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
