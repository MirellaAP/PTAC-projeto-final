import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

useEffect(() => {
    localStorage.setItem("Video", JSON.stringify(video));
  }, [video]);

const cadastrar = (e) => {
    e.preventDefault();
    setVideo([...video, {
        video: video,
        thumbnail: thumbnail,
        id: id
    }]);
    setId(id + 1);
    setVideo("");
    setThumbnail("");
};