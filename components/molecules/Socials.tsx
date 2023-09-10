import Social from "@/components/atoms/Social";
import { user } from "@/lib/utils";

const Socials: React.FC = () => {
  return (
    <div className="flex gap-[.75rem]">
      <Social
        icon="github"
        tip="hemantwasthere"
        link="https://github.com/hemantwasthere"
      />
      <Social
        icon="discord"
        tip={user.username}
        link={`https://discord.com/users/${user.id}`}
      />
      <Social
        icon="email"
        tip="hemant.is.there@gmail.com"
        link="mailto:hemant.is.there@gmail.com"
      />
      <Social
        icon="kofi"
        tip="xebec"
        link="https://www.buymeacoffee.com/xebec"
      />
    </div>
  );
};

export default Socials;
