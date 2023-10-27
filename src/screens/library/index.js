import React, { useState, useEffect } from "react";
import { TiTick } from 'react-icons/ti'
import Color, { Palette } from "color-thief-react";
import "./index.css";

const Loader = () => {
    return (
        <>
            <div
                className="rounded-circle mx-1 pallete-item"
            />
        </>
    )
}

export default function Library() {
    const [images, setImages] = useState(null);
    const [copiedColor, setCopiedColor] = useState(null);
    const randomPage = Math.floor(Math.random() * 50) + 1;


    const copyToClipboard = (color) => {
        navigator.clipboard.writeText(color)
            .then(() => {
                setCopiedColor(color);

                setTimeout(() => {
                    setCopiedColor("");
                }, 2000);
            })
            .catch((error) => {
                console.error('Failed to copy to clipboard: ', error);
            });
    };


    // Function to shuffle an array (Xáo trộn mảng)
    function shuffleArray(array) {
        let shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }

    const randomImage = () => {
        fetch(`https://picsum.photos/v2/list?page=${randomPage}&limit=20`)
            .then((response) => response.json())
            .then((data) => {
                // Shuffle the data array to randomize the order (Xáo trộn nhẫu nhiên data từ fetch)
                const shuffledData = shuffleArray(data);

                // Take the first 12 elements from the shuffled array (Lấy 12 tấm từ mảng đã xáo trộn)
                const randomImages = shuffledData.slice(0, 12);

                setImages(randomImages);
                console.log("data ", data)
                console.log("clicked ", randomImages)
                console.log("page num ", randomPage)
            })
            .catch((error) => {
                console.error("Error fetching images:", error);
            });
    }

    useEffect(() => {
        fetch("https://picsum.photos/v2/list?page=8&limit=12")
            .then((response) => response.json())
            .then((data) => {
                setImages(data);
            })
            .catch((error) => {
                console.error("Error fetching images:", error);
            });
    }, []);
    return (
        <div className="screen-container">
            <div className="library-body">
                {images?.map((image) => (
                    <div
                        className="playlist-card"
                        key={image.id}
                    >
                        <img
                            src={image.download_url}
                            className="playlist-image"
                            alt="Playlist-Art"
                        />
                        {/* <p className="playlist-title">{image.author}</p> */}
                        <div className="card-pallete">
                            <Color src={image.download_url} crossOrigin="anonymous" format="hex">
                                {({ data, loading }) => {
                                    return (
                                        <>
                                            <h4 className="card-pallete-title">Prediminant Color:</h4>
                                            {loading ?
                                                <Loader /> :
                                                <div
                                                    className="rounded-circle mx-1 pallete-item"
                                                    style={{ background: data }}
                                                    onClick={() => copyToClipboard(data)}
                                                >
                                                    <div className="copied-message-container">
                                                        {copiedColor === data && (
                                                            <span className="copied-message">
                                                                <TiTick />
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>}

                                        </>
                                    );
                                }}
                            </Color>
                            <Palette src={image.download_url} crossOrigin="anonymous" format="hex" colorCount={4}>
                                {({ data, loading }) => {
                                    return (
                                        <>
                                            <h4 className="card-pallete-title">Pallete Color:</h4>
                                            {loading && <Loader />}
                                            {data &&
                                                <div className="card-pallete-list">
                                                    {data.map((color, index) => (
                                                        <div
                                                            key={index}
                                                            className="rounded-circle mx-1 pallete-item"
                                                            style={{ background: color }}
                                                            onClick={() => copyToClipboard(color)}
                                                        >
                                                            <div className="copied-message-container">
                                                                {copiedColor === color && (
                                                                    <span className="copied-message">
                                                                        <TiTick />
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            }
                                        </>
                                    );
                                }}
                            </Palette>
                        </div>
                        {/*                         <div className="playlist-fade">
                            <IconContext.Provider value={{ size: "35px", color: "rgba(196, 208, 227, 1)" }}>
                                <BsFillArrowRightCircleFill />
                            </IconContext.Provider>
                        </div> */}
                    </div>
                ))}
            </div>
            <div className="controls">
                <div className="control-item" id="control-random" onClick={randomImage}>Random</div>
                <div className="control-item" id="control-upload">Upload</div>
                <div className="control-divider"></div>
                <div className="control-item" id="control-median-cut">Median cut</div>
                <div className="control-item" id="control-k-means">K-Means</div>
                <div className="control-item" id="control-histogram">Histogram</div>
            </div>
        </div>
    );
}