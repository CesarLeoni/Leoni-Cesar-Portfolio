import { RiCopyrightLine } from "react-icons/ri";

const Credits = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 text-center text-xl lg:text-2xl">
      <div className="items-start text-purple-300/60 mb-5">
        <span>
          Adapted and enhanced by Cesar Leoni, originally inspired by{" "}
          <a
            href="https://www.youtube.com/@compiletab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            CompileTab
          </a>
          
          {/* <RiCopyrightLine className="text-inline text-6xl lg:text-5xl mt-1 lg:mr-1 mr-0" />{" "} */}
          . This portfolio is a work in progress, constantly evolving to reflect
          growth and creativity.

        </span>

      </div>
      {/* <div>
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
      </div> */}
    </div>
  );
};

export default Credits;
