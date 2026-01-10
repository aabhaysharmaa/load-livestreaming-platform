# LOAD - Livestreaming Platform

A high-performance live streaming platform built for creators who want full control over their streams and viewers who expect quality.

## What is LOAD?

LOAD lets you stream directly to your audience using the same tools you already know—OBS, your console, or any RTMP-compatible software. We handle the heavy lifting: ingress generation, real-time chat, moderation, and a player that actually works.

Whether you're streaming gameplay from your PS5 or running a professional broadcast setup, LOAD scales with you.

## Core Features

**Streaming**

- RTMP and WHIP protocol support with up to 8K resolution
- Automatic ingress creation when you go live
- Direct console streaming (PS5, Xbox) and capture card support
- Live viewer counts and status webhooks

**Chat & Moderation**

- WebSocket-based real-time chat with per-user color assignment
- Slow mode, chat delays, and followers-only mode
- Kick, mute, and ban tools for moderators
- Toggle chat on/off per stream

**Creator Dashboard**

- Real-time analytics and stream health monitoring
- Thumbnail management and player configuration
- Full moderation controls and participant visibility

**Player Experience**

- Adaptive bitrate streaming with ultra-low latency
- Theatre mode and collapsible sidebars
- Following and recommended streams sidebar
- Clean, distraction-free viewing options

**Performance**

- Server-side rendering for fast page loads
- Loading skeletons for every major component (no blank screens)
- Horizontally scalable backend architecture
- Optimized route grouping and layouts

## Tech Stack

- **Frontend:** Next.js with SSR
- **Backend:** Node.js
- **Database:** MySQL
- **Streaming:** RTMP/WHIP (up to 8K)
- **Real-time:** WebSockets

## Getting Started

### What You'll Need

- Node.js (LTS version)
- MySQL database
- OBS or compatible streaming software
- An RTMP/WHIP-compatible streaming server with 8K support

### Installation

```bash
git clone https://github.com/your-username/LOAD.git
cd LOAD
npm install
```

### Configuration

Create a `.env` file in the root directory:

```env
DATABASE_URL=mysql://user:password@localhost:3306/LOAD
STREAMING_SERVER_URL=your-streaming-server
WEBSOCKET_PORT=3001
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the platform.

### Setting Up Your First Stream

1. Create an account and navigate to your creator dashboard
2. Click "Go Live" to generate your stream key and ingress URL
3. Add the RTMP URL and stream key to OBS (or your console streaming settings)
4. Configure your stream title, thumbnail, and chat settings
5. Hit "Start Streaming" in OBS

Your stream will appear live on LOAD within seconds.

## Console Streaming

**PS5/Xbox Setup:**

1. Go to your console's broadcast settings
2. Select "Custom RTMP Server"
3. Enter your LOAD RTMP URL and stream key from the dashboard
4. Start streaming—no capture card needed

**Capture Card Setup:**

1. Connect your console to your capture card
2. Add the capture card as a video source in OBS
3. Stream to LOAD using your RTMP credentials

## Architecture & System Design

For in-depth system design, architecture decisions, and technical deep dives, [check out the full case study here](YOUR_PORTFOLIO_URL_HERE).

## Why This Is Hard

Building LOAD required solving several non-trivial problems:

- Managing real-time state consistency between live streams, chat, and viewer counts
- Handling RTMP/WHIP stream lifecycles and syncing external streaming events via webhooks
- Ensuring low-latency chat and moderation actions without page refreshes
- Combining server-side rendering with real-time WebSocket updates
- Designing creator tools that react instantly to stream state changes

This is not a CRUD application—LOAD is an event-driven, real-time system.

## Contributing

We're not accepting contributions right now, but feel free to fork and adapt for your own use.

## License

MIT License - do what you want with it.

## Support

For issues or questions, open a GitHub issue or check the docs at [your-docs-url].

---

Built for creators who care about performance and viewers who expect quality.
