import { useEffect, useRef } from 'react';

// Studio-lit OTR tire (three.js, lazy-loaded). Idles on its own; scrolling the page and dragging add spin.
export function Tire3D({ className = '' }: { className?: string }) {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    let disposed = false;
    let cleanup = () => {};

    (async () => {
      const THREE = await import('three');
      const { RoomEnvironment } = await import('three/examples/jsm/environments/RoomEnvironment.js');
      if (disposed) return;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.domElement.style.cssText = 'width:100%;height:100%;display:block;touch-action:pan-y;cursor:grab';
      el.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
      const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 50);
      camera.position.set(0, 0.3, 7.4);
      camera.lookAt(0, 0, 0);

      // Tire body: a cross-section revolved around Y (the axle).
      const profile = [
        [0.6, -0.3], [0.7, -0.355], [0.84, -0.385], [0.93, -0.37], [0.985, -0.32], [1.0, -0.24],
        [1.0, 0.24], [0.985, 0.32], [0.93, 0.37], [0.84, 0.385], [0.7, 0.355], [0.6, 0.3],
      ].map(([x, y]) => new THREE.Vector2(x, y));
      const rubber = new THREE.MeshStandardMaterial({ color: 0x141414, roughness: 0.88 });
      const body = new THREE.Mesh(new THREE.LatheGeometry(profile, 160), rubber);

      // Chevron lugs (OTR L-3 style), two staggered rows.
      const N = 34;
      const dummy = new THREE.Object3D();
      const lugs = new THREE.InstancedMesh(new THREE.BoxGeometry(0.075, 0.27, 0.11), rubber, N * 2);
      for (let i = 0; i < N * 2; i++) {
        const side = i % 2 ? 1 : -1;
        const th = ((Math.floor(i / 2) + (side > 0 ? 0.5 : 0)) / N) * Math.PI * 2;
        dummy.position.set(Math.cos(th) * 1.03, side * 0.135, Math.sin(th) * 1.03);
        dummy.rotation.set(side * 0.55, -th, 0, 'YXZ');
        dummy.updateMatrix();
        lugs.setMatrixAt(i, dummy.matrix);
      }

      // Rim: steel, red bead ring, hub and studs.
      const steel = new THREE.MeshStandardMaterial({ color: 0xbfc2c6, metalness: 1, roughness: 0.32 });
      const red = new THREE.MeshStandardMaterial({ color: 0xd71920, roughness: 0.45, metalness: 0.2 });
      const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 0.5, 96, 1, true), steel);
      const face = new THREE.Mesh(new THREE.CylinderGeometry(0.585, 0.585, 0.04, 96), steel);
      face.position.y = 0.12;
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.012, 12, 128), red);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 0.26;
      const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.24, 0.16, 48), steel);
      hub.position.y = 0.2;
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.05, 32), new THREE.MeshStandardMaterial({ color: 0x1b1b1d, metalness: 0.6, roughness: 0.4 }));
      cap.position.y = 0.29;
      const studs = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.025, 0.025, 0.08, 12), steel, 10);
      for (let i = 0; i < 10; i++) {
        const a = (i / 10) * Math.PI * 2;
        dummy.position.set(Math.cos(a) * 0.32, 0.17, Math.sin(a) * 0.32);
        dummy.rotation.set(0, 0, 0);
        dummy.updateMatrix();
        studs.setMatrixAt(i, dummy.matrix);
      }
      const holes = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.07, 0.07, 0.045, 24), new THREE.MeshStandardMaterial({ color: 0x0c0c0d, roughness: 0.9 }), 8);
      for (let i = 0; i < 8; i++) {
        const a = ((i + 0.5) / 8) * Math.PI * 2;
        dummy.position.set(Math.cos(a) * 0.46, 0.125, Math.sin(a) * 0.46);
        dummy.updateMatrix();
        holes.setMatrixAt(i, dummy.matrix);
      }

      const spin = new THREE.Group();
      spin.add(body, lugs, rim, face, ring, hub, cap, studs, holes);
      const axle = new THREE.Group();
      axle.rotation.x = Math.PI / 2;
      axle.add(spin);
      const yaw = new THREE.Group();
      yaw.rotation.y = -0.62;
      yaw.add(axle);
      scene.add(yaw);

      const key = new THREE.DirectionalLight(0xffffff, 2.2);
      key.position.set(3, 4, 5);
      const back = new THREE.DirectionalLight(0xffffff, 1.4);
      back.position.set(-4, 2, -3);
      scene.add(key, back, new THREE.AmbientLight(0xffffff, 0.15));

      const resize = () => {
        const w = el.clientWidth;
        const h = el.clientHeight;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      const ro = new ResizeObserver(resize);
      ro.observe(el);
      resize();

      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      let vel = 0;
      let lastY = window.scrollY;
      let dragX: number | null = null;
      const onScroll = () => {
        vel += (window.scrollY - lastY) * 0.004;
        lastY = window.scrollY;
      };
      const onDown = (e: PointerEvent) => {
        dragX = e.clientX;
        renderer.domElement.setPointerCapture(e.pointerId);
      };
      const onMove = (e: PointerEvent) => {
        if (dragX === null) return;
        vel += (e.clientX - dragX) * 0.01;
        dragX = e.clientX;
      };
      const onUp = () => (dragX = null);
      window.addEventListener('scroll', onScroll, { passive: true });
      renderer.domElement.addEventListener('pointerdown', onDown);
      renderer.domElement.addEventListener('pointermove', onMove);
      renderer.domElement.addEventListener('pointerup', onUp);

      let raf = 0;
      let last = performance.now();
      let onScreen = false;
      const frame = (now: number) => {
        const dt = Math.min((now - last) / 1000, 0.05);
        last = now;
        vel *= Math.pow(0.12, dt);
        spin.rotation.y -= ((reduce ? 0 : 0.35) + vel) * dt;
        yaw.rotation.y = -0.62 + (reduce ? 0 : Math.sin(now / 2500) * 0.06);
        renderer.render(scene, camera);
        raf = requestAnimationFrame(frame);
      };
      const io = new IntersectionObserver(([e]) => {
        onScreen = e.isIntersecting;
        cancelAnimationFrame(raf);
        if (onScreen) {
          last = performance.now();
          raf = requestAnimationFrame(frame);
        }
      });
      io.observe(el);

      cleanup = () => {
        cancelAnimationFrame(raf);
        io.disconnect();
        ro.disconnect();
        window.removeEventListener('scroll', onScroll);
        renderer.dispose();
        pmrem.dispose();
        renderer.domElement.remove();
      };
    })();

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return <div ref={host} className={className} aria-hidden="true" />;
}
