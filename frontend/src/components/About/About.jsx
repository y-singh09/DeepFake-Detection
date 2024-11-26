import React from 'react';

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-5/12 lg:w-5/12">
            <img
              src="https://roboticsbiz.com/wp-content/uploads/2022/11/deepfakes-696x420.jpg"
              alt="Deepfake Detection System"
            />
          </div>
          <div className="md:w-7/12 lg:w-6/12">
            <h1 className="text-2xl text-gray-900 font-bold md:text-4xl italic underline">
              About the Deepfake Detection System Project
            </h1>
            <p className="mt-6 text-gray-600 italic">
              The rise of deepfake technology has introduced a significant challenge to digital authenticity,
              making it increasingly difficult to distinguish between real and manipulated media.
              Deepfakes, which utilize AI to create hyper-realistic fake videos and audio, pose risks in various domains,
              including politics, cybersecurity, and personal privacy. Our project, the Deepfake Detection System,
              addresses this pressing issue by providing a robust solution to identify manipulated content using advanced AI models.
            </p>
            <div className="mt-12 text-gray-600 text-lg">
              <p className="italic underline">
                <strong>Key Features</strong>
              </p>
              <ul className="mt-4 list-disc list-inside space-y-4">
                <li>
                  <strong>Video Detection:</strong> 
                  The system analyzes video files to detect visual manipulation. It evaluates subtle inconsistencies introduced during deepfake generation, such as mismatched facial expressions, unnatural lighting, or pixel-level artifacts.
                </li>
                <li>
                  <strong>Audio Detection:</strong> 
                  The system processes audio tracks to identify tampered speech. By analyzing tone, cadence, and spectral properties, it can detect fabricated or synthesized audio segments commonly used in deepfakes.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-6">
          <h2 className="text-2xl text-gray-900 font-bold md:text-3xl  underline italic">
            Core Technologies
          </h2>
          <div className="mt-8 text-gray-600">
            <div className="mb-8">
              <h3 className="text-xl text-gray-900 font-semibold md:text-2xl italic">
                RENext (Residual Networks with Enhanced Next-Block)
              </h3>
              <p className="mt-4 italic">
                The RENext model is employed for video analysis due to its exceptional performance in image classification and detection tasks. 
                It processes frame sequences, leveraging its residual connections to capture intricate details and inconsistencies in visual elements. 
                RENext ensures scalability and robustness, making it ideal for high-resolution video analysis.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-gray-900 font-semibold md:text-2xl italic">
                LSTM (Long Short-Term Memory Networks)
              </h3>
              <p className="mt-4 italic">
                For audio detection, the system leverages LSTM networks, which excel at handling sequential data. 
                LSTM identifies patterns and temporal dependencies in speech, helping to distinguish between genuine and synthesized voices. 
                This model is particularly effective in analyzing the flow of audio to detect subtle irregularities introduced during deepfake creation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
