import Link from "next/link";
import Image from "next/image";

const PetList = () => {
  return (
    <Link href="/detalje">
      <Image
        loading="eager"
        alt="cat"
        src="https://placecats.com/neo/300/200"
        width={300}
        height={200}
      />
    </Link>
  );
}

export default PetList;
