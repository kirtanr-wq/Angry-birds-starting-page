# CodeBounty 2.0 — Starting Page Animation

## Overview

This is the opening animation for the **CodeBounty 2.0** website.

The website follows an **Angry Birds-inspired visual theme**, and the starting page is designed to immediately introduce that theme before the user enters the main website.

The animation should be short, smooth, visually engaging, and should not require any interaction from the user.

---

## Animation Concept

When the website loads, the user is presented with a full-screen Angry Birds-themed opening scene.

The animation automatically plays once.

The purpose of the sequence is to:

1. Introduce the Angry Birds theme.
2. Reveal the **CodeBounty 2.0** branding.
3. Create an energetic transition into the main website.
4. Keep the experience short enough that it does not delay the user.

---

## Animation Flow

### Stage 1 — Initial Scene

The opening screen appears with the main Angry Birds-themed environment.

The screen should initially remain relatively clean so that the user's attention is focused on the animation.

---

### Stage 2 — Character / Object Movement

The main animated elements enter or move through the scene.

Movement should follow the playful physics-inspired style associated with Angry Birds.

Animations can include:

- slight bouncing
- squash and stretch
- rotation
- overshoot
- impact movement
- small environmental reactions

The motion should feel playful rather than mechanical.

---

### Stage 3 — CodeBounty Reveal

The animation transitions into the main branding reveal.

The text:

**CODEBOUNTY 2.0**

should become the main visual focus.

The reveal should feel energetic and connected to the opening animation rather than appearing as normal webpage text.

---

### Stage 4 — Final Hold

After the logo/title reveal, hold the completed composition briefly.

This gives the user enough time to recognize the event branding before transitioning to the main website.

---

### Stage 5 — Website Transition

The starting animation fades, slides, scales, or otherwise transitions out.

The main CodeBounty website is then revealed.

The transition should be seamless.

There should be no page reload between the animation and the main website.

---

## Interaction

The opening sequence is completely automatic.

The user should NOT need to:

- click
- drag
- scroll
- press a key
- launch anything

The animation begins automatically when the page loads.

---

## Design Direction

The opening should feel:

- playful
- energetic
- polished
- game-inspired
- clean
- cinematic
- recognizably Angry Birds-themed

Avoid overcrowding the screen with too many characters or effects.

The animation should support the **CodeBounty 2.0** branding rather than overpower it.

---

## Animation Principles

Use smooth easing rather than constant-speed movement.

Recommended animation behavior:

- `ease-out` for objects entering
- `ease-in` for fast impacts
- `ease-in-out` for camera/environment movement
- slight overshoot for bouncing objects

Where appropriate, use:

- squash and stretch
- anticipation
- follow-through
- secondary motion

These small details will make the animation feel much more polished.

---

## Recommended Technology

The animation can be built using:

- HTML
- CSS
- JavaScript

For more complex animation:

- GSAP
- GSAP Timeline

GSAP is recommended because the entire opening sequence can be controlled using one master timeline.

Example structure:

```javascript
const introTimeline = gsap.timeline();

introTimeline
    .from(".scene", {
        opacity: 0,
        duration: 0.5
    })

    .from(".main-character", {
        x: -500,
        duration: 1,
        ease: "power3.out"
    })

    .from(".codebounty-title", {
        scale: 0,
        opacity: 0,
        duration: 0.7,
        ease: "back.out(1.7)"
    })

    .to(".intro-screen", {
        opacity: 0,
        duration: 0.6
    })

    .from(".main-website", {
        opacity: 0,
        duration: 0.6
    });