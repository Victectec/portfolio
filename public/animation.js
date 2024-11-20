window.onload = function() {
    var c = document.getElementById('c');
    var cxt = c.getContext("2d");
  
    c.width = window.innerWidth;
    c.height = window.innerHeight;
  
    // Texto binário e caracteres chineses
    var binary = "01";
    binary = binary.split("");
  
    var chinese = "雨水火木金土风电雷龙光暗".split("");
  
    var font_size = 16;
    var columns = c.width / font_size;
  
    var drops = [];
    var interactiveColumns = [];
    var pulseActive = false;
  
    // Inicializa a posição de cada "coluna" de texto
    for (var x = 0; x < columns; x++) {
      drops[x] = 1;
      interactiveColumns[x] = false; // Inicia todas as colunas como não interativas
    }
  
    // Função de desenho
    function draw() {
      cxt.fillStyle = "rgba(0, 0, 0, 0.05)";
      cxt.fillRect(0, 0, c.width, c.height);
      
      cxt.fillStyle = "#0F0"; // Cor verde
      cxt.font = font_size + 'px arial';
      
      // Desenha os caracteres
      for (var i = 0; i < drops.length; i++) {
        // Se o "pulse" estiver ativo, todos os caracteres são binários
        var text = (pulseActive || interactiveColumns[i]) 
                   ? binary[Math.floor(Math.random() * binary.length)] 
                   : chinese[Math.floor(Math.random() * chinese.length)];
        
        cxt.fillText(text, i * font_size, drops[i] * font_size);
        
        if (drops[i] * font_size > c.height && Math.random() > 0.975)
          drops[i] = 0;
        
        drops[i]++;
      }
    }
  
    // Detecta a posição do mouse e marca as colunas interativas
    c.addEventListener('mousemove', function(event) {
      var column = Math.floor(event.clientX / font_size);
      interactiveColumns[column] = true; // Marca a coluna como interativa
    });
  
    // Limpa a marcação das colunas depois de um tempo para retornar ao estado original
    setInterval(function() {
      for (var i = 0; i < interactiveColumns.length; i++) {
        interactiveColumns[i] = false; // Reseta a interatividade para voltar ao estado original
      }
    }, 200); // Reduzido para 200 ms para troca mais rápida
  
    // Evento de clique para acionar o "pulse"
    c.addEventListener('click', function() {
      pulseActive = true; // Ativa o "pulse"
      
      setTimeout(function() {
        pulseActive = false; // Desativa o "pulse" após 1 segundo
      }, 1000); // Ajuste o tempo conforme necessário
    });
  
    setInterval(draw, 33);
  };  