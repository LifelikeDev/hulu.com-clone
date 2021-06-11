import Thumbnail from "./Thumbnail";
// import FlipMove from "react-flip-move";

const Feed = ({ results }) => {
  return (
    <div className="px-5 my-4 sm:my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3x:flex flex-wrap justify-center">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Feed;
