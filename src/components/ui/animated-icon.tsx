"use client";

import { useEffect, useRef } from "react";
import type { AnimationItem } from "lottie-web";
import {
  Award,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  FileCode2,
  FileText,
  Folder,
  GitFork,
  Home,
  Layers,
  Link,
  Mail,
  Medal,
  MessageCircle,
  Quote,
  Send,
  Share2,
  ShieldCheck,
  Star,
  UserRound,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const iconPaths = {
  approve: "/assets/wired-icons/wired-outline-37-approve-checked-simple-hover-pinch.json",
  avatar: "/assets/wired-icons/wired-outline-21-avatar-hover-jumping.json",
  chart: "/assets/wired-icons/wired-outline-3089-bar-chart-diversified-hover-pinch.json",
  cloud: "/assets/wired-icons/wired-outline-1-cloud-hover-pinch.json",
  code: "/assets/wired-icons/wired-outline-742-code-hover-pinch.json",
  consultation: "/assets/wired-icons/wired-outline-981-consultation-hover-conversation.json",
  data: "/assets/wired-icons/wired-outline-3089-bar-chart-diversified-hover-pinch.json",
  developer: "/assets/wired-icons/wired-outline-680-it-developer-hover-pinch.json",
  document: "/assets/wired-icons/wired-outline-56-document-hover-swipe.json",
  email: "/assets/wired-icons/wired-outline-1141-email-hover-rotation.json",
  emailSend: "/assets/wired-icons/wired-outline-177-envelope-send-hover-flying.json",
  folder: "/assets/wired-icons/wired-outline-120-folder-hover-adding-files.json",
  github: "/assets/wired-icons/wired-outline-2572-logo-github-hover-pinch.json",
  google: "/assets/wired-icons/wired-outline-2640-logo-circle-google-hover-pinch.json",
  home: "/assets/wired-icons/wired-outline-63-home-hover-3d-roll.json",
  layers: "/assets/wired-icons/wired-outline-12-layers-hover-slide.json",
  linkedin: "/assets/wired-icons/wired-outline-2549-logo-linkedin-hover-pinch.json",
  medal: "/assets/wired-icons/wired-outline-1780-medal-first-place-hover-pinch.json",
  privacy: "/assets/wired-icons/wired-outline-966-privacy-policy-hover-swipe.json",
  quote: "/assets/wired-icons/wired-outline-41-quotation-mark-second-hover-draw.json",
  repository: "/assets/wired-icons/wired-outline-1331-repository-hover-pinch.json",
  restApi: "/assets/wired-icons/wired-outline-1330-rest-api-hover-machine.json",
  share: "/assets/wired-icons/wired-outline-751-share-hover-pointing.json",
  star: "/assets/wired-icons/wired-outline-237-star-rating-hover-pinch.json",
  x: "/assets/wired-icons/wired-outline-2714-logo-x-hover-pinch.json",
} as const;

export type AnimatedIconName = keyof typeof iconPaths;

const fallbackIcons: Record<AnimatedIconName, LucideIcon> = {
  approve: CheckCircle2,
  avatar: UserRound,
  chart: BarChart3,
  cloud: Cloud,
  code: Code2,
  consultation: MessageCircle,
  data: Database,
  developer: FileCode2,
  document: FileText,
  email: Mail,
  emailSend: Send,
  folder: Folder,
  github: GitFork,
  google: Award,
  home: Home,
  layers: Layers,
  linkedin: Link,
  medal: Medal,
  privacy: ShieldCheck,
  quote: Quote,
  repository: Folder,
  restApi: BadgeCheck,
  share: Share2,
  star: Star,
  x: X,
};

type LottieMarker = {
  tm: number;
  cm: string;
  dr: number;
};

type LottieAnimationData = {
  markers?: LottieMarker[];
};

type AnimatedIconProps = {
  name: AnimatedIconName;
  className?: string;
  label?: string;
};

const animationDataCache = new Map<string, Promise<LottieAnimationData>>();

function getAnimationData(path: string) {
  const cached = animationDataCache.get(path);
  if (cached) return cached;

  const request = fetch(path).then((response) => {
    if (!response.ok) {
      throw new Error(`Unable to load animation asset: ${path}`);
    }

    return response.json() as Promise<LottieAnimationData>;
  });

  animationDataCache.set(path, request);
  return request;
}

function getPreferredSegments(markers: LottieMarker[] | undefined) {
  const intro = markers?.find((marker) => marker.cm === "in-reveal") ?? markers?.[0];
  const hover =
    markers?.find((marker) => marker.cm.includes("default:hover")) ??
    markers?.find((marker) => marker.cm.includes("hover")) ??
    markers?.find((marker) => marker !== intro);

  return {
    hover: hover ? ([hover.tm, hover.tm + hover.dr] as [number, number]) : undefined,
    intro: intro ? ([intro.tm, intro.tm + intro.dr] as [number, number]) : undefined,
  };
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function AnimatedIcon({ name, className, label }: AnimatedIconProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);
  const hoverSegmentRef = useRef<[number, number] | undefined>(undefined);
  const FallbackIcon = fallbackIcons[name];

  useEffect(() => {
    let active = true;
    const path = iconPaths[name];

    async function loadAnimation() {
      const [lottie, animationData] = await Promise.all([import("lottie-web"), getAnimationData(path)]);

      if (!active || !containerRef.current) return;

      const { hover, intro } = getPreferredSegments(animationData.markers);
      hoverSegmentRef.current = hover;

      const animation = lottie.default.loadAnimation({
        animationData,
        autoplay: false,
        container: containerRef.current,
        loop: false,
        renderer: "svg",
      });

      animationRef.current = animation;

      if (prefersReducedMotion()) {
        animation.goToAndStop(intro?.[1] ?? 0, true);
        return;
      }

      if (intro) {
        animation.goToAndStop(intro[1], true);
      } else {
        animation.goToAndStop(0, true);
      }
    }

    void loadAnimation().catch(() => {
      hoverSegmentRef.current = undefined;
    });

    return () => {
      active = false;
      animationRef.current?.destroy();
      animationRef.current = null;
      hoverSegmentRef.current = undefined;
    };
  }, [name]);

  function playHoverSegment() {
    if (prefersReducedMotion()) return;

    const hoverSegment = hoverSegmentRef.current;
    if (!hoverSegment) return;

    animationRef.current?.playSegments(hoverSegment, true);
  }

  return (
    <span
      className={cn("animated-icon", className)}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      onPointerEnter={playHoverSegment}
      onPointerDown={playHoverSegment}
    >
      <span ref={containerRef} className="animated-icon-lottie" aria-hidden="true" />
      <FallbackIcon className="animated-icon-fallback" aria-hidden="true" strokeWidth={1.8} />
    </span>
  );
}
