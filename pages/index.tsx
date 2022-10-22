import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      Open{" "}
      <a href="/api/svg2png?svg=https://gist.githubusercontent.com/christophermanning/4460135/raw/7278f8125f4508e096396b024304daf238e38b97/octocat.svg">
        this
      </a>{" "}
      to see it in action.
    </div>
  );
};

export default Home;
