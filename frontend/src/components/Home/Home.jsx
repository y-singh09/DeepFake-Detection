import React, { useState } from 'react';
import DownloadButton from '../Download/Download';

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div
            className="mx-auto w-full max-w-7xl"
            style={{
                backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/51d98be2e4b05a25fc200cbc/1583851815451-OGWKOATGQA7580L4UQSA/suda+cover.jpg?format=1500w')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <aside className="relative overflow-hidden text-white rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-14 mx-auto sm:px-6 lg:px-8">
                    <div
                        className="max-w-xl sm:mt-1 mt-80 space-y-4 text-center sm:text-right sm:ml-auto bg-black bg-opacity-50 border border-gray-200 shadow-lg rounded-lg p-8"
                    >
                        <h2 className="text-4xl text-white font-bold sm:text-5xl italic">
                            Enter Image or Video
                        </h2>

                        <DownloadButton
                            to="/"
                            label="Download now"
                            onClick={() => console.log('Button clicked!')}
                        />

                       
                            <div className="mt-6">
                                {/* <label
                                    htmlFor="file-upload"
                                    className="inline-flex items-center px-6 py-3 font-medium bg-blue-600 text-white rounded-lg cursor-pointer hover:opacity-80"
                                >
                                    Choose Files
                                    <input
                                        type="file"
                                        id="file-upload"
                                        accept="image/*,video/*"
                                        multiple
                                        style={{ display: 'none' }}
                                        onChange={(e) =>
                                            console.log('Selected files:', e.target.files)
                                        }
                                    />
                                </label> */}
                            </div>
                       
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full">
                    <img
                        className="w-96 py-18"
                        src="https://deepfake-detect.com/assets/img/DeepfakeDetection_Facebook.gif"
                        alt="image1"
                    />
                </div>
            </aside>

            <div className="grid place-items-center sm:mt-20">
                <img
                    className="md:w-96 w-24"
                    src="https://github.com/aaronchong888/DeepFake-Detect/raw/master/img/dfdetect-home.png"
                    alt="image2"
                />
            </div>

            <h1 className="text-center text-2xl text-white sm:text-5xl py-10 font-medium">What is DeepFake?</h1>
            <p className="mt-6 text-white">
                Deepfake is a term used to describe synthetic media in which a person in an existing image, video, or audio is replaced with someone else's likeness or voice using artificial intelligence (AI) techniques. The term combines "deep learning," a subset of AI, and "fake," reflecting the realistic yet deceptive nature of this technology.
            </p>
            <p className="mt-6 text-white">
              The rise of deepfake technology has introduced a significant challenge to digital authenticity,
              making it increasingly difficult to distinguish between real and manipulated media.
              Deepfakes, which utilize AI to create hyper-realistic fake videos and audio, pose risks in various domains,
              including politics, cybersecurity, and personal privacy. Our project, the Deepfake Detection System,
              addresses this pressing issue by providing a robust solution to identify manipulated content using advanced AI models.
            </p>
        </div>
    );
}
