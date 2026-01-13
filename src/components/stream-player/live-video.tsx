"use client";

import { useTracks } from "@livekit/components-react";
import { Participant, Track } from "livekit-client";
import { useEffect, useRef, useState } from "react";
import { FullScreenControl } from "./fullscreen-control";
import { useEventListener } from "usehooks-ts";
import { VolumeControl } from "./volume-control";

interface LiveVideoProps {
	participant: Participant;
}

const LiveVideo = ({ participant }: LiveVideoProps) => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const wrapperRef = useRef<HTMLDivElement>(null);
	const [isFullScreen, setIsFullScreen] = useState(false);
	const [volume, setVolume] = useState(0);
	const tracks = useTracks([
		Track.Source.Camera,
		Track.Source.Microphone,
	]).filter(
		(track) => track.participant.identity === participant.identity
	);

	useEffect(() => {
		const videoElement = videoRef.current;
		if (!videoElement) return;

		tracks.forEach((track) => {
			if (track.publication.track) {
				track.publication.track.attach(videoElement);
			}
		});

		return () => {
			tracks.forEach((track) => {
				if (track.publication.track) {
					track.publication.track.detach(videoElement);
				}
			});
		};
	}, [tracks]);

	const toggleFullScreen = () => {
		if (isFullScreen) {
			document.exitFullscreen()
		} else if (wrapperRef.current) {
			wrapperRef.current.requestFullscreen();
		}
	}
	const handleFullScreenChange = () => {
		const isCurrentlyFullscreen = document.fullscreenElement !== null
		setIsFullScreen(isCurrentlyFullscreen)
	}

	const onVolumeChange = (value: number) => {
		setVolume(+value);
		if (videoRef?.current) {
			videoRef.current.muted = value === 0
			videoRef.current.muted = +value === 0.01
		}
	}

	const toggleMuted = () => {
		const isMuted = volume === 0;
		setVolume(isMuted ? 50 : 0);

		if (videoRef.current) {
			videoRef.current.muted = !isMuted;
			videoRef.current.volume = isMuted ? 0.5 : 0
		}
	}

	useEffect(() => {
		onVolumeChange(0);
	}, [])
	useEventListener("fullscreenchange", handleFullScreenChange, wrapperRef)

	return (
		<div ref={wrapperRef} className="relative h-full w-full flex bg-black">
			<video
				ref={videoRef}
				autoPlay
				playsInline
				className="w-full h-full object-contain"
			/>
			<div className="absolute top-0 h-full w-full opacity-0 hover:opacity-100 hover:transition-all">
				<div className="absolute bottom-0 flex h-14 w-full items-center justify-between bg-linear-to-r from-neutral-900 px-4 ">
					<VolumeControl value={volume} onChange={onVolumeChange} onToggle={toggleMuted} />
					<FullScreenControl isFullScreen={isFullScreen} onToggle={toggleFullScreen} />
				</div>
			</div>
		</div>
	);
};

export default LiveVideo;