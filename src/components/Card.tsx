/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Card({ name, order, a }: any) {
  return (
    <div className="card w-full bg-base-100 shadow-xl my-2">
        {/* <figure><img src={P} alt="Shoes" /></figure> */}
      <div className="card-body">
        <h2 className="card-title">{name.toUpperCase()}</h2>
        <p>order</p>
        <div className="card-actions justify-end">
          <Link href={`/pokemon/${name}`} className="btn btn-primary">More</Link>
        </div>
      </div>
    </div>
  );
}
