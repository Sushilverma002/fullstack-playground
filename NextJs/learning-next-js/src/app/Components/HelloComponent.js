import Link from "next/link";

function HelloComponent() {
  return (
    <div className="text-4xl">
      Hey i, am inside the hello component.
      <Link href="/about">
        <div>this is about us page</div>
      </Link>
    </div>
  );
}

export default HelloComponent;
