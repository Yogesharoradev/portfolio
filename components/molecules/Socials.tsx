import Social from "@/components/atoms/Social";

const Socials: React.FC = () => {
  return (
    <div className="flex gap-[.75rem]">
      <Social tip="YogeshAroraDev" link="https://github.com/Yogesharoradev">
        <svg
          width="24px"
          height="24px"
          className="social_svg"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#dba895"
        >
          <path
            d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3"
            stroke="#dba895"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </Social>
      <Social
        tip="Yogesharora207@gmail.com"
        link="mailto:Yogesharora207@gmail.com"
      >
        <svg
          width="24px"
          height="24px"
          className="social_svg"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#dba895"
        >
          <path
            d="M7 9l5 3.5L17 9"
            stroke="#dba895"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M2 17V7a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2z"
            stroke="#dba895"
            strokeWidth="1.5"
          ></path>
        </svg>
      </Social>
      <Social tip="Call Me" link="tel:+918427992959">
        <svg
          width="24px"
          height="24px"
          className="social_svg"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#dba895"
        >
          <path
            d="M20.39 15.58c-1.9 0-3.66-.73-5-1.95a8.1 8.1 0 01-2.71-2.7c-1.22-1.34-1.95-3.1-1.95-5a1 1 0 00-1-1h-1a1 1 0 00-1 1c0 2.94 1.07 5.73 3 7.83 2.11 2.11 4.9 3 7.83 3a1 1 0 001-1v-1a1 1 0 00-1-1z"
            stroke="#dba895"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M17 17l3 3m0-3l-3 3"
            stroke="#dba895"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </Social>
    </div>
  );
};

export default Socials;
