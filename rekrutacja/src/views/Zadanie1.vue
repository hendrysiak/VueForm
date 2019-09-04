<template>
  <section>
    <h2>Zadanie 1</h2>
    <img src="https://i.pinimg.com/originals/1e/2a/64/1e2a6462b899c6d93a20bac829bdd87f.jpg" alt />
    <ul>
      <li>Zadanie polega na odwzorowaniu jak najbardziej wiernie projektu który widać powyżej.</li>
      <li>Tworzymy tylko panel widoczny powyżej, tło za nim jest nie istotne</li>
      <li>Grafiki wykorzystane w projekcie nie muszą być identyczne ze względu na ich brak w assetach. Pozostawiam dowolność kolorystyczny i stylistyczną odnośnie zdjęcia na lewym panelu.</li>
      <li>Wszelkie elemety klikalne muszą działać, oprócz Sign in with...</li>
      <li>prawy panel ma składać się z 3 komponentów, register, login, forgot password i mają się przełączać po kliknięciu w odpowiedni element</li>
      <li>Podstawowa walidacja formularza ma działać i pokzywać odpowiednie errory</li>
      <li>Przy wypełnionym formularzu przycisk Sign In ma przenosić do części z zadania 2</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Zadanie1"
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 50px;
  text-align: center;
  color: crimson;
}
img {
  display: block;
  margin: auto;
}

ul {
  text-align: center;
  li {
    margin-top: 20px;
  }
}
</style>
