const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#trigger",
    scrub: true,
    markers: true,
    start:
      "top 50%" /* remove this line if you want the effect to kick in straight away */,
  },
});
tl.to("#animate2", {
  top: "30%",
  duration: 1,
  rotation: -25,
  opacity: 1,
});
tl.to(
  "#animate3",
  {
    top: "25%",
    duration: 1,
    rotation: -30,
    opacity: 1,
    ease: Power1.easeOut,
  },
  "<"
);
tl.to(
  "#animate6",
  {
    top: "50%",
    duration: 1,
    rotation: 70,
    opacity: 1,
  },
  "<"
);

const tla = gsap.timeline({
  scrollTrigger: {
    trigger: "#trigger1",
    scrub: true,
    markers: true,
    start: "top 50%",
  },
});
tla.to("#animate4", {
  scaleX: 5,
  scaleY: 5,
  duration: 1,
  opacity: 1,
});
// tla.to("#animate5", { xPercent: 350, duration: 1 }, "<");

const registerVideo = (bound, video) => {
	bound = document.querySelector(bound);
	video = document.querySelector(video);
	const scrollVideo = ()=>{
		if(video.duration) {
			const distanceFromTop = window.scrollY + bound.getBoundingClientRect().top;
			const rawPercentScrolled = (window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight);
			const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);
			
			video.currentTime = video.duration * percentScrolled;
		}
		requestAnimationFrame(scrollVideo);
	}
	requestAnimationFrame(scrollVideo);
}


registerVideo("#bound-one", "#bound-one video");