"use client"

export default function Card({ name, order, a }: any) {

  return (
    <div className="card card-side bg-base-100 shadow-xl my-2 mx-1">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>order</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">More</button>
        </div>
      </div>
    </div>
  );
}
