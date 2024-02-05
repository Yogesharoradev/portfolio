import Image from "next/image";
import Link from "next/link";

import supporters from "@/data/supporters.json";
import Tooltip from "../atoms/Tooltip";

const Supporters: React.FC = () => {
  return (
    <section className="wrapper">
      <div className="flex flex-col items-start md:items-center mt-0 mb-6">
        <h2>supporters</h2>
        <p>Thank you!</p>
      </div>

      <div className="flex flex-wrap justify-start gap-8 mb-12 md:justify-center">
        {supporters.map(({ name, icon, href, message }) => (
          <div className="flex flex-col items-center gap-2" key={name}>
            <Tooltip tip={message}>
              <Link href={href} className="offset_ring rounded-full">
                <Image
                  src={icon}
                  alt={name}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </Link>
            </Tooltip>
            <h6>{name}</h6>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Supporters;
