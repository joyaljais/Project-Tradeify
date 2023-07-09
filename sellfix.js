var textboxes = document.querySelectorAll('.topname, .topname1');
    textboxes.forEach(function(textbox) {
      var label = textbox.nextElementSibling;

      textbox.addEventListener('focus', function() {
        label.style.top = '0';
        label.style.fontSize = '12px';
        label.style.color = '#555';
        label.style.backgroundColor = '#fff';
        label.style.padding = '0 5px';
        label.style.transform = 'translateY(-56%)';
      });

      textbox.addEventListener('blur', function() {
        if (!textbox.value) {
          label.style.top = '50%';
          label.style.fontSize = '';
          label.style.color = '#999';
          label.style.backgroundColor = '';
          label.style.padding = '';
          label.style.transform = '';
        }
      });
    });


