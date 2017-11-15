<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">


      <link href=" {{asset('css/app.css')}} " rel="stylesheet">

    </head>
    <body>

        <div  id="app">

            <div  class="row"   >
                <button v-for="(botone, index) in botones" class="btn-success col-lg-2" v-on:click="Actu_grafico(index,botone)" >@{{botone.texto}}</button>
            </div>

            <Grafico v-bind:tipo_grafico="tipo_seleccionado" ></Grafico>
            <i-button class="btn-success" @click="show">Click me!</i-button>
            <Modal v-model="visible" title="Welcome">Welcome to iView</Modal>

            <table_iview></table_iview>
        </div>
    </body>
</html>
<script src=" {{ asset('js/app.js')}} "></script>

