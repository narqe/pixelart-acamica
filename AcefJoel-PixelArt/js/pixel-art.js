var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');
var indicadorColores = document.getElementById('indicador-de-color');
var guardarImg = document.getElementById('guardar');
var borrarPx = document.getElementById('borrar')

window.onload = function() {
  generarPaleta();
  generarGrilla();
  seleccionarColor();
  pintarSegunColorSeleccionado();
};

function generarPaleta() {
  for (var i = 0; i < nombreColores.length; i++) {
    var div = document.createElement("div"); 
        div.classList.add('color-paleta');
        div.setAttribute("style", 'background-color: ' + nombreColores[i]);
        div.setAttribute("title", nombreColores[i]);
        div.setAttribute("id", nombreColores[i]);
        paleta.appendChild(div);
  }
}

function generarGrilla() {
  for (var i = 0; i < 1750; i++) {
    var div = document.createElement("div"); 
        div.setAttribute("id", 'pixel-'+i);
        grillaPixeles.appendChild(div);
  }
}

function seleccionarColor(){
  for(var i = 0; i < nombreColores.length; i++){
    document.getElementById(nombreColores[i]).addEventListener('click',
    function() {
        indicadorColores.setAttribute("style", 'background-color: ' + this.id);
    });
  }
}

function pintarSegunColorSeleccionado(){
  for (var i = 0; i < 1750; i++) {
    selectedPx = document.getElementById('pixel-'+i);
    selectedPx.addEventListener('click', pintar, false);
    selectedPx.addEventListener('dragover', pintar, false);
  } 
}

function pintar(e){
  var colorSeleccionado = indicadorColores.style.backgroundColor;
  e.target.setAttribute("style", 'background-color:' + colorSeleccionado);
}

function borrarPixeles(){
  $("#grilla-pixeles div").each(function() {
    $(this).animate({
      backgroundColor: '#FFF',
    }, 'slow')
  });
}

borrarPx.addEventListener('click', borrarPixeles);
guardarImg.addEventListener('click', guardarPixelArt);
colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicadorColores.setAttribute("style", 'background-color: ' + colorActual);
  })
);

$(".imgs li img").each(function () {
  document.getElementById(this.id).addEventListener('click', 
  function(){
    var $superheroe = eval(this.id);
    cargarSuperheroe($superheroe);
  })
})