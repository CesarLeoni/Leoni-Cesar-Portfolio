import { RiCopyrightLine ,RiArrowRightUpLine} from "react-icons/ri";

const Credits = () => {
  return (
    <div className="justify-center items-center">
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
     <div className="mb-4 justify-center items-center space-x-2 text-xl lg:text-2xl">
     For a full presentation about the technologies used for creating this site, 
     visit<a href="https://react-tailwind-css-si-gs-y7ilza5.gamma.site/"> this link</a>!
   </div>
   </div>
  );
};

export default Credits;
