import { RiCopyrightLine } from "react-icons/ri";

const Credits = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 text-center text-xl lg:text-2xl">
      <div className="flex items-start">
      <RiCopyrightLine className="mt-1 lg:mr-1 mr-0" />        <span>
          Inspired by a{" "}
          <a
            href="https://youtu.be/iGMbuSxw2sc?si=dVvlaxHmx2g4rqLQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            CompileTab YouTube video
          </a>
          .
        </span>
      </div>
      <div>
        For a full presentation about the technologies used for creating this site, visit{" "}
        <a
          href="https://react-tailwind-css-si-gs-y7ilza5.gamma.site/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          this link
        </a>
        !
      </div>
    </div>
  );
};

export default Credits;
