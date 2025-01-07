import { LINKEDIN_POSTS } from "../constants"; // Import the array from your constants file
import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { useRef } from "react";

const LinkedInPosts = () => {
  const linkedinref = useRef(null);

  return (
    <section className="py-8 mb-12" id="linkedin" ref={linkedinref}>
      <div className="px-4">
        <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
          My Linked<AiOutlineLinkedin className="text-white inline" /> Posts
        </h2>

        {/* Container for the scrollable posts */}
        <div className="flex justify-center">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex space-x-4 items-stretch">
              {LINKEDIN_POSTS.map((post, index) => (
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="p-4 border rounded shadow w-80 flex-shrink-0 hover:shadow-xl hover:border-purple-600 hover:text-purple-200 transition-all duration-300 ease-in-out flex flex-col"
                >
                  {/* Post Image */}
                  <div className="mb-3 h-48 flex items-center justify-center">
                    <img
                      src={post.image}
                      alt={`LinkedIn post thumbnail ${index + 1}`}
                      className="max-w-full max-h-full object-contain"
                      style={{ backgroundColor: "transparent" }} // Ensure no background color
                    />
                  </div>
                  {/* Post Text and Date */}
                  <div className="flex-grow text-left">
                    <p className="text-sm text-gray-200">{post.date}</p>
                    <p className="text-base font-medium mt-1">{post.text}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInPosts;
