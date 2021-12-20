<template>
    <div class="flex flex-col justify-center">
      <div class="flex justify-center items-center w-22 h-22 bg-base_dark rounded-full border border-base_light">
        <svg class="absolute w-24 h-24"><path :id="`arc${skill}`" fill="#859C60" /></svg>
          <div class="w-18 h-18 flex flex-col z-10 justify-center items-center bg-gradient-to-r from-base_dark to-base_light hover:bg-base_dark rounded-full border border-base_brown">
            <img :src="`${publicPath}logos/${skill}.svg`" alt="skill" class="w-10 h-12">
            <span class="text-xs text-base_brown font-bold ">{{percent}}%</span>
        </div>
      </div>
      <p class="text-xs mt-2 text-base_light">{{label}}</p>
    </div>
</template>

<script>
 export default {
  name: "SkillElemet",
  props: ["percent", "skill", "label"],
  data() {
    return {
      publicPath: process.env.BASE_URL,
      angle: 0
    }
  },
  mounted() {
      this.animateSkills();
      this.renderArd();
  },
  methods: {
    polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    let angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  },
    describeArc(x, y, radius, startAngle, endAngle){
      let start = this.polarToCartesian(x, y, radius, endAngle);
      let end = this.polarToCartesian(x, y, radius, startAngle);
      let arcSweep = endAngle - startAngle <= 180 ? "0" : "1";
      let d = [
          "M", start.x, start.y, 
          "A", radius, radius, 0, arcSweep, 0, end.x, end.y,
          "L", x,y,
          "L", start.x, start.y
      ].join(" ");
      return d;       
    },
    renderArd() {
      let id = "arc" + this.skill;
      let arc = this.describeArc(48, 48, 44, 0, this.angle);
      document.getElementById(id).setAttribute("d", arc);
    },
    animateSkills() {
      let maxAngle = this.percent * 3.6;
      if(this.angle < maxAngle) {
        this.angle ++;      
        this.renderArd();
      }      
      requestAnimationFrame(this.animateSkills);
    }

  }
};
</script>
