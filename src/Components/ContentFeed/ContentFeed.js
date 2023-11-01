import React from "react";
import ContentCard from "./ContentCard";
import ContentData from "./ContentData";
import ContentBottom from "./ContentBottom";
import ContentSearchBar from "./ContentSearchBar";
const ContentFeed = () => {
  return (
    <div>
      <ContentSearchBar />
      <ContentCard details={ContentData} />
      <ContentBottom />
    </div>
  );
};

export default ContentFeed;
