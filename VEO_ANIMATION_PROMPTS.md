# 🎬 Google Veo 2 / Video AI Generation Prompts for DevOps AWS Cloud Portfolio

Use these prompts in **Google Veo 2**, **Runway Gen-3**, **Kling 1.5/3.0**, or **Sora** to generate seamless 1080p / 4K 16:9 `.mp4` video clips for Sanket Chaudhari's 3D DevOps Portfolio.

---

## 📁 Destination Directory for Your Generated `.mp4` Files
Once generated, drop the 5 video files directly into:
```
d:\Ai Agent\portfoliio sanket V2\public\scenes\
```

Naming convention:
1. `scene-1-hero-aws-core.mp4`
2. `scene-2-pipeline-conduit.mp4`
3. `scene-3-vpc-global-mesh.mp4`
4. `scene-4-cloudwatch-hud.mp4`
5. `scene-5-production-portal.mp4`

---

## 🎥 Scene 1: AWS Cloud Core & EC2 Compute Fleet (Hero Section)

### Target File: `public/scenes/scene-1-hero-aws-core.mp4`
- **Duration:** 4–6 seconds
- **Aspect Ratio:** 16:9 (1920x1080 or 4K)
- **Frame Rate:** 24fps or 30fps
- **Style:** Photorealistic Sci-Fi Octane 3D Render, Cinematic Space Datacenter

### 📝 Google Veo / Video Prompt:
> **Prompt:**  
> `Cinematic forward camera glide through an epic futuristic AWS multi-region cloud datacenter suspended in deep dark cosmic space (#090D16). At the center, a monumental glowing cyan and electric blue reactor core spins slowly with dual glowing orbital rings. Floating around the core are cybernetic server blade skyscrapers labeled EC2, rotating cylindrical disc storage towers labeled S3, and glowing neon cyan fiber-optic data channels with traveling luminous data packets. Volumetric lighting, anamorphic lens flares, ultra-crisp 8k octane render, smooth steadycam forward movement, deep dark atmospheric mood.`

### 💡 Negative Prompt:
> `blurry, jitter, low resolution, oversaturated amber, orange tints, distortion, text watermark, human face, cartoonish, 2D flat.`

---

## 🎥 Scene 2: Automated CI/CD Pipeline & Quality Gate (Pipeline Section)

### Target File: `public/scenes/scene-2-pipeline-conduit.mp4`
- **Duration:** 4–6 seconds
- **Aspect Ratio:** 16:9
- **Style:** Futuristic Cybernetic Pipeline Tunnel, Neon Data Highway

### 📝 Google Veo / Video Prompt:
> **Prompt:**  
> `Smooth first-person camera flight straight through a high-tech subterranean DevOps CI/CD pipeline conduit. The metallic dark corridor floor reflects streaming cyan, electric blue, and emerald green fiber-optic laser data rails. Holographic Docker container cubes and geometric Kubernetes pod structures glide along the data rails. Ahead, the camera flies through a glowing Jenkins declarative automation gate where vibrant green laser quality scanners (SonarQube) sweep over passing code containers. Volumetric fog, dark reflective carbon surfaces, seamless forward tracking shot, 8k hyper-realistic sci-fi infrastructure.`

### 💡 Negative Prompt:
> `shaky camera, stutter, orange artifacts, grainy, low-poly, pixelated, 2d elements.`

---

## 🎥 Scene 3: Planetary Multi-Region AWS VPC Peering Network (Experience Section)

### Target File: `public/scenes/scene-3-vpc-global-mesh.mp4`
- **Duration:** 4–6 seconds
- **Aspect Ratio:** 16:9
- **Style:** Planetary Orbital View, Global Cybernetic Telecommunication Mesh

### 📝 Google Veo / Video Prompt:
> **Prompt:**  
> `Cinematic orbital tracking shot slowly flying across a digital earth planet at night, showcasing a global AWS VPC cloud network. Interconnected violet, indigo, and cyan laser peering beams connect major datacenter hubs across continents (us-east-1, eu-west-1, ap-northeast-1). Floating Route 53 DNS satellites and CloudFront edge nodes emit pulsing radial waves. Deep dark starry space in background, cinematic earth curvature, glowing city telemetry grids, hyper-detailed high-tech cartography, smooth majestic camera pan.`

### 💡 Negative Prompt:
> `cloudy blur, jerky motion, low resolution, pixelated globe, cartoon.`

---

## 🎥 Scene 4: CloudWatch Telemetry & Mission Control (Skills & Observability)

### Target File: `public/scenes/scene-4-cloudwatch-hud.mp4`
- **Duration:** 4–6 seconds
- **Aspect Ratio:** 16:9
- **Style:** Mission Control Room, Multi-Layered Holographic HUD

### 📝 Google Veo / Video Prompt:
> **Prompt:**  
> `Cinematic slow dolly-in through an ultra-modern futuristic CloudWatch cloud observability mission control center. Panoramic curved wall-sized holographic glass screens display real-time live server uptime telemetry, animated RDS MySQL connection graphs, CPU performance waves in cyan and emerald, and a subtle glowing magenta alarm status matrix. Sleek dark metallic workstations with ambient LED underglow, subtle volumetric laser illumination, photorealistic reflections on polished floor, high-tech command aesthetic.`

### 💡 Negative Prompt:
> `flickering, noisy screen, human closeups, distorted UI, bad contrast.`

---

## 🎥 Scene 5: Zero-Downtime Live Production Gateway (Contact & Deployment)

### Target File: `public/scenes/scene-5-production-portal.mp4`
- **Duration:** 4–6 seconds
- **Aspect Ratio:** 16:9
- **Style:** Monumental Energy Portal Monolith, High-Energy Deployment Core

### 📝 Google Veo / Video Prompt:
> **Prompt:**  
> `Epic slow cinematic approach toward a monumental zero-downtime production deployment portal. The colossal dark cybernetic archway glows with a radiant vortex of emerald green and pure electric cyan energy. Multi-directional laser telemetry conduits feed high-velocity data beams directly into the stable swirling core. Steam and volumetric atmospheric mist rise from dark reflective titanium scaffolding. Ultra-stable high-energy sci-fi deployment gateway, majestic cinematic lighting, 8k octane quality.`

### 💡 Negative Prompt:
> `overblown whiteout, cartoon fire, orange explosions, glitch, low detail.`

---

## ⚙️ How the Portfolio Scrub Engine Works with Your Videos:
1. When you generate and place the `.mp4` files in `public/scenes/`, the portfolio's built-in **Cinematic Scrub Engine** (`src/components/three/CinematicScrollJourney.tsx`) automatically detects the video files.
2. As the visitor scrolls up or down, the engine maps the exact scroll percentage to the video's playback time (`currentTime`), creating an ultra-smooth, interactive 60fps scrubbed fly-through!
3. If any video is not yet provided, the engine displays the 8K still image with 3D mouse parallax and WebGL lighting.
