import laptopFrame from '../assets/images/laptop.webp'
import phoneFrame from '../assets/images/mobile.avif'

// Geometry below is measured from the supplied frame images (px in the source bitmap):
// laptop.webp 350x350 with a transparent screen hole; mobile.avif 740x711 with an opaque white screen,
// so the phone shot is laid over the white area and the bitmap is cropped to the phone body.

function Placeholder({ label }: { label: string }) {
  return (
    <div
      className="flex h-full w-full items-center justify-center bg-plate p-4 text-center font-mono text-[11px] uppercase tracking-widest text-ink/70"
      style={{ backgroundImage: 'repeating-linear-gradient(135deg, transparent 0 10px, rgba(155,166,133,.35) 10px 11px)' }}
    >
      {label}
    </div>
  )
}

interface FrameProps {
  src?: string
  alt: string
  className?: string
}

function Shot({ src, alt }: { src?: string; alt: string }) {
  return src ? (
    <img src={src} alt={alt} className="h-full w-full object-cover object-top" loading="lazy" />
  ) : (
    <Placeholder label="Screenshots coming soon" />
  )
}

// visible laptop bounds in the bitmap: x 41..309, y 89..261 (268x172); screen hole x 78..272, y 97..203
export function LaptopFrame({ src, alt, className = '' }: FrameProps) {
  return (
    <div className={`relative aspect-[268/172] overflow-hidden ${className}`}>
      <div className="absolute overflow-hidden bg-paper" style={{ left: '13.81%', top: '4.65%', width: '72.39%', height: '61.63%' }}>
        <Shot src={src} alt={alt} />
      </div>
      <img
        src={laptopFrame}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute max-w-none select-none"
        style={{ width: '130.6%', height: '203.5%', left: '-15.3%', top: '-51.74%' }}
      />
    </div>
  )
}

// phone body in the bitmap: x 211..525, y 66..651 (315x586); screen x 227..509, y 80..637
export function PhoneFrame({ src, alt, className = '' }: FrameProps) {
  return (
    <div className={`relative aspect-[315/586] overflow-hidden ${className}`} style={{ borderRadius: '12.7% / 6.8%' }}>
      <img
        src={phoneFrame}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute max-w-none select-none"
        style={{ width: '234.9%', height: '121.3%', left: '-67%', top: '-11.26%' }}
      />
      <div className="absolute overflow-hidden bg-paper" style={{ left: '5.08%', top: '2.4%', width: '89.5%', height: '95%', borderRadius: '8% / 3.8%' }}>
        <Shot src={src} alt={alt} />
      </div>
      {/* notch redrawn above the shot, matching the one baked into the frame bitmap */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bg-[#111]"
        style={{ top: 0, width: '60%', height: '6.4%', borderRadius: '0 0 14px 14px' }}
        aria-hidden="true"
      />
    </div>
  )
}
