import Link from "next/link";
import Image from "next/image";

const logo = () => {
  return (
    <Link href="/">
      <Image src="/ps.png" width={70} height={70} priority alt="" />
    </Link>
  );
};

export default logo;
