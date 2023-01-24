<template>
  <div class="team_block container">
    <h2 class="team_header py-5">Команда</h2>
    <div class="team_panels d-flex flex-wrap">
      <div class="team_panel col-xs-6 col-sm-6 col-md-4">
        <img class="team_photo" src="../img/kek/literally_me.jpg" alt="photo1">
        <h5>Мифтахов Михаил</h5>
        <div>Главый программист и невероятный дизайнер сего безобразия</div>
      </div>
      <div class="team_panel col-xs-6 col-sm-6 col-md-4">
        <img class="team_photo" src="../img/kek/pes.jpg" alt="photo2">
        <h5>Вакуленко Дмитрий</h5>
        <div>Программист поменбше, главный пес проекта</div>
      </div>
      <div class="team_panel col-xs-6 col-sm-6 col-md-4">
        <img class="team_photo" src="../img/kek/vlad.jpg" alt="photo3">
        <h5>Макеев Владислав</h5>
        <div>Еще менбше программист блин, выдает базу</div>
      </div>
      <div class="team_panel col-xs-6 col-sm-6 col-md-4">
        <img class="team_photo" src="../img/kek/literally_me_3.png" alt="photo3">
        <h5>Мистагов Михаил</h5>
        <div>Организует работу этих трех малолетних дебилов</div>
      </div>

    </div>
    <div class="team_button d-flex justify-content-center pb-5">
      <a class="btn px-4 py-3" href="/team.html">Вся команда</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
/* team */
.team_header {
  font-weight: bold;
  text-align: center;
}

.team_block h5 {
  font-weight: 1000;
}

.team_block .btn {
  display: inline-block;
  color: rgb(0, 0, 0);
  padding: 5px 10px;
  text-decoration: none;
  border-radius: 5px;
  border-color: gray;
}

.team_photo {
  height: auto;
  width: auto;
  max-width: 280px;
  display: block;
  margin-bottom: 10px;
}

.team_panel {
  padding: 0 45px;
  margin-bottom: 20px;
}

</style>