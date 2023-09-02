import Link from "next/link";

const ResumeButton: React.FC = () => {
  return (
    <Link
      href="https://hemantwasthere.s3.ap-south-1.amazonaws.com/Hemant_CV.pdf"
      target="_blank"
      className="select-none fixed top-2 right-2 m-4 flex items-center justify-center w-12 h-12 rounded-full bg-yellow_opacity text-yellow bg-opacity-50 animate-[spin_15s_linear_infinite] hover:scale-125 transition-all"
    >
      CV
    </Link>
  );
};

export default ResumeButton;
