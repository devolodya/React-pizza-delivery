import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={260}
    height={350}
    viewBox="0 0 260 350"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="125" cy="119" r="100" />
    <rect x="22" y="248" rx="10" ry="10" width="200" height="16" />
    <rect x="101" y="311" rx="10" ry="10" width="140" height="33" />
    <rect x="22" y="273" rx="10" ry="10" width="200" height="16" />
    <rect x="0" y="311" rx="10" ry="10" width="83" height="33" />
  </ContentLoader>
);

export default Skeleton;
