$(document).ready(function() {
    // Inisialisasi slider (misal dengan nilai default atau mengambil dari elemen terkait)
    $(".font_size.slider").slider({
      min: 10,
      max: 100,
      value: 60, // Nilai default
      slide: function(event, ui) {
        $("#font-size-input").val(ui.value);
        // Logika untuk mengubah ukuran font...
      }
    });
  
    $(".speed.slider").slider({
      min: 1,
      max: 100,
      value: 35, // Nilai default
      slide: function(event, ui) {
        $("#speed-input").val(ui.value);
        // Logika untuk mengubah kecepatan...
      }
    });
  
    // Penanganan perubahan pada input teks
    $("#font-size-input").on("input", function() {
      var value = $(this).val();
      $(".font_size.slider").slider("value", value);
      // Logika tambahan untuk mengubah ukuran font...
    });
  
    $("#speed-input").on("input", function() {
      var value = $(this).val();
      $(".speed.slider").slider("value", value);
      // Logika tambahan untuk mengubah kecepatan...
    });
  });
  