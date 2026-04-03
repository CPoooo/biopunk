(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/BiopunkWorld.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BiopunkWorld
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const NARRATIVE_LINES = [
    "YOU ARE AWAKE.",
    "the mycelium grid is online.",
    "2187. the cities breathe.",
    "organic steel. living concrete. pulsing neon veins.",
    "your neurons are being read.",
    "the architecture folds itself to greet you.",
    "seven billion minds merged into the HIVE.",
    "flying caravan units report: sky is clear.",
    "biopunk is not an aesthetic. it is an organism.",
    "the buildings remember when they were trees.",
    "synthetic biology reigns supreme.",
    "you are made of the same code as everything else.",
    "the fog is alive. it knows your name.",
    "corporations grew into ecosystems.",
    "this city is a single living cell.",
    "your blood is part of the network now.",
    "do you feel the pulse?",
    "every surface is a screen. every screen is a window.",
    "the sky has been engineered for beauty.",
    "you cannot leave. you do not want to."
];
function BiopunkWorld() {
    _s();
    const mountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rendererRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sceneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cameraRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const clockRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clock"]());
    const audioCtxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gainNodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [started, setStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentLine, setCurrentLine] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [lineIndex, setLineIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [glitching, setGlitching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Narrative cycling
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BiopunkWorld.useEffect": ()=>{
            if (!started) return;
            const cycle = {
                "BiopunkWorld.useEffect.cycle": ()=>{
                    const idx = Math.floor(Math.random() * NARRATIVE_LINES.length);
                    setCurrentLine(NARRATIVE_LINES[idx]);
                    setGlitching(true);
                    setTimeout({
                        "BiopunkWorld.useEffect.cycle": ()=>setGlitching(false)
                    }["BiopunkWorld.useEffect.cycle"], 300);
                }
            }["BiopunkWorld.useEffect.cycle"];
            cycle();
            const interval = setInterval(cycle, 3800);
            return ({
                "BiopunkWorld.useEffect": ()=>clearInterval(interval)
            })["BiopunkWorld.useEffect"];
        }
    }["BiopunkWorld.useEffect"], [
        started
    ]);
    // Audio engine
    const startAudio = (ctx)=>{
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.18, ctx.currentTime);
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;
        // Drone bass layer
        const createDrone = (freq, detune, vol)=>{
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            const filter = ctx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(400, ctx.currentTime);
            filter.frequency.linearRampToValueAtTime(900, ctx.currentTime + 8);
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(freq, ctx.currentTime);
            osc.detune.setValueAtTime(detune, ctx.currentTime);
            gain.gain.setValueAtTime(vol, ctx.currentTime);
            osc.connect(filter);
            filter.connect(gain);
            gain.connect(masterGain);
            osc.start();
            // LFO mod
            const lfo = ctx.createOscillator();
            const lfoGain = ctx.createGain();
            lfo.frequency.setValueAtTime(0.07 + Math.random() * 0.05, ctx.currentTime);
            lfoGain.gain.setValueAtTime(12, ctx.currentTime);
            lfo.connect(lfoGain);
            lfoGain.connect(osc.frequency);
            lfo.start();
        };
        createDrone(40, 0, 0.6);
        createDrone(40, 7, 0.4);
        createDrone(80, -5, 0.3);
        createDrone(120, 3, 0.2);
        // Atmospheric pulse
        const pulse = ()=>{
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            const filter = ctx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.setValueAtTime(Math.random() * 1200 + 300, ctx.currentTime);
            filter.Q.setValueAtTime(8, ctx.currentTime);
            osc.type = 'sine';
            osc.frequency.setValueAtTime(Math.random() * 200 + 60, ctx.currentTime);
            gain.gain.setValueAtTime(0, ctx.currentTime);
            gain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + 0.3);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2.5);
            osc.connect(filter);
            filter.connect(gain);
            gain.connect(masterGain);
            osc.start();
            osc.stop(ctx.currentTime + 2.5);
            setTimeout(pulse, Math.random() * 2000 + 800);
        };
        pulse();
        // High shimmer
        const shimmer = ()=>{
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(Math.random() * 2000 + 1000, ctx.currentTime);
            gain.gain.setValueAtTime(0, ctx.currentTime);
            gain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 0.1);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
            osc.connect(gain);
            gain.connect(masterGain);
            osc.start();
            osc.stop(ctx.currentTime + 0.8);
            setTimeout(shimmer, Math.random() * 500 + 200);
        };
        shimmer();
    };
    const handleStart = ()=>{
        setStarted(true);
        const ctx = new AudioContext();
        audioCtxRef.current = ctx;
        startAudio(ctx);
    };
    // Three.js scene
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BiopunkWorld.useEffect": ()=>{
            if (!started || !mountRef.current) return;
            const W = window.innerWidth;
            const H = window.innerHeight;
            // Renderer
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                antialias: true,
                alpha: false
            });
            renderer.setSize(W, H);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.toneMapping = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACESFilmicToneMapping"];
            renderer.toneMappingExposure = 1.2;
            mountRef.current.appendChild(renderer.domElement);
            rendererRef.current = renderer;
            // Scene
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            scene.background = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x000308);
            scene.fog = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FogExp2"](0x000a05, 0.018);
            sceneRef.current = scene;
            // Camera
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](75, W / H, 0.1, 1000);
            camera.position.set(0, 8, 0);
            cameraRef.current = camera;
            // ── LIGHTING ──
            const ambientLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmbientLight"](0x001a0a, 2);
            scene.add(ambientLight);
            const greenLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointLight"](0x00ff88, 80, 120);
            greenLight.position.set(0, 30, 0);
            scene.add(greenLight);
            const purpleLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointLight"](0xcc00ff, 60, 100);
            purpleLight.position.set(50, 20, -50);
            scene.add(purpleLight);
            const cyanLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointLight"](0x00ffff, 40, 80);
            cyanLight.position.set(-50, 15, 30);
            scene.add(cyanLight);
            // ── GROUND PLANE ──
            const groundGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](600, 600, 120, 120);
            const groundMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: 0x001a08,
                roughness: 0.9,
                metalness: 0.2,
                wireframe: false
            });
            // Organic displacement via vertex manipulation
            const posArr = groundGeo.attributes.position.array;
            for(let i = 0; i < posArr.length; i += 3){
                const x = posArr[i];
                const z = posArr[i + 2];
                posArr[i + 1] = Math.sin(x * 0.05) * Math.cos(z * 0.05) * 3 + Math.sin(x * 0.12 + 1) * Math.cos(z * 0.09) * 1.5 + Math.random() * 0.3;
            }
            groundGeo.computeVertexNormals();
            const ground = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](groundGeo, groundMat);
            ground.rotation.x = -Math.PI / 2;
            ground.position.y = -2;
            scene.add(ground);
            // ── BIOPUNK TOWERS ──
            const towers = [];
            const towerPositions = [];
            for(let i = 0; i < 60; i++){
                const angle = Math.random() * Math.PI * 2;
                const radius = 20 + Math.random() * 120;
                const x = Math.cos(angle) * radius;
                const z = Math.sin(angle) * radius;
                const height = 8 + Math.random() * 60;
                const width = 1.5 + Math.random() * 5;
                towerPositions.push([
                    x,
                    height,
                    z,
                    width,
                    height
                ]);
                // Organic tower shape using CylinderGeometry with radial variation
                const segments = 6 + Math.floor(Math.random() * 4);
                const geo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](width * (0.1 + Math.random() * 0.4), width, height, segments, 8, false);
                // Warp tower vertices
                const verts = geo.attributes.position.array;
                for(let j = 0; j < verts.length; j += 3){
                    const y = verts[j + 1];
                    const t = (y + height / 2) / height;
                    verts[j] += Math.sin(t * 8 + i) * width * 0.15;
                    verts[j + 2] += Math.cos(t * 7 + i * 0.7) * width * 0.15;
                }
                geo.computeVertexNormals();
                const hue = Math.random() > 0.5 ? 0x002a12 : 0x0a0020;
                const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                    color: hue,
                    roughness: 0.3,
                    metalness: 0.8,
                    emissive: Math.random() > 0.6 ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x003311) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x110033),
                    emissiveIntensity: 0.3
                });
                const tower = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geo, mat);
                tower.position.set(x, height / 2 - 2, z);
                scene.add(tower);
                towers.push(tower);
                // Glowing window bands
                const bandCount = Math.floor(Math.random() * 6) + 2;
                for(let b = 0; b < bandCount; b++){
                    const bandGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TorusGeometry"](width * 0.6, 0.08, 6, segments);
                    const bandColor = Math.random() > 0.5 ? 0x00ff88 : Math.random() > 0.5 ? 0xcc00ff : 0x00ffff;
                    const bandMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                        color: bandColor
                    });
                    const band = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](bandGeo, bandMat);
                    band.position.set(x, -2 + (b + 1) * (height / (bandCount + 1)), z);
                    band.rotation.x = Math.PI / 2;
                    scene.add(band);
                }
            }
            // ── FLYING VEHICLES ──
            const vehicles = [];
            for(let i = 0; i < 40; i++){
                const group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
                // Body
                const bodyGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CapsuleGeometry"](0.25, 1.2, 4, 8);
                const bodyMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                    color: 0x111111,
                    metalness: 0.9,
                    roughness: 0.1,
                    emissive: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](Math.random() > 0.5 ? 0x003311 : 0x220033),
                    emissiveIntensity: 0.5
                });
                const body = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](bodyGeo, bodyMat);
                body.rotation.z = Math.PI / 2;
                group.add(body);
                // Headlights
                const hlGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](0.08, 6, 6);
                const hlMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                    color: Math.random() > 0.5 ? 0x00ffaa : 0xff44ff
                });
                [
                    -0.15,
                    0.15
                ].forEach({
                    "BiopunkWorld.useEffect": (ox)=>{
                        const hl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](hlGeo, hlMat);
                        hl.position.set(0.65, ox, 0);
                        group.add(hl);
                    }
                }["BiopunkWorld.useEffect"]);
                const radius = 15 + Math.random() * 90;
                const height = 10 + Math.random() * 50;
                const angle = Math.random() * Math.PI * 2;
                const speed = (0.002 + Math.random() * 0.006) * (Math.random() > 0.5 ? 1 : -1);
                group.position.set(Math.cos(angle) * radius, height, Math.sin(angle) * radius);
                scene.add(group);
                vehicles.push({
                    mesh: group,
                    speed,
                    radius,
                    angle,
                    height,
                    wobble: Math.random() * Math.PI * 2
                });
            }
            // ── ORGANIC TENDRILS / MYCELIUM ──
            const tendrils = [];
            for(let i = 0; i < 80; i++){
                const points = [];
                const startX = (Math.random() - 0.5) * 200;
                const startZ = (Math.random() - 0.5) * 200;
                let x = startX, y = -2, z = startZ;
                for(let j = 0; j < 20; j++){
                    x += (Math.random() - 0.5) * 8;
                    y += Math.random() * 4;
                    z += (Math.random() - 0.5) * 8;
                    points.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](x, y, z));
                }
                const geo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]().setFromPoints(points);
                const color = Math.random() > 0.5 ? 0x00ff66 : 0x9900ff;
                const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                    color,
                    transparent: true,
                    opacity: 0.4
                });
                const line = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"](geo, mat);
                scene.add(line);
                tendrils.push(line);
            }
            // ── FLOATING ORB CLUSTERS (bio cells) ──
            const orbs = [];
            for(let i = 0; i < 150; i++){
                const r = 0.2 + Math.random() * 1.2;
                const geo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcosahedronGeometry"](r, Math.random() > 0.5 ? 1 : 2);
                const color = [
                    0x00ff88,
                    0xcc00ff,
                    0x00ccff,
                    0xff0066
                ][Math.floor(Math.random() * 4)];
                const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                    color,
                    emissive: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](color),
                    emissiveIntensity: 0.6,
                    transparent: true,
                    opacity: 0.5 + Math.random() * 0.5,
                    roughness: 0.1,
                    metalness: 0.3
                });
                const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geo, mat);
                const px = (Math.random() - 0.5) * 180;
                const py = 2 + Math.random() * 50;
                const pz = (Math.random() - 0.5) * 180;
                mesh.position.set(px, py, pz);
                scene.add(mesh);
                orbs.push({
                    mesh,
                    vel: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]((Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.01, (Math.random() - 0.5) * 0.02),
                    originalPos: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](px, py, pz)
                });
            }
            // ── PARTICLE FIELD (spores) ──
            const particleCount = 4000;
            const partGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
            const partPositions = new Float32Array(particleCount * 3);
            const partColors = new Float32Array(particleCount * 3);
            for(let i = 0; i < particleCount; i++){
                partPositions[i * 3] = (Math.random() - 0.5) * 300;
                partPositions[i * 3 + 1] = Math.random() * 80;
                partPositions[i * 3 + 2] = (Math.random() - 0.5) * 300;
                const c = Math.random();
                if (c < 0.4) {
                    partColors[i * 3] = 0;
                    partColors[i * 3 + 1] = 1;
                    partColors[i * 3 + 2] = 0.5;
                } else if (c < 0.7) {
                    partColors[i * 3] = 0.8;
                    partColors[i * 3 + 1] = 0;
                    partColors[i * 3 + 2] = 1;
                } else {
                    partColors[i * 3] = 0;
                    partColors[i * 3 + 1] = 0.8;
                    partColors[i * 3 + 2] = 1;
                }
            }
            partGeo.setAttribute('position', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](partPositions, 3));
            partGeo.setAttribute('color', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](partColors, 3));
            const partMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointsMaterial"]({
                size: 0.15,
                vertexColors: true,
                transparent: true,
                opacity: 0.7,
                sizeAttenuation: true
            });
            const particles = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points"](partGeo, partMat);
            scene.add(particles);
            // ── DNA HELIX STRUCTURES ──
            const helixes = [];
            for(let h = 0; h < 8; h++){
                const group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
                const hx = (Math.random() - 0.5) * 100;
                const hz = (Math.random() - 0.5) * 100;
                const helixHeight = 20 + Math.random() * 30;
                for(let s = 0; s < 2; s++){
                    for(let t = 0; t < 40; t++){
                        const angle = t / 40 * Math.PI * 8 + s * Math.PI;
                        const y = t / 40 * helixHeight - helixHeight / 2;
                        const r = 1.5;
                        const geo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](0.18, 6, 6);
                        const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                            color: s === 0 ? 0x00ff88 : 0xcc00ff
                        });
                        const sphere = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geo, mat);
                        sphere.position.set(Math.cos(angle) * r, y, Math.sin(angle) * r);
                        group.add(sphere);
                    }
                }
                // Rungs
                for(let t = 0; t < 20; t++){
                    const angle = t / 20 * Math.PI * 8;
                    const y = t / 20 * helixHeight - helixHeight / 2;
                    const pts = [
                        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](Math.cos(angle) * 1.5, y, Math.sin(angle) * 1.5),
                        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](Math.cos(angle + Math.PI) * 1.5, y, Math.sin(angle + Math.PI) * 1.5)
                    ];
                    const rungGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]().setFromPoints(pts);
                    const rungMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                        color: 0x00ffff,
                        transparent: true,
                        opacity: 0.5
                    });
                    group.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"](rungGeo, rungMat));
                }
                group.position.set(hx, helixHeight / 2 - 2, hz);
                scene.add(group);
                helixes.push(group);
            }
            // ── CENTRAL MEGA STRUCTURE (folding geometry) ──
            const megaGeos = [];
            const megaShapes = [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OctahedronGeometry"](4, 2),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DodecahedronGeometry"](3, 1),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcosahedronGeometry"](3.5, 2)
            ];
            megaShapes.forEach({
                "BiopunkWorld.useEffect": (geo, i)=>{
                    const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                        color: 0x001a08,
                        emissive: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](i === 0 ? 0x003311 : i === 1 ? 0x220033 : 0x003333),
                        emissiveIntensity: 0.8,
                        wireframe: i === 2,
                        roughness: 0.2,
                        metalness: 0.9,
                        transparent: true,
                        opacity: i === 2 ? 0.4 : 0.9
                    });
                    const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geo, mat);
                    mesh.position.set(0, 15, -10);
                    scene.add(mesh);
                    megaGeos.push(mesh);
                }
            }["BiopunkWorld.useEffect"]);
            // ── ANIMATION LOOP ──
            let t = 0;
            const camAngle = {
                val: 0
            };
            const camHeight = {
                val: 8
            };
            const camRadius = {
                val: 18
            };
            const foldPhase = {
                val: 0
            };
            const animate = {
                "BiopunkWorld.useEffect.animate": ()=>{
                    frameRef.current = requestAnimationFrame(animate);
                    const delta = clockRef.current.getDelta();
                    t += delta;
                    // Camera orbit with psychedelic drift
                    camAngle.val += 0.003 + Math.sin(t * 0.1) * 0.001;
                    camHeight.val = 8 + Math.sin(t * 0.07) * 5 + Math.sin(t * 0.13) * 3;
                    camRadius.val = 18 + Math.sin(t * 0.05) * 8 + Math.cos(t * 0.09) * 4;
                    camera.position.x = Math.cos(camAngle.val) * camRadius.val;
                    camera.position.z = Math.sin(camAngle.val) * camRadius.val;
                    camera.position.y = camHeight.val;
                    camera.lookAt(Math.sin(t * 0.08) * 8, 12 + Math.sin(t * 0.12) * 4, Math.cos(t * 0.06) * 8);
                    // Psychedelic FOV breathing
                    camera.fov = 75 + Math.sin(t * 0.3) * 8 + Math.sin(t * 0.7) * 3;
                    camera.updateProjectionMatrix();
                    // Vehicles orbit
                    vehicles.forEach({
                        "BiopunkWorld.useEffect.animate": (v, i)=>{
                            v.angle += v.speed;
                            v.mesh.position.x = Math.cos(v.angle) * v.radius;
                            v.mesh.position.z = Math.sin(v.angle) * v.radius;
                            v.mesh.position.y = v.height + Math.sin(t * 0.8 + v.wobble) * 1.5;
                            v.mesh.rotation.y = -v.angle + Math.PI / 2;
                        }
                    }["BiopunkWorld.useEffect.animate"]);
                    // Orbs drift
                    orbs.forEach({
                        "BiopunkWorld.useEffect.animate": (orb, i)=>{
                            orb.mesh.position.x = orb.originalPos.x + Math.sin(t * 0.3 + i * 0.5) * 3;
                            orb.mesh.position.y = orb.originalPos.y + Math.sin(t * 0.2 + i * 0.7) * 2;
                            orb.mesh.position.z = orb.originalPos.z + Math.cos(t * 0.25 + i * 0.6) * 3;
                            orb.mesh.rotation.x += 0.01;
                            orb.mesh.rotation.y += 0.007;
                            orb.mesh.material.emissiveIntensity = 0.4 + Math.sin(t * 2 + i) * 0.3;
                        }
                    }["BiopunkWorld.useEffect.animate"]);
                    // Tendrils shimmer opacity
                    tendrils.forEach({
                        "BiopunkWorld.useEffect.animate": (t2, i)=>{
                            t2.material.opacity = 0.2 + Math.sin(t * 1.5 + i * 0.3) * 0.2;
                        }
                    }["BiopunkWorld.useEffect.animate"]);
                    // Particles drift upward and rotate
                    particles.rotation.y += 0.0003;
                    const ppos = partGeo.attributes.position.array;
                    for(let i = 0; i < particleCount; i++){
                        ppos[i * 3 + 1] += 0.02 + Math.sin(t + i * 0.1) * 0.01;
                        if (ppos[i * 3 + 1] > 80) ppos[i * 3 + 1] = 0;
                    }
                    partGeo.attributes.position.needsUpdate = true;
                    // DNA helixes rotate and bob
                    helixes.forEach({
                        "BiopunkWorld.useEffect.animate": (h, i)=>{
                            h.rotation.y += 0.008 + i * 0.001;
                            h.position.y += Math.sin(t * 0.5 + i) * 0.01;
                        }
                    }["BiopunkWorld.useEffect.animate"]);
                    // Mega structure folding
                    foldPhase.val += delta * 0.4;
                    megaGeos.forEach({
                        "BiopunkWorld.useEffect.animate": (mesh, i)=>{
                            mesh.rotation.x = Math.sin(foldPhase.val * 0.7 + i * 1.2) * Math.PI;
                            mesh.rotation.y = foldPhase.val * (0.3 + i * 0.15);
                            mesh.rotation.z = Math.cos(foldPhase.val * 0.5 + i) * 0.5;
                            const s = 1 + Math.sin(foldPhase.val * 1.2 + i * 0.8) * 0.3;
                            mesh.scale.setScalar(s);
                            mesh.material.emissiveIntensity = 0.5 + Math.sin(foldPhase.val * 2 + i) * 0.4;
                        }
                    }["BiopunkWorld.useEffect.animate"]);
                    // Tower pulse
                    towers.forEach({
                        "BiopunkWorld.useEffect.animate": (tower, i)=>{
                            const mat = tower.material;
                            mat.emissiveIntensity = 0.15 + Math.sin(t * 1.5 + i * 0.4) * 0.15;
                        }
                    }["BiopunkWorld.useEffect.animate"]);
                    // Ground wave
                    const gpos = groundGeo.attributes.position.array;
                    for(let i = 0; i < gpos.length; i += 3){
                        const x = gpos[i];
                        const z = gpos[i + 2];
                        gpos[i + 1] = Math.sin(x * 0.05 + t * 0.3) * Math.cos(z * 0.05 + t * 0.2) * 3 + Math.sin(x * 0.12 + t * 0.5 + 1) * Math.cos(z * 0.09 - t * 0.4) * 1.5;
                    }
                    groundGeo.computeVertexNormals();
                    groundGeo.attributes.position.needsUpdate = true;
                    // Dynamic light colors
                    greenLight.intensity = 60 + Math.sin(t * 0.8) * 25;
                    purpleLight.intensity = 50 + Math.sin(t * 0.6 + 1) * 20;
                    cyanLight.intensity = 35 + Math.sin(t * 1.1 + 2) * 15;
                    greenLight.position.x = Math.sin(t * 0.2) * 20;
                    greenLight.position.z = Math.cos(t * 0.15) * 20;
                    renderer.render(scene, camera);
                }
            }["BiopunkWorld.useEffect.animate"];
            animate();
            // Resize
            const onResize = {
                "BiopunkWorld.useEffect.onResize": ()=>{
                    const w = window.innerWidth;
                    const h = window.innerHeight;
                    camera.aspect = w / h;
                    camera.updateProjectionMatrix();
                    renderer.setSize(w, h);
                }
            }["BiopunkWorld.useEffect.onResize"];
            window.addEventListener('resize', onResize);
            return ({
                "BiopunkWorld.useEffect": ()=>{
                    window.removeEventListener('resize', onResize);
                    cancelAnimationFrame(frameRef.current);
                    renderer.dispose();
                    if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
                        mountRef.current.removeChild(renderer.domElement);
                    }
                }
            })["BiopunkWorld.useEffect"];
        }
    }["BiopunkWorld.useEffect"], [
        started
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            inset: 0,
            background: '#000308',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: mountRef,
                style: {
                    position: 'absolute',
                    inset: 0
                }
            }, void 0, false, {
                fileName: "[project]/app/components/BiopunkWorld.tsx",
                lineNumber: 566,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    inset: 0,
                    pointerEvents: 'none',
                    zIndex: 2,
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,100,0.015) 2px, rgba(0,255,100,0.015) 4px)'
                }
            }, void 0, false, {
                fileName: "[project]/app/components/BiopunkWorld.tsx",
                lineNumber: 569,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    inset: 0,
                    pointerEvents: 'none',
                    zIndex: 3,
                    background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.85) 100%)'
                }
            }, void 0, false, {
                fileName: "[project]/app/components/BiopunkWorld.tsx",
                lineNumber: 575,
                columnNumber: 7
            }, this),
            !started && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    inset: 0,
                    zIndex: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'radial-gradient(ellipse at center, #000a04 0%, #000000 100%)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: '"Courier New", monospace',
                            color: '#00ff88',
                            fontSize: 'clamp(2rem, 6vw, 5rem)',
                            letterSpacing: '0.3em',
                            textAlign: 'center',
                            textShadow: '0 0 30px #00ff88, 0 0 60px #00ff44',
                            marginBottom: '0.5em',
                            animation: 'pulseTitle 2s ease-in-out infinite'
                        },
                        children: "BIOPUNK"
                    }, void 0, false, {
                        fileName: "[project]/app/components/BiopunkWorld.tsx",
                        lineNumber: 586,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: '"Courier New", monospace',
                            color: '#cc00ff',
                            fontSize: 'clamp(0.8rem, 2vw, 1.4rem)',
                            letterSpacing: '0.5em',
                            textAlign: 'center',
                            textShadow: '0 0 20px #cc00ff',
                            marginBottom: '3em'
                        },
                        children: "2 1 8 7 · A . D ."
                    }, void 0, false, {
                        fileName: "[project]/app/components/BiopunkWorld.tsx",
                        lineNumber: 596,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleStart,
                        style: {
                            fontFamily: '"Courier New", monospace',
                            background: 'transparent',
                            border: '2px solid #00ff88',
                            color: '#00ff88',
                            fontSize: '1.1rem',
                            letterSpacing: '0.4em',
                            padding: '1em 3em',
                            cursor: 'pointer',
                            textShadow: '0 0 10px #00ff88',
                            boxShadow: '0 0 20px #00ff8844, inset 0 0 20px #00ff8811',
                            transition: 'all 0.3s ease'
                        },
                        onMouseEnter: (e)=>{
                            e.target.style.background = '#00ff8822';
                            e.target.style.boxShadow = '0 0 40px #00ff88aa, inset 0 0 40px #00ff8822';
                        },
                        onMouseLeave: (e)=>{
                            e.target.style.background = 'transparent';
                            e.target.style.boxShadow = '0 0 20px #00ff8844, inset 0 0 20px #00ff8811';
                        },
                        children: "JACK IN"
                    }, void 0, false, {
                        fileName: "[project]/app/components/BiopunkWorld.tsx",
                        lineNumber: 605,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: '"Courier New", monospace',
                            color: '#336644',
                            fontSize: '0.7rem',
                            letterSpacing: '0.3em',
                            marginTop: '2em'
                        },
                        children: "[ AUDIO + VISUALS WILL ENGAGE ]"
                    }, void 0, false, {
                        fileName: "[project]/app/components/BiopunkWorld.tsx",
                        lineNumber: 631,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/BiopunkWorld.tsx",
                lineNumber: 581,
                columnNumber: 9
            }, this),
            started && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    bottom: '8vh',
                    left: 0,
                    right: 0,
                    zIndex: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pointerEvents: 'none'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: '"Courier New", monospace',
                            color: glitching ? '#ff00ff' : '#00ff88',
                            fontSize: 'clamp(1rem, 3vw, 2.2rem)',
                            letterSpacing: '0.2em',
                            textAlign: 'center',
                            textShadow: glitching ? '2px 0 #ff0000, -2px 0 #00ffff, 0 0 30px #ff00ff' : '0 0 20px #00ff88, 0 0 40px #00ff4488',
                            maxWidth: '80vw',
                            padding: '0.5em 1em',
                            transform: glitching ? `translateX(${(Math.random() - 0.5) * 8}px)` : 'none',
                            transition: 'color 0.1s, text-shadow 0.1s',
                            filter: glitching ? 'blur(0.5px)' : 'none'
                        },
                        children: currentLine
                    }, void 0, false, {
                        fileName: "[project]/app/components/BiopunkWorld.tsx",
                        lineNumber: 648,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '40vw',
                            height: '1px',
                            marginTop: '1em',
                            background: 'linear-gradient(90deg, transparent, #00ff88, #cc00ff, transparent)',
                            opacity: 0.5
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/components/BiopunkWorld.tsx",
                        lineNumber: 665,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/BiopunkWorld.tsx",
                lineNumber: 643,
                columnNumber: 9
            }, this),
            started && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'fixed',
                            top: '2vh',
                            left: '2vw',
                            zIndex: 10,
                            pointerEvents: 'none',
                            fontFamily: '"Courier New", monospace',
                            color: '#00ff8866',
                            fontSize: '0.65rem',
                            letterSpacing: '0.2em',
                            lineHeight: 2
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "SYS:: BIOPUNK_OS v7.3.1"
                            }, void 0, false, {
                                fileName: "[project]/app/components/BiopunkWorld.tsx",
                                lineNumber: 681,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "NODE:: MYCELIUM_GRID_ACTIVE"
                            }, void 0, false, {
                                fileName: "[project]/app/components/BiopunkWorld.tsx",
                                lineNumber: 682,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "UPLINK:: ",
                                    Math.floor(Date.now() / 1000) % 99999
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/BiopunkWorld.tsx",
                                lineNumber: 683,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/BiopunkWorld.tsx",
                        lineNumber: 676,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'fixed',
                            top: '2vh',
                            right: '2vw',
                            zIndex: 10,
                            pointerEvents: 'none',
                            fontFamily: '"Courier New", monospace',
                            color: '#cc00ff66',
                            fontSize: '0.65rem',
                            letterSpacing: '0.2em',
                            lineHeight: 2,
                            textAlign: 'right'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "HIVE:: ONLINE"
                            }, void 0, false, {
                                fileName: "[project]/app/components/BiopunkWorld.tsx",
                                lineNumber: 690,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "BIO_SYNC:: 98.7%"
                            }, void 0, false, {
                                fileName: "[project]/app/components/BiopunkWorld.tsx",
                                lineNumber: 691,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "CITY_PULSE:: NOMINAL"
                            }, void 0, false, {
                                fileName: "[project]/app/components/BiopunkWorld.tsx",
                                lineNumber: 692,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/BiopunkWorld.tsx",
                        lineNumber: 685,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes pulseTitle {
          0%, 100% { opacity: 1; text-shadow: 0 0 30px #00ff88, 0 0 60px #00ff44; }
          50% { opacity: 0.8; text-shadow: 0 0 60px #00ff88, 0 0 120px #00ff44, 0 0 200px #00ff22; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/components/BiopunkWorld.tsx",
                lineNumber: 697,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/BiopunkWorld.tsx",
        lineNumber: 565,
        columnNumber: 5
    }, this);
}
_s(BiopunkWorld, "FwFAl4j/P1QTRVqOC7xBGmzzfnw=");
_c = BiopunkWorld;
var _c;
__turbopack_context__.k.register(_c, "BiopunkWorld");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_components_BiopunkWorld_tsx_0n4txo1._.js.map