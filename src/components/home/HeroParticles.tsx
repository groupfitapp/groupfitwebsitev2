import { useEffect, useRef } from "react";
import * as THREE from "three";

const PARTICLE_COUNT = 160;
const RED = new THREE.Color("#e63946");
const WHITE = new THREE.Color("#ffffff");

export function HeroParticles() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ── Scene ──────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      65,
      mount.offsetWidth / mount.offsetHeight,
      0.1,
      200
    );
    camera.position.z = 9;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(mount.offsetWidth, mount.offsetHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── Lights ────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const redLight = new THREE.PointLight(0xe63946, 2, 30);
    redLight.position.set(6, 4, 4);
    scene.add(redLight);
    const fillLight = new THREE.PointLight(0xffffff, 0.6, 20);
    fillLight.position.set(-6, -4, 2);
    scene.add(fillLight);

    // ── Particle field ────────────────────────────────────
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 14;

      const c = Math.random() > 0.58 ? RED : WHITE;
      colors[i * 3]     = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      sizes[i] = 0.04 + Math.random() * 0.1;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color",    new THREE.BufferAttribute(colors,    3));
    particleGeo.setAttribute("size",     new THREE.BufferAttribute(sizes,     1));

    const particleMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ── Floating 3D orbs ──────────────────────────────────
    type OrbDef = { mesh: THREE.Mesh; basePos: THREE.Vector3; speed: number; amp: number };
    const orbDefs: OrbDef[] = [
      { pos: [7, 2.5, -3],   color: "#e63946", emissive: "#c8202e", r: 0.28, speed: 0.9,  amp: 0.6 },
      { pos: [-7.5, -1.5, -4], color: "#c8202e", emissive: "#e63946", r: 0.38, speed: 0.65, amp: 0.8 },
      { pos: [3.5, -3.2, -2],  color: "#ffffff", emissive: "#ffffff", r: 0.15, speed: 1.2,  amp: 0.5 },
      { pos: [-4, 3.2, -5],    color: "#e63946", emissive: "#e63946", r: 0.22, speed: 0.8,  amp: 0.7 },
      { pos: [1, 1, 1],        color: "#e63946", emissive: "#e63946", r: 0.1,  speed: 1.5,  amp: 0.3 },
    ].map((d: any) => {
      const geo = new THREE.SphereGeometry(d.r, 20, 20);
      const mat = new THREE.MeshStandardMaterial({
        color: d.color,
        emissive: d.emissive,
        emissiveIntensity: 0.8,
        roughness: 0.2,
        metalness: 0.4,
        transparent: true,
        opacity: 0.88,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(...d.pos as [number, number, number]);
      scene.add(mesh);
      return { mesh, basePos: mesh.position.clone(), speed: d.speed, amp: d.amp };
    });

    // ── Mouse parallax ───────────────────────────────────
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth  - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // ── Animation loop ───────────────────────────────────
    let raf: number;
    const clock = new THREE.Clock();

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Slowly rotate particle field
      particles.rotation.y = t * 0.018;
      particles.rotation.x = Math.sin(t * 0.011) * 0.05;

      // Parallax tilt toward mouse
      particles.rotation.y += mouseX * 0.04;
      particles.rotation.x += mouseY * 0.02;

      // Float each orb
      for (const orb of orbDefs) {
        orb.mesh.position.y = orb.basePos.y + Math.sin(t * orb.speed) * orb.amp;
        orb.mesh.position.x = orb.basePos.x + Math.cos(t * orb.speed * 0.7) * orb.amp * 0.4;
        orb.mesh.rotation.y = t * 0.5;
      }

      // Gentle camera nudge toward mouse
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.03;
      camera.position.y += (-mouseY * 0.3 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    // ── Resize ───────────────────────────────────────────
    const onResize = () => {
      const w = mount.offsetWidth;
      const h = mount.offsetHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize, { passive: true });

    // ── Cleanup ──────────────────────────────────────────
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 2 }}
      aria-hidden="true"
    />
  );
}
