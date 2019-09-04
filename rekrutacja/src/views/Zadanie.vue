<template>
  <div>
    <h1>Zadanie rekrutacyjne na Frontend Dewelopera do projektu Niekomercyjnego</h1>
    <ul>
      <li>Wykonane zadanie uznaje się za zakończone gdy zostanie wrzucony Pull Request na repozytorium zadanie. Nie ma możliwości poprawy zadania po wykonaniu PR</li>
      <li>
        Zadanie składa się z dwóh części
        <ul>
          <li>Stworzenie działającego (bez backendu) panelu logowania włącznie z wszelkimi przyciskami czy stylami</li>
          <li>Stworzenie prostego Landing Page na podstawie projektu graficznego</li>
        </ul>
      </li>
      <li>Czas zaplanowany na wykonanie zadania to koniec września, dokładnie 30.09.2019</li>
      <li>Brak wykonania zadania w tym terminie dyskwalifikuje z dalszego uczestnictwa w procesie rekrutacji</li>

      <li>Projekt ma zostać wykonany w technologii VueJS</li>
      <li>Projekt zakłada użycie Vue Router</li>
      <li>Ocenianie będzie odwzorowanie projektu lecz proszę mieć na uwadzę, że wszelkie przejawy własnej inwencji będą bardzo sprzyjały przy ocenie końcowej. Będą to elementy typu animacje, przejścia, hovery, vuex, style globalne i wiele wiele innych. Czym więcej takich elementów tym lepiej.</li>
      <li>Zanim zaczniecie pisać kod, przygotujcie lepiej plan działania.</li>
      <li>W projekcie są błędy których to znalezienie jest dodatkowo punktowane.</li>
      <li>
        <strong>Powodzenia</strong>
      </li>
      <li>Aby przystąpić do zadanie należy zrobić fork w repozytorium i dopiero wykonywać zadanie. Więcej info w dokumentacji github.</li>
      <li>PS. Strona Zadanie.vue na której jest to zadanie jest do ukrycia przy pierwszym podejściu do kodu. Cała treść zadania jest dostępna w README.md</li>
    </ul>
    <Zadanie1 />
    <Zadanie2 />
  </div>
</template>

<script>
import Zadanie1 from "@/views/Zadanie1.vue";
import Zadanie2 from "@/views/Zadanie2.vue";
export default {
  name: "Zadanie",
  components: {
    Zadanie2,
    Zadanie1
  }
};
</script>

<style lang="scss">
h1 {
  text-align: center;
}

ul {
  list-style: none;
  li {
    font-size: 20px;
    margin: 5px 0;
    font-size: 20px;
  }
}
.buttonBox {
  display: flex;
  justify-content: space-around;
  padding: 50px;
  button {
    padding: 20px 50px;
    background: crimson;
    border: none;
    font-size: 24px;
    color: white;
    border-radius: 5px;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      background: #be1436;
    }
  }
}
</style>
