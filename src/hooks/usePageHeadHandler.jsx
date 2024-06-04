import { useEffect } from "react";

const RenderPageHeadInfo = (title, description) => {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]').setAttribute("content", description);
  }, [title, description]);
};

export default RenderPageHeadInfo;
