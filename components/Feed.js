import Thumbnail from "./Thumbnail";

const Feed = ({ results }) => {
  return results.map((result) => <Thumbnail key={result.id} result={result} />);
};

export default Feed;
