import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./index2.css";

export default function Library2() {
    const [images, setImages] = useState(null);

    useEffect(() => {
        fetch("https://picsum.photos/v2/list?page=2&limit=20")
            .then((response) => response.json())
            .then((data) => {
                setImages(data);
            })
            .catch((error) => {
                console.error("Error fetching images:", error);
            });
    }, []);

    const navigate = useNavigate();

    const gotoPallete = (id) => {
        navigate("/player", { state: { id: id } });
    };

    return (
        <div className="screen-container">
            <div className="library-body">
                {images?.map((image) => (
                    <div
                        className="playlist-card"
                        key={image.id}
                        onClick={() => gotoPallete(image.id)}
                    >
                        <img
                            src={image.download_url}
                            className="playlist-image"
                            alt="Playlist-Art"
                        />
                        <p className="playlist-title">{image.author}</p>
                        <p className="playlist-subtitle">{image.id} Id</p>
                        <div className="playlist-fade">
                            <IconContext.Provider value={{ size: "35px", color: "rgba(196, 208, 227, 1)" }}>
                                <BsFillArrowRightCircleFill />
                            </IconContext.Provider>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}