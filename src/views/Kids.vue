<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/kids.png" />
    <br />
    <h2 class="center">Kids</h2>
    <h2 class="center">Júlia e os riscos da tecnologia para as crianças!!</h2>
    <br />
    <div class="video-container">
      <iframe
        src="https://www.youtube.com/embed/2cuo2neiu_g"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: "home",
  computed: {},

  data: () => ({}),
};
</script>
<style lang="scss" scoped>
.center {
  text-align: center;
}
.headline {
  text-transform: uppercase;
  margin: 4rem auto;
  font-size: 4rem;
}
img {
  display: block;
  margin: 0 auto;
  width: 150px;
}

h2 {
  color: #35495e;
  text-transform: capitalize;
  margin-bottom: 2rem;
}

h3 {
  color: #42b883;
  margin-bottom: 0;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  .subtitle {
    color: grey;
    font-size: 0.98rem;
    float: right;
    font-weight: normal;
  }
}

p {
  margin-top: 0.4rem;
}

.sections {
  max-width: 40vw;
  margin: 0 auto;
  margin-top: 4rem;
}

.section {
  margin-bottom: 3rem;
}

.group {
  margin-bottom: 4rem;
}

.video-container {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.video-container::after {
  padding-top: 56.25%;
  display: block;
  content: "";
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
