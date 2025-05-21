import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const playlist = [
  "/audio/track1.mp3",
  "/audio/track2.mp3",
  "/audio/track3.mp3",
  "/audio/track4.mp3",
  "/audio/track5.mp3",
  "/audio/track6.mp3",
  "/audio/track7.mp3",
  "/audio/track8.mp3",
  "/audio/track9.mp3",
  "/audio/track10.mp3"
];

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTrackEnd = () => {
    const nextIndex = (trackIndex + 1) % playlist.length;
    setTrackIndex(nextIndex);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [trackIndex]);

  return (
    <div className="music-toggle">
      <audio
        ref={audioRef}
        src={playlist[trackIndex]}
        onEnded={handleTrackEnd}
      />
      <div className="music-label">Tap to Play: Track {trackIndex + 1}</div>
      <button onClick={togglePlay} className="music-button">
        {isPlaying ? <FaPause /> : <FaPlay />} Music
      </button>
    </div>
  );
}
