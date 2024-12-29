import { RiCopyrightLine } from "react-icons/ri";

const Credits = () => {
  return (
    <div className="mb-4 flex justify-center items-center space-x-2 text-xl lg:text-2xl">
      <RiCopyrightLine className="mr-2" />
      This site was inspired by a {" "}
      <a
        href="https://youtu.be/iGMbuSxw2sc?si=dVvlaxHmx2g4rqLQ"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        CompileTab YouTube video
      </a>.
    </div>
  );
};

export default Credits;
