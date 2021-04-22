<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <br />
    <h2 class="center">Tech Educa</h2>
    <p align="Center">
      Olá, seja bem-vindo ao Tech Educa, vamos nos conhecer?
    </p>
    <p align="Justify">
      Eu sou um Web App, e fui desenvolvido com o objetivo de ajudar na
      diminuição do uso de tecnologia entre as crianças.
    </p>
    <p align="Justify">
      Desde o seu surgimento a tecnologia vem ajudando a humanidade de várias
      formas, é da sabedoria de todos que ela sempre foi uma grande aliada.
      Entretanto, com o seu desenvolvimento ao longo dos anos muitos tornaram-se
      reféns dos meios tecnológicos, e algo que deveria ser um objeto de ajuda
      criou escravos.
    </p>
    <p align="Justify">
      Partindo desses argumentos, algumas pesquisas de campo tornaram possível a
      conclusão de que o vício em questão afeta majoritariamente o público
      infantil, e não apenas por torná-los reféns de telas, até porque as saúdes
      mental e física dessas crianças também são prejudicadas.
    </p>
    <p align="Justify">
      Portanto, é necessário preservar o bem-estar das crianças. Assim, eu, o
      Tech Educa, vim para ajudá-los a combater esse mal, aqui você encontrará
      tudo que precisa para auxiliar seu pequeno a se desprender das telas e/ou
      usá-las de maneira correta e educativa.
    </p>
    <p align="Center">Façam proveito de nosso conteúdo!</p>
    <div>
      <v-container fluid>
        <v-row dense>
          <v-col v-for="card in cards" :key="card.title" :cols="5.5">
            <v-card :to="card.link">
              <v-img :src="card.src" class="white--text align-end"></v-img>
              <v-card-title
                class="justify-center"
                v-text="card.title"
              ></v-card-title>
              <v-card-actions>
                <v-btn block text outlined :to="card.link">Acessar</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  computed: {},

  data: () => ({
    cards: [
      {
        title: "Kids",
        src:
          "https://raw.githubusercontent.com/TechEduca/images-upload/main/img-layout/kids.png",
        link: "/kids",
      },
      {
        title: "Pais e Responsáveis",
        src:
          "https://raw.githubusercontent.com/TechEduca/images-upload/main/img-layout/responsaveis.png",
        link: "/paiseresponsaveis",
      },
      {
        title: "Oque Dizem os Especialistas?",
        src:
          "https://raw.githubusercontent.com/TechEduca/images-upload/main/img-layout/especialista.png",
        link: "/especialistas",
      },
      {
        title: "Informações Complementares",
        src:
          "https://raw.githubusercontent.com/TechEduca/images-upload/main/img-layout/quiz.png",
        link: "/infocomplementar",
      },
    ],
  }),
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

.grupo {
  display: block;
  margin: 0 auto;
  width: 300px;
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
</style>
